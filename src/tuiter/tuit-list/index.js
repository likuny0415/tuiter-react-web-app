import React from "react";
import {useSelector} from "react-redux";
import TuitListItem
    from "./tuit-item";



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