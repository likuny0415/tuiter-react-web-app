import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <>
      <li className="list-group-item">
        <div className="d-flex">
          <div className="col-1 ">
            <img
              className="img img-responsive rounded-circle"
              width="100%"
              src={`/images/${tuit.image}`}
              alt={tuit.userName}
            />
          </div>
          <div className="col-11">
            <div className="container">
              <div>
                <span className="ps-1 text-secondary">
                  <b className="mr-2" style={{ color: "black" }}>
                    {tuit.userName}
                  </b>
                  <span className="ml-2">
                    {tuit.handle} - {tuit.time}
                  </span>
                </span>
                <i
                  className="bi bi-x-lg float-end"
                  onClick={() => deleteTuitHandler(tuit._id)}
                ></i>
              </div>
              <div>
                <p>{tuit.tuit}</p>
              </div>

              <TuitStats tuit={tuit} />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default TuitListItem;
