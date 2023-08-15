import { Fragment } from "react";
import classes from './Footer.module.css'
import Cart from "./Cart";

const Footer = (props) => {
    return (
        <Fragment>
            <div className={classes.Footer}>
                <Cart />
                <div className={classes.text}>
                    <h1>Information</h1>
                    <p>There are many variations of passages of Lorem Ipsum available,<br></br> but the majority have suffered alteration in some form,
                         by injected humour,<br></br> or randomised words which don't look even slightly believable</p>
                </div>

            </div>
        </Fragment>


    )
}
export default Footer;