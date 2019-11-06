import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Episode from "./Episodes/Episode";
import Episodes from "./Episodes/Episodes";
import Character from "./Characters/Character";
import Characters from "./Characters/Characters";
import Starship from "./Starships/Starship"
import Login from "./Login";
// import Characters from "./characters/Characters";


const Pages = () => {
    const isAuth = localStorage.getItem('token');
    
  return (
    <Switch>
           {/* <Route path="/login" component={Login}  /> */}
        <Route path="/episodes" component={Episodes} exact />
        <Route path="/episodes/:episodeId" component={Episode} />
        <Route path="/characters" component={Characters} exact/>
        <Route path="/characters/:characterId" component={Character} />
        <Route path="/starships/:starshipId" component={Starship} />
        <Route path="/" exact component={() => <Redirect to="/episodes" />} />
    </Switch>
  );
};

export default Pages;