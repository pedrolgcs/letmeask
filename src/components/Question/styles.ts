import styled, { css } from 'styled-components';

type ContainerProps = {
  isAnswered: boolean;
  isHighLighted: boolean;
};

export const Container = styled.div<ContainerProps>`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  ${({ isHighLighted }) =>
    isHighLighted &&
    css`
      background: #f4f0ff;
      border: 1px solid #835afd;

      footer .user-info span {
        color: #29292e;
      }
    `}

  ${({ isAnswered }) => 
    isAnswered && 
    css`
      background: #dbdcdd;
      border: 0;
      opacity: 0.5;
    `
  }

  p {
    color: #29292e;
  }

  footer {
    margin-top: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      > span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
      }
    }

    .buttons-container {
      display: flex;
      align-items: center;
      gap: 12px;

      button {
        border: 0;
        cursor: pointer;
        background: transparent;
        transition: filter 0.5s;

        &.like-button {
          color: #737380;
          gap: 8px;

          display: flex;
          align-items: flex-end;

          &.liked {
            color: #835afd;

            svg path {
              stroke: #835afd;
            }
          }
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`;
