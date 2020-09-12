import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from  '../Screens/Home';
import SobreNosotros from '../Screens/SobreNosotros';

export default function Routes(){
    return <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/SobreNosotros" component={SobreNosotros}/>

        <Route component={Home}/>
    </Switch>
}