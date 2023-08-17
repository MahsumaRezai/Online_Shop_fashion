import Home from "../Componet/Home/Home";
import { Fragment } from "react";
import Text from '../Componet/About/Text'
import Product from "./Product";
import Fashion from "./Fashion";
import News from "../Componet/News/News";

const Homeone = () => {
    return (
        <Fragment>

            <Home />
            <Text />
            <Product/>
            <Fashion/>
            <News/>
        </Fragment>
    )
}

export default Homeone;
