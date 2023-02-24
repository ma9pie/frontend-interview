import ReactDOM from "react-dom/client";
import Alert from "@/components/common/Modal/Alert";

const ModalUtils = {
  hashMap: new Map(),
};

// node 추가
ModalUtils.appendNode = (Component, data = {}, id) => {
  const { key } = data;
  const props = { isOpen: true };
  const container = document.getElementById(id);
  if (!container) return;
  const node = document.createElement("div");
  const root = ReactDOM.createRoot(node);
  container.append(node);

  props.onRequestClose = () => {
    props.isOpen = false;
    root.render(<Component {...props} {...data}></Component>);
    setTimeout(() => {
      node.remove();
      if (key) {
        ModalUtils.hashMap.delete(key);
      }
    }, 200);
  };

  props.isOpen = true;
  root.render(<Component {...props} {...data}></Component>);

  if (key) {
    node.id = key;
    ModalUtils.hashMap.set(key, props);
  }
};

// close
ModalUtils.close = (key) => {
  const node = document.getElementById(key);
  if (node) {
    ModalUtils.hashMap.get(key).onRequestClose();
  }
};

// empty modal
ModalUtils.openModal = (data) => {
  ModalUtils.appendNode(Modal, data, "modal");
};

// alert
ModalUtils.openAlert = (data) => {
  ModalUtils.appendNode(Alert, data, "alert-modal");
};

export default ModalUtils;
