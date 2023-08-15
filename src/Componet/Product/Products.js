import { Fragment } from "react";
import classes from './product.module.css'
import Head from "./Head";
import ProductImg from "./ProductImg";
import ProductImgTwo from "./ProductImgTwo";
import ProductImgThree from "./ProductImgThree";

const Products = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
                <Head />
                <ProductImg />
                <ProductImgTwo />
                <ProductImgThree />

            </div>
        </Fragment>
    )
}
export default Products;