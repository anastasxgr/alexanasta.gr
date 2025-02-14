import { useEffect } from "react";
import { useDispatch } from "react-redux";


import { showModal, hideModal } from "../_store/reducers/modalSlice";

const useNetworkStatus = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateOnlineStatus = () => {
      if (navigator.onLine) {
        dispatch(showModal({ message: "You are back online!", status: "online" }));
      } else {
        dispatch(showModal({ message: "You are offline!", status: "offline" }));
      }

      setTimeout(() => {
        dispatch(hideModal());
      }, 3000);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [dispatch]);
};

export default useNetworkStatus;
