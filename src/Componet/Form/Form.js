import { Fragment } from "react";
import classes from './Form.module.css'
import FormHead from "./FormHead";

const Form = (props) => {
    return (
        <Fragment>
            <FormHead />

            <form >
                <div className={classes.content}>
                    <input placeholder="Name" />
                    <input placeholder="Phone Number" />
                </div>
                <div className={classes.content} >
                    <input placeholder="Email" />
                    <input placeholder="Address" />
                </div>
                <div className={classes.content}>
                    <input placeholder="Massage" className={classes.inp} />
                </div>
                <button className={classes.btn}>Send me</button>


            </form>

        </Fragment>
    )
}
export default Form