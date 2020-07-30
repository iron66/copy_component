export default ({ copyAmount, children }) =>
  Array.apply(null, Array(+copyAmount)).map((_, idx) => children(idx));
