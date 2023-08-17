import { Fragment } from "react";

const Form = (props) => {
    return (
        <Fragment>
            <form>
                <div>
                    <input placeholder="Name" />
                    <input placeholder="Phone Number" />
                    <input placeholder="Email" />
                    <input placeholder="Address" />
                </div>
            </form>

        </Fragment>
    )
}
export default Form