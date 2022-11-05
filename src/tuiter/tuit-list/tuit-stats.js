import {useDispatch} from "react-redux";
import React from "react";


const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="row mt-2">
            <div className="col">
            <i className="far fa-comment"></i>
                {tuit.replies}
            </div>
            <div className="col">
                <i className="me-2 fas fa-retweet"></i>
                {tuit.retuits}
            </div>
            <div className="col">
                <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-2" style={{color: 'red'}}></i>
                }
                    {
                        !tuit.liked &&
                        <i className="far fa-heart me-2"></i>
                    }
                    {tuit.likes}
                </span>
            </div>
            <div className="col">
                <i className="me-2 fas fa-external-link-alt"/>
            </div>
        </div>
    );
}
export default TuitStats;