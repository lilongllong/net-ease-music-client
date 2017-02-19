export default store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  /*
  这里想办法做截断
  */
  return result;
};
