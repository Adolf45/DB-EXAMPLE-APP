import {Route, Switch} from 'react-router-dom';

//Pages
import Customers from './pages/Customers/Index';

 const Routes = () => (
   <Switch>
    <Route exact path="/" component={Customers}  />
    <Route exact path=" /clientes" component={Customers}  />
    <Route exact path = " /clientes/agregar" component={Customers}  />

   </Switch>

 );

 export default Routes;