import { Link } from 'react-router-dom';
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2em;
  margin-left: 3%; 
  border: 1px solid white;
  padding: 5px 7px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  transition: 0.3s ease-in-out; 
`;

export const DivLink = styled.div`
margin-top:20px`;

interface StudentProps {
    selected?: boolean;
}

export const Student = styled.div<StudentProps>`
width: 23vw;
height: 78vh;
margin-left: 33%;
list-style: none;
padding: 1.5%;
border: 1px solid #ccc;
border-radius: 15px;
text-align: center;
box-shadow: 7px 7px 20px 0px rgba(0, 0, 0, 1);
background-color: ${(props) => (props.selected ? 'lightgray' : 'transparent')};
`

export const ImageStudent = styled.img`
  max-width: 100%;
  height: auto;
  border: 3px solid black;
`;

export const Content = styled.div``;

export const NameStudent = styled.h2`
  margin-top: 2%;
  font-size: 2em;
`;

export const Description = styled.p`
  color: black;
  display: flex;
  margin-top: 1em;
  margin-left: 16%;
  font-size: 1.3em;

  ul {
    font-weight: bold;
    text-align: left

  }
  
`;


