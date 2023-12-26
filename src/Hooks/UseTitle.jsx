import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title}/cinemate`;
  });
  return null;
};

export default UseTitle;
