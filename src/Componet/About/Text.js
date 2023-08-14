import img from '../images/black-red.png'
const Text = (props) => {
    return (
        <div>
            <div>
                <h1>Style is important</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore<br></br>
                    magna aliqua.
                 Ut enim ad minim veniam, quis nostrud<br></br> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
export default Text;