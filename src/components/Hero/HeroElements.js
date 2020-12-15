import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: url(${({ image }) => image && image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  margin-top: -60px;
`;

export const Container = styled.div`
  color: #fff;
  max-width: 350px;
  padding: 1rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: clamp(0.875rem, 1.125vw, 1rem);
    margin-bottom: 2rem;
  }

  button {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    padding: 0.5rem 1.25rem;
    color: #000;
    background: #ffb347;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
`;
