import img from '../images/fashion.jpg';
import classes from './Fahsion.module.css'
const FahsionImg = (props) => {
    return (
        <div className={classes.img}>
            <img src={img} alt="" className={classes.back} />
        </div>
    )
}
export default FahsionImg;