import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
	// extract a slice of state
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const increaseHandler = () => {
		dispatch(counterActions.increase(10));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div className={classes.btn}>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
