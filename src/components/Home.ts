import styled from "styled-components";

export const Main = styled.main`
  position: relative;

  ::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 80vw;
  }

  .student {
    display: none;
    height: 100vh;
  }

  .student.selected {
    display: block;
  }

  .student .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  color: white;
  display: flex;
  margin-top: 13%;
  margin-left: 16%;
  font-size: 3em;
`;

export const Text = styled.p`
  color: white;
  display: flex;
  margin-left: 4%;
  margin-top: 2%;
  font-size: 1.3em;
  flex-direction: column;
  margin-right: 50%;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

`;

export const Buttons = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 10vw;
  justify-content: center;
  align-items: center;
  gap: 18px;
  background-color: rgba(0, 0, 0, 0.3);
  list-style: none;

  :hover{
    transform: scale(1.05)
  }

  ${Button} {
    border: none;
    background: #000000;
    cursor: pointer;
    border-radius: 50%;
  }

  ${Button} img {
    border-radius: 50%;
    height: 2%;
    width: 7vw;
  }
`;
