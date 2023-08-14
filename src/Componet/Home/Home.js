import { Fragment } from "react";
import img from '../images/ban_img.png';
import classes from './Home.module.css'
const Home = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <div className={classes.text}>
                    <h1> Online shop fashion </h1>
                    <p>A huge fashion collection for ever</p>
                    <button className={classes.btn}>Show Now</button>
                </div>
                <div className={classes.shape}>
                    <img src={img} alt="img" className={classes.img} />
                </div>
            </div>
        </Fragment>
    )
}
export default Home;