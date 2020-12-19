import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../Screens/Home";
import SobreNosotros from "../Screens/SobreNosotros";
import Servicios from "../Screens/Servicios";
import InstalacionesElectromecanicas from "../Screens/InstalacionesElectromecanicas";
import InstalacionesElectricasServices from "../Screens/InstalacionesElectricasServices";
import InstalacionesMecanicas from "../Screens/InstalacionesMecanicas";
import SistemasDeDeteccionDeIncendios from "../Screens/SistemasDeDeteccionDeIncendios";
import Topografia from "../Screens/Topografia";
import Geolocalizacion from "../Screens/Geolocalizacion";
import MecanizadoCNC from "../Screens/MecanizadoCNC";
import Impresiones3D from "../Screens/Impresiones3D";
import Contactos from "../Screens/Contactos";
import Clientes from "../Screens/Clientes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/SobreNosotros" component={SobreNosotros} />
        <Route exact path="/Clientes" component={Clientes} />
        <Route exact path="/Servicios" component={Servicios} />
        <Route
          exact
          path="/InstalacionesElectromecanicas"
          component={InstalacionesElectromecanicas}
        />
        <Route
          exact
          path="/InstalacionesElectricasServices"
          component={InstalacionesElectricasServices}
        />
        <Route
          exact
          path="/InstalacionesMecanicas"
          component={InstalacionesMecanicas}
        />
        <Route
          exact
          path="/SistemasDeDeteccionDeIncendios"
          component={SistemasDeDeteccionDeIncendios}
        />
        <Route exact path="/Topografia" component={Topografia} />
        <Route exact path="/Geolocalizacion" component={Geolocalizacion} />
        <Route exact path="/MecanizadoCNC" component={MecanizadoCNC} />
        <Route exact path="/Impresiones3D" component={Impresiones3D} />
        <Route exact path="/Contactos" component={Contactos} />
        <Route exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
