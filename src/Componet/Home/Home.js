import { Fragment } from "react";
import img from '../images/ban_img.png'
const Home = (props) => {
    return (
        <Fragment>
            <div>
                <div>
                    <h1> Online shop  fashion </h1>
                    <p>A huge fashion collection for ever</p>
                </div>
                <div>
                    <img src={img} alt="img" />

                </div>





            </div>

        </Fragment>
    )
}
export default Home;