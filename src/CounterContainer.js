import React, { useCallback } from "react";
// import { connect } from "react-redux";
import Count from "./Count";
import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
import { increase, decrease } from "./modules/counter";
// const CounterContainer = ({ number, increase, decrease }) => {
//   return <Count number={number} onIncrease={increase} onDecrease={decrease} />;
// };
const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Count number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
// const mapStateToProps = state => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   dispatch =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch
//     )
// )(CounterContainer);
export default CounterContainer;
