import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoginForm from '../pages/LoginForm';

const LOG_IN = gql`
mutation signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    token
  }
}
`;

 function Login() {
    const client = useApolloClient();
    const [login, {  error }] = useMutation(LOG_IN,{
        onCompleted: ( data ) => {
            localStorage.setItem("token", data.signIn.token);
            client.writeData({ data: { authenticated: true } });
           
          }
    });
   
    return <LoginForm login={login} error = {error}/>
  }

  export default Login;