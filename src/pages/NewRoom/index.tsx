import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

// components
import Button from '../../components/Button';

// services
import { database } from '../../services/firebase';

// contexts
import { useAuth } from '../../contexts/auth';

// assets
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

// styles
import * as Style from './styles';

type Inputs = {
  newRoom: string;
};

const NewRoom: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<Inputs>();
  const { user } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = ({ newRoom }) => {
    const roomRef = database.ref('rooms');

    const firebaseRoom = roomRef.push({
      authorId: user?.id,
      title: newRoom,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  };

  return (
    <Style.Container>
      <aside>
        <img src={illustrationImg} alt="illustration" />
        <strong>
          Toda pergunta tem <br /> uma resposta
        </strong>
        <p>
          Aprenda a compartilhar conhecimento <br /> com outras pessoas
        </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              required
              {...register('newRoom')}
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </Style.Container>
  );
};

export default NewRoom;
