import { Fragment } from "react";
import Homeone from "./Pages/Homeone";
import HomeHeader from "./Componet/HomeHeader/HomeHeader";
import Head from "./Componet/Head/Head";

function App() {

  return (
    <Fragment>
      <Head/>
      <Homeone />
      <HomeHeader/>


    </Fragment>
  )
}

export default App;
