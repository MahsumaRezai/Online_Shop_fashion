import { Fragment } from "react";
import classes from './Form.module.css'

const Form = (props) => {
    return (
        <Fragment>
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

            </form>

        </Fragment>
    )
}
export default Form