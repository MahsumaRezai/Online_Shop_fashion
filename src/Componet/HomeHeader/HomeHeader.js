import img1 from '../images/shoes.png';
import img2 from '../images/wear.png';
import img3 from '../images/pent.png';
import img4 from '../images/t_shart.png';
import img5 from '../images/jakit.png';
import img6 from '../images/helbet.png';




import classes from './HomeHeader.module.css'
const HomeHeader = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.cartOne}>
                <img src={img1} alt="hi" />

            </div>
            <div className={classes.cartTwo}>
                <img src={img2} alt="hi" />

            </div>
            <div className={classes.cartOne}>
                <img src={img3} alt="hi" />

            </div>
            <div className={classes.cartTwo}>
                <img src={img4} alt="hi" />

            </div>

            <div className={classes.cartOne}>
                <img src={img5} alt="hi" />

            </div>
            <div className={classes.cartTwo}>
                <img src={img6} alt="hi" />

            </div>


        </div>
    )
}
export default HomeHeader;