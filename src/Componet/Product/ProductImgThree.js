import img1 from '../images/mix1.png';
import img2 from '../images/mix2.png';
import img3 from '../images/mix3.png';
import img4 from '../images/mix4.png';
import img5 from '../images/mix5.png';
import classes from './ProductImg.module.css'


const ProductImgThree = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.img}>
                <img src={img1} alt="" />
                <p>12$</p>


            </div>

            <div className={classes.img}>
                <img src={img2} alt="" />
                <p>20$</p>


            </div>

            <div className={classes.img}>
                <img src={img3} alt="" />
                <p>23$</p>


            </div>
            <div className={classes.img}>
                <img src={img4} alt="" />
                <p>15$</p>


            </div>
            <div className={classes.img}>
                <img src={img5} alt="" />
                <p>12$</p>

            </div>






        </div>
    )
}
export default ProductImgThree;