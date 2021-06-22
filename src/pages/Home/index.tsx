import React from 'react';
import { useHistory } from 'react-router-dom';

// components
import Button from '../../components/Button';

// hooks
import { useAuth } from '../../contexts/auth';

// assets
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

// styles
import * as Style from './styles';

const Home: React.FC = () => {
  const { signInWithGoogle, user } = useAuth();
  const history = useHistory();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

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
          <button
            type="button"
            className="create-room"
            onClick={handleCreateRoom}
          >
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </Style.Container>
  );
};

export default Home;
