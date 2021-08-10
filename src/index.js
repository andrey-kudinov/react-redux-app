import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import reducer from "./reducer";
// import { inc, dec, rnd } from "./actions";
// import * as actions from "./actions";
import App from "./components/app";
import { Provider } from "react-redux";

const store = createStore(reducer);
// const { dispatch, getState, subscribe } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators(
//   { incDispatch: inc, decDispatch: dec, rndDispatch: rnd },
//   dispatch
// );

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// const update = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
// };

// update();

// subscribe(update);

// const decDispatch = bindActionCreators(dec, dispatch)
// const rndDispatch = bindActionCreators(rnd, dispatch)

// const incDispatch = () => dispatch(inc());
// const decDispatch = () => dispatch(dec());
// const rndDispatch = (value) => dispatch(rnd(value));

// document.getElementById("inc").addEventListener("click", incDispatch);

// document.getElementById("dec").addEventListener("click", decDispatch);

// document.getElementById("rnd").addEventListener("click", () => {
//   const value = Math.floor(Math.random() * 10);
//   rndDispatch(value);
// });

// document.getElementById("inc").addEventListener("click", inc);

// document.getElementById("dec").addEventListener("click", dec);

// document.getElementById("rnd").addEventListener("click", () => {
//   const value = Math.floor(Math.random() * 10);
//   rnd(value);
// });

// const update = () => {
//   document.getElementById("counter").textContent = getState();
// };

// subscribe(update);

// =========================

// console.log(store.getState());

// store.dispatch({ type: "INC" });
// console.log(store.getState());

// store.dispatch({ type: "INC" });
// console.log(store.getState());

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });

// =========================

// let state = reducer(undefined, {});

// state = reducer(state, { type: "INC" });
// console.log(state);
// state = reducer(state, { type: "INC" });
// console.log(state);
