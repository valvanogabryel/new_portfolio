import { useState, useEffect } from "react";

const DelayShow = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000)
  }, []);

  return show;
}

export default DelayShow;