import { Fragment } from "react";
import img from '../images/news_img1.jpg';
import img1 from '../images/news_img2.jpg';
import img2 from '../images/news_img3.jpg';
import classes from "./News.module.css";



const New = () => {
    return (
        <Fragment>
            <div className={classes.Images}>
                <img src={img} />
                <img src={img1} />
                <img src={img2} />

            </div>
        </Fragment>

    )
}

export default New;
