import { Fragment } from "react";
import classes from './Footer.module.css'
import Cart from "./Cart";
import img from '../Componet/images/email.png'

const Footer = (props) => {
    return (
        <Fragment>
            <div className={classes.Footer}>
                <Cart />
                <div className={classes.text}>
                    <h1>Information</h1>

                </div>
                <div className={classes.email}>
                    <img src={img} />
                    <span><a>mahsuma.rezai8@gmail.com </a></span>

                </div>


            </div>
        </Fragment>


    )
}
export default Footer;