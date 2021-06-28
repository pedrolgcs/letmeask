import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

// services
import { database } from '../../services/firebase';

// components
import Button from '../../components/Button';
import RoomCode from '../../components/RoomCode';
import Question from '../../components/Question';

// contexts and hooks
import { useRoom } from '../../hooks/useRoom';

// assets
import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';

// styles
import * as Style from './styles';

type RoomParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    toast.success('Sala encerrada!')
    history.push('/');
  }

  return (
    <Style.Container>
      <header>
        <div className="content">
          <img src={logoImg} alt="Logo" />
          <div>
            <RoomCode code={params.id} />
            <Button onClick={handleEndRoom} isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala - {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            >
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          ))}
        </div>
      </main>
    </Style.Container>
  );
};

export default AdminRoom;
