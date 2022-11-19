import { useDispatch } from "react-redux";
import React from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const dislikeHandler = () => {
    if (tuit.disliked) {
      const newTuit = {
        ...tuit,
        disliked: false,
        dislikes: tuit.dislikes - 1,
      };

      dispatch(updateTuitThunk(newTuit));
    } else {
      const newTuit = {
        ...tuit,
        disliked: true,
        dislikes: tuit.dislikes + 1,
      };

      dispatch(updateTuitThunk(newTuit));
    }
  };

  const likeHanlder = () => {
    if (tuit.liked) {
      const newTuit = {
        ...tuit,
        liked: false,
        likes: tuit.likes - 1,
      };

      dispatch(updateTuitThunk(newTuit));
    } else {
      const newTuit = {
        ...tuit,
        liked: true,
        likes: tuit.likes + 1,
      };

      dispatch(updateTuitThunk(newTuit));
    }
  };

  // from office hour

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
        <span onClick={() => likeHanlder(tuit)}>
          {tuit.liked && (
            <i className="fas fa-heart me-2" style={{ color: "red" }}></i>
          )}
          {!tuit.liked && <i className="far fa-heart me-2"></i>}
          {tuit.likes}
        </span>
      </div>
      <div className="col">
        <span onClick={() => dislikeHandler(tuit)}>
          {tuit.disliked && (
            <i className="fas fa-thumbs-down me-1" style={{ color: "blue" }} />
          )}
          {!tuit.disliked && <i className="far fa-thumbs-down me-1" />}
          {tuit.dislikes}
        </span>
      </div>
      <div className="col">
        <i className="me-2 fas fa-external-link-alt" />
      </div>
    </div>
  );
};
export default TuitStats;
