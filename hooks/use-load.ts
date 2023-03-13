import React from "react";
const useLoadaing = () => {
  const [state, setState] = React.useState(false);

  const onStart = React.useCallback(() => {
    setState(true);
  }, []);
  const onLoading = React.useCallback(() => {
    setState(true);
  }, []);
  const onEnd = React.useCallback(() => {
    setState(false);
  }, []);
  // Return Values
  return {
    loading: state,
    onStart: React.useMemo(() => onStart, [onStart]),
    onLoading: React.useMemo(() => onLoading, [onLoading]),
    onEnd: React.useMemo(() => onEnd, [onEnd]),
  };
};
export default useLoadaing;
