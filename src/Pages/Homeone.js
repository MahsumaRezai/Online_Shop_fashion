import Home from "../Componet/Home/Home";
import { Fragment } from "react";
import Text from '../Componet/About/Text'
import Product from "./Product";
import Fashion from "./Fashion";
import News from "../Componet/News/News";
import Contact from "./Contact";


const Homeone = () => {
    return (
        <Fragment>

            <Home />
            <Text />
            <Product />
            <Fashion />
            <News />
            <Contact/>
        </Fragment>
    )
}

export default Homeone;
