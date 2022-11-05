import React from "react";
import {useSelector} from "react-redux";
import TuitListItem
    from "./tuit-item";
    import '../../vendors/fontawesome/css/all.min.css';
    import '../../vendors/bootstrap/css/bootstrap.min.css'


const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);

    console.log(tuits)
    return (
        <ul className="ttr-tuits list-group">
            {
               tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;