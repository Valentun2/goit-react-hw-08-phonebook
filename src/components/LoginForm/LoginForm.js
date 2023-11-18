import { fetchCreateUser, fetchLoginUser, name } from 'redux/operations';
import {
  Container,
  ToggleContainer,

  Toggle,
  Form,
  FormContainer,
  TogglePanel,
  Text,
  ButtonToggle,
  Wrraper,
  FormButton,
  Input,
} from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginForm = () => {
  
const navigate = useNavigate()
const user = useSelector(getUser);

useEffect(()=>{
user.authorizationToken &&  navigate('/')

},[user])

  const dispatch = useDispatch();



  const registerButtonClick = e => {
    e.preventDefault();
    const container = document.querySelector('.container');
    container.classList.add('active');
  };

  const loginButtonClick = () => {
    const container = document.querySelector('.container');

    container.classList.remove('active');
  };

  const createUser = e => {
    e.preventDefault();

    console.dir(e.target.name.value);

    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(newUser);
    dispatch(fetchCreateUser(newUser));
  };

  const loginUser = e => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(user);
    dispatch(fetchLoginUser(user));
  };

  // console.log(container);

  return (
    <Wrraper>
    <Container className="container active" id="1">
      <FormContainer className="sign-up ">
        <Form onSubmit={createUser}>
          <h2>Create account</h2>
          <Input type="text" name="name" placeholder="name" />

          <Input type="email" name="email" placeholder="email" />
          <Input type="password" name="password" placeholder="password" />

          <FormButton>Create</FormButton>
        </Form>
      </FormContainer>

      <FormContainer className="sign-in">
        <Form onSubmit={loginUser}>
          <h2>Sign in</h2>
          <Input type="text" name="email" placeholder="email" />
          <Input type="password" name="password" placeholder="password" />
          <FormButton>Sign in</FormButton>
        </Form>
      </FormContainer>
      <ToggleContainer>
        <Toggle>
          <TogglePanel className="toggle-left">
            <h2>Hello</h2>
            <Text>
              Register with your personal details to use all of site features{' '}
            </Text>
            <ButtonToggle
              type="button"
              className="register"
              onClick={registerButtonClick}
            >
              Sign up
            </ButtonToggle>
          </TogglePanel>
          <TogglePanel className="toggle-right">
            <h2>Welcome Back</h2>
            <Text>Enter your personal details to use all of site features</Text>
            <ButtonToggle
              type="button"
              className="login"
              onClick={loginButtonClick}
            >
              Sign in
            </ButtonToggle>
          </TogglePanel>
        </Toggle>
      </ToggleContainer>
    </Container>
    </Wrraper>
  );
};

export default LoginForm;
