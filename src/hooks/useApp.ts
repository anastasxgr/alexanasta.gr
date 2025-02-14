import { useDispatch } from "react-redux";

import { openApp } from "../_store/reducers/AppsSlice";

export type AppType = "Terminal" | "Settings";

const useApp = () => {
  const dispatch = useDispatch();

  const openHandler = () => {
    dispatch(openApp("Terminal"));
  };

  const closeHandler = () => {
    dispatch(openApp("Terminal"));
  };

  return { openHandler, closeHandler };
};

export default useApp;
