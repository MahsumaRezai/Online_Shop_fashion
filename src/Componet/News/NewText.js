import { Fragment } from "react";
import classes from './News.module.css'
const NewText = (props) => {
    return (
        <Fragment>
            <div className={classes.text}>
                <h1>The News Style For You</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has <br></br>been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of <br></br>type and scrambled it to make a type specimen book.</p>
            </div>

        </Fragment>
    )
}
export default NewText