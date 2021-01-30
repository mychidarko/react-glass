import { useEffect } from "react";
import { APP_TITLE } from "./../config/constants";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title.trim() + " - " + (APP_TITLE || "React App");
  }, [title]);
};

export default useTitle;
