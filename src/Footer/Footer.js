import { Fragment } from "react";
import classes from './Footer.module.css'
import Cart from "./Cart";

const Footer = (props) => {
    return (
        <Fragment>
            <div className={classes.Footer}>
            <Cart/>

            </div>
        </Fragment>


    )
}
export default Footer;