import React from 'react';
import toast from 'react-hot-toast';

// assets
import copyImage from '../../assets/images/copy.svg';

// styles
import * as Style from './styles';

interface RoomCodeProps {
  code: string;
}

const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  function copyRoomToClipboard() {
    navigator.clipboard.writeText(code);
    toast.success('Código da sala copiado!');
  }

  return (
    <Style.Button onClick={copyRoomToClipboard}>
      <div>
        <img src={copyImage} alt="Copy room code" />
      </div>
      <span>#Sala {code}</span>
    </Style.Button>
  );
};

export default RoomCode;
