import styled, {keyframes} from "styled-components";

const move = keyframes`
0%,49.9%{
opacity: 0;
z-index: 1;
}
50%,100%{
opacity:1;
z-index: 5;
}
`

export const Wrraper = styled.div`
background-color: #c9d6ff;
background:linear-gradient(to right, #e2e2e2,#c9d6ff );
height: 100vh;
padding: 150px;
`

export const Container = styled.div`
overflow: hidden;
position: relative;
max-width: 768px;
min-height: 400px;
margin-left: auto;
margin-right:auto;
box-shadow:0 5px 15px rgba(0,0,0,.35);
padding: 50px;
display: flex;
background-color: white;
gap: 170px;
&.active .sign-in{
    transform: translateX(100%);
}

&.active .sign-up{
    transform: translateX(100%);
opacity: 1;
z-index: 5;
/* animation: ${move} .7s; */
}
/* &.active .toggle{
    transform: translateX(50%)
} */
&.active .toggle-left{
    transform: translateX(200%)
}
&.active .toggle-right{
    transform: translateX(0%)
}

`


export const ToggleContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: all .7s ease-in-out;
z-index: 1000;
border-radius:150px 0 0 100px;
${Container}.active &{
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
}
`

export const Toggle = styled.div`
background-color: #512da8;
height: 100%;
position: relative;
width: 200%;
transform: translateX(0);
transition: all .7s ease-in-out;

`

export const TogglePanel = styled.div`
color: #fff;
padding-top: 150px;
position: absolute;
width: 50%;
height: 100%;
top: 0;
transform: translateX(0);
transition: all .7s ease-in-out;
&.toggle-left{
    transform: translateX(0);
text-align: center;

}
&.toggle-right{
    transform: translateX(-200%);

color: #fff;
    text-align:center;
}

`



export const ButtonToggle = styled.button`
 margin-top: 15px;
padding: 10px 25px;
border-radius: 8px;
background:transparent;
border: 1px solid #fff;
color: #fff;
font-size: 12px;
padding: 10px 45px;
text-transform:uppercase;
cursor: pointer;
transition: all .2s ease-in-out;
font-weight:600;
&:hover,
&:focus{
  
    border: 2px solid #fff;

}
`




export const Form = styled.form`
background-color:#fff;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
gap:10px
`

export const FormContainer = styled.div`
padding: 30px;
position: absolute;
top: 0;
height: 100%;
transition: all .7s ease-in-out;
&.sign-in{
    width: 50%;
    z-index: 2;
    left: 0;
}

&.sign-up{
    width: 50%;
    z-index: 1;
    left: 0;
    opacity: 0;
}
`


export const Text = styled.p`
max-width:70%;
margin:10px auto 0
`

export const FormButton = styled.button`
background-color: #512da8;
color:#fff;
font-size: 12px;
padding: 10px 45px;
border: 1px solid transparent;
border-radius:8px;
text-transform:uppercase;
cursor: pointer;
transition: all .2s ease-in-out;
font-weight:600;
&:hover,
&:focus{
  background-color:#000080;

}
`

export const Input = styled.input`
background-color: #eee;
border: none;
margin: 8px 0;
padding: 10px 15px;
font-size: 13px;
border-radius: 8px;

width: 100%;
outline: none;
`