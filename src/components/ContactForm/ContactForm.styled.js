import styled from "styled-components";


export const FormContact = styled.form`

    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 200px;
    
    margin-bottom: 30px;



`

export const Button = styled.button`
font-size: 12px;
padding: 5px 5px;
border: 1px solid #000080;
border-radius:8px;
text-transform:uppercase;
cursor: pointer;
transition: all .2s ease-in-out;
font-weight:600;
max-width:120px;
&:hover,
&:focus{
  background-color:#000080;
color: white;
}
`

export const Input = styled.input`

margin: 8px 0;
padding: 8px 12px;
font-size: 12px;
border-radius: 8px;
border: 1px solid black;
width: 100%;
outline: none;
transition: all .2s ease-in-out;

&:focus{
    border: 1px solid blue;
}
`