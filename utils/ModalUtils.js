import ReactDOM from "react-dom/client";
import Alert from "@/components/common/modal/Alert";

const ModalUtils = () => {};

const defaultProps = {
  isOpen: true,
  top: "50%",
  left: "50%",
  message: "message\n message\n message",
  confirmBtnText: "확인",
  cancleBtnText: "취소",
  component: () => {},
  onAfterOpen: () => {},
  onAfterClose: () => {},
  onRequestConfirm: () => {},
  onRequestCancle: () => {},
};

// Alert 모달
ModalUtils.openAlert = (obj) => {
  let props = { ...defaultProps, ...obj };

  const modal = document.getElementById("alert-modal");
  const root = ReactDOM.createRoot(modal);

  const onRequestClose = () => {
    props.isOpen = false;
    root.render(<Alert {...props}></Alert>);
    setTimeout(() => {
      root.unmount();
    }, 200);
  };

  props.onRequestClose = onRequestClose;
  root.render(<Alert {...props}></Alert>);
};

export default ModalUtils;
