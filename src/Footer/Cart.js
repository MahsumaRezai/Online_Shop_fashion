import classes from './Cart.module.css';
import img1 from '../Componet/images/icon_car.png';
import img2 from '../Componet/images/gift.png';
import img3 from '../Componet/images/mony.png';


const Cart = (props) => {
    return (
        <div className={classes.content} >
            <div className={classes.cart}>
                <img src={img1} alt="hi" />

            </div>
            <div className={classes.cart}>
                <img src={img2} alt="hi" />

            </div>
            <div className={classes.cart}>
                <img src={img3} alt="hi" />

            </div>

        </div >
    )
}
export default Cart;