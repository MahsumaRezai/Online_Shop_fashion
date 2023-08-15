import img1 from '../images/tisat1.png';
import img2 from '../images/tisat2.png';
import img3 from '../images/tisat3.png';
import img4 from '../images/tisat4.png';
import img5 from '../images/tisat5.png';
import classes from './ProductImg.module.css'


const ProductImgTwo = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.img1}>
                <img src={img1} alt="" />
                <p>12$</p>


            </div>

            <div className={classes.img1}>
                <img src={img2} alt="" />
                <p>20$</p>


            </div>

            <div className={classes.img1}>
                <img src={img3} alt="" />
                <p>23$</p>


            </div>
            <div className={classes.img1}>
                <img src={img4} alt="" />
                <p>15$</p>


            </div>
            <div className={classes.img1}>
                <img src={img5} alt="" />
                <p>12$</p>

            </div>






        </div>
    )
}
export default ProductImgTwo;