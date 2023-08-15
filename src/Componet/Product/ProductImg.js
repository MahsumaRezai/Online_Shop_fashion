import img1 from '../images/shoes1.png';
import img2 from '../images/shoes2.png';
import img3 from '../images/shoes3.png';
import img4 from '../images/shoes4.png';
import img5 from '../images/shoes5.png';
import classes from './ProductImg.module.css'





const ProductImg = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.img}>
                <img src={img1} alt="" />

            </div>

            <div className={classes.img}>
                <img src={img2} alt="" />

            </div>

            <div className={classes.img}>
                <img src={img3} alt="" />

            </div>
            <div className={classes.img}>
                <img src={img4} alt="" />

            </div>
            <div className={classes.img}>
                <img src={img5} alt="" />

            </div>






        </div>
    )
}
export default ProductImg;