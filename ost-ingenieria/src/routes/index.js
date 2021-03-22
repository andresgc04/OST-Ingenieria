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
        <Route path="/" exact component={Home} />
        <Route path="/SobreNosotros" component={SobreNosotros} />
        <Route path="/Clientes" component={Clientes} />
        <Route path="/Servicios" component={Servicios} />
        <Route
          path="/InstalacionesElectromecanicas"
          component={InstalacionesElectromecanicas}
        />
        <Route
          path="/InstalacionesElectricasServices"
          component={InstalacionesElectricasServices}
        />
        <Route
          path="/InstalacionesMecanicas"
          component={InstalacionesMecanicas}
        />
        <Route
          path="/SistemasDeDeteccionDeIncendios"
          component={SistemasDeDeteccionDeIncendios}
        />
        <Route path="/Topografia" component={Topografia} />
        <Route path="/Geolocalizacion" component={Geolocalizacion} />
        <Route path="/MecanizadoCNC" component={MecanizadoCNC} />
        <Route path="/Impresiones3D" component={Impresiones3D} />
        <Route path="/Contactos" component={Contactos} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
