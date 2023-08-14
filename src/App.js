import { Fragment } from "react";
import { Route } from 'react-router-dom'
import Homeone from "./Pages/Homeone";
import Head from "./Componet/Head/Head";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Fashion from "./Pages/Fashion";
import New from "./Pages/New";
import Contact from "./Pages/Contact";


function App() {

  return (
    <Fragment>
      <Head />
      <Route path="/" exact>
        <Homeone />
      </Route>

      <Route path="/About" exact>
        <About />

      </Route>

      <Route path="/Product" exact>
        <Product />

      </Route>
      <Route path="/Fashion" exact>
        <Fashion />

      </Route>

      <Route path="/New" exact>
        <New />

      </Route>
      <Route path="/contact" exact>
        <Contact />

      </Route>



    </Fragment>
  )
}

export default App;
