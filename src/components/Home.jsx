import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';

import Login from '../components/Login';
import Pages from '../components/Pages';
import Navbar from './Navbar';

const AUTH_QUERY = gql`
query AuthQuery{
    authenticated @client
}`;

const Home = () => {
    const { data, loading, error } = useQuery(AUTH_QUERY);
    if(loading) return <span>loading</span>;
    if(error) return <span>error</span>;
    return (
        <div>
            {data.authenticated ? <> <Navbar/> <Pages /> </> : <Login />}
        </div>
    )
}

export default Home;