import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from  '../Screens/Home';
import SobreNosotros from '../Screens/SobreNosotros';
import Servicios from '../Screens/Servicios';
import Contactos from '../Screens/Contactos';

export default function Routes(){
    return <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/SobreNosotros" component={SobreNosotros}/>
        <Route path="/Servicios" component={Servicios}/>
        <Route path="/Contactos" component={Contactos}/>
        <Route component={Home}/>
    </Switch>
}