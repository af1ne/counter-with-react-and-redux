import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});

const mapDispatchToProps = dispatch => ({
    remove1: () => dispatch({ type: "REMOVE1" }),
    add1: () => dispatch({ type: "ADD1" }),
    remove10: () => dispatch({ type: "REMOVE10" }),
    add10: () => dispatch({ type: "ADD10" }),
    reset: () => dispatch({ type: "RESET" })
});

const CounterComponent = ({ counter, remove1, add1, remove10, add10, reset }) => (
    <div>
        <h2>{counter}</h2>
        
        <button onClick={remove1}>- 1</button>
        <button onClick={add1}>+ 1</button>
        
        <button onClick={remove10}>- 10</button>
        <button onClick={add10}>+ 10</button>

        <button onClick={reset}>RESET</button>
    </div>
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CounterComponent);