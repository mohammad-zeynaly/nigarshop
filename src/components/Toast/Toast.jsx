import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function ToastBox() {
  return (
    <>
      <div>
        <ToastContainer limit={4} />
      </div>
    </>
  );
}

export default ToastBox;
