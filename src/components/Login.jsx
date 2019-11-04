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
    const [login, { loading, error }] = useMutation(LOG_IN,{
        onCompleted: ( signIn ) => {
            console.log(signIn)
            localStorage.setItem("token", signIn.token);
            client.writeData({ data: { authenticated: true } });
          }
    });
    if(loading) return <span>loading</span>
    if(error) return <span>error</span> 
    return <LoginForm login={login}/>
  }

  export default Login;