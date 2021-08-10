import React from "react";
import "./counter.css";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { inc, dec, rnd } from "../actions";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="page">
      <div>
        <h1>{counter}</h1>
        <button onClick={dec} className="btn btn-primary">
          DEC
        </button>
        <button onClick={inc} className="btn btn-primary">
          INC
        </button>
        <button onClick={rnd} className="btn btn-primary">
          RND
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
//   return {
//     // inc: () => dispatch({ type: "INC" }),
//     // inc: () => dispatch(inc()),
//     // dec: () => dispatch(dec()),
//     // rnd: () => {
//     //   const value = Math.floor(Math.random() * 10);
//     //   dispatch(rnd(value));
//     // },
//     inc,
//     dec,
//     // rnd: () => {
//     //   const value = Math.floor(Math.random() * 10);
//     //   rnd(value);
//     // },
//     rnd
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
//   };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, actions)(Counter);
