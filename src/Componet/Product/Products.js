import { Fragment } from "react";
import classes from './product.module.css'
import Head from "./Head";
import ProductImg from "./ProductImg";

const Products = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
            <Head/>
            <ProductImg/>

            </div>
        </Fragment>
    )
}
export default Products;