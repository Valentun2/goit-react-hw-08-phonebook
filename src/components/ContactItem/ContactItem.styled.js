import styled from "styled-components";


export const Button = styled.button`
font-size: 12px;
transition: all .3s ease-in-out;

padding: 3px 5px;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
  
  &:hover,
  &:focus {
    color: white;
    background: #000080;
  }`

export const Contact  = styled.li`
display: flex;
gap: 10px;
align-items:center;
transition: all .4s ease-in-out;

&:hover{

  box-shadow:0 5px 15px rgba(0,0,0,.35);
}

`
export const Name = styled.p`
padding: 5px;
font-size:20px
`