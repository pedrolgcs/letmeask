import React, { ReactNode } from 'react';

// styles
import * as Style from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighLighted?: boolean;
  isAnswered?: boolean;
};

const Question: React.FC<QuestionProps> = ({
  content,
  author,
  isAnswered = false,
  isHighLighted = false,
  children,
}) => {
  return (
    <Style.Container isAnswered={isAnswered} isHighLighted={isHighLighted}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div className="buttons-container">{children}</div>
      </footer>
    </Style.Container>
  );
};

export default Question;
