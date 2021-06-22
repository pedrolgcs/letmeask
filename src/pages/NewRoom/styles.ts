import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  aside {
    height: 100vh;
    flex: 7;
    color: #fff;
    background: #835afd;
    padding: 120px 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    display: flex;
    flex-direction: column;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #fff;
        border: 1px solid #a8a8b3;
      }

      button {
        margin-top: 16px;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: #737380;
      margin-top: 16px;

      a {
        color: #e559f9;
      }
    }
  }
`;
