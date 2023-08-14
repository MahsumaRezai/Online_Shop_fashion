import img from '../images/black-red.png';
import classes from './Text.module.css'
import Button from './Button';
const Text = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.text}>
                <h1>Style is important</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore<br></br>
                    magna aliqua.
                 Ut enim ad minim veniam, quis nostrud<br></br> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div>
                    <Button> red</Button>

                </div>

            </div>
            <div>
                <img src={img} alt="" className={classes.img} />
            </div>
        </div>
    )
}
export default Text;