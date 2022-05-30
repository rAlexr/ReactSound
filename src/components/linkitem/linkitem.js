import { Link } from "react-router-dom";

const LinkItem = ({ path, text=""}) => {

    return(
        <div className="linkitem">
            <Link to={path}>{text}</Link>
        </div>
    )
};

export default LinkItem;