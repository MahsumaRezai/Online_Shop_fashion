import { Fragment } from "react";
import NewsHead from "./NewsHead";
import NewText from "./NewText";
import NewsImg from './NewsImg'

const News = (props) => {
    return (
        <Fragment>
            <NewsHead />
            <NewText />
            <NewsImg />

        </Fragment>
    )
}
export default News