import { useState } from "react";
import { createPortal } from "react-dom";

import Toast from "./components/Toast";

const ToastPortal = (props) => {
  const target = document.querySelector('.container.start');
  return createPortal(props.children, target)
}

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <div className="container start"></div>

      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        <ToastPortal>
          <Toast visible={toastOpen} handleCloseClick={() => setToastOpen(false)} />
        </ ToastPortal>
      )}
    </div>
  );
};

export default Example;
