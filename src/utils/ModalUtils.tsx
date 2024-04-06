import ReactDOM from 'react-dom/client';
import Alert from '@/components/common/Modal/Alert';
import { ModalProps } from '@/types';

const ModalUtils: any = {
  hashMap: new Map(),
};

// node 추가
ModalUtils.appendNode = (
  Component: () => JSX.Element,
  data: ModalProps = {},
  id: string
) => {
  const { key } = data;
  const props: ModalProps = { isOpen: true };
  const container = document.getElementById(id);
  if (!container) return;
  const node = document.createElement('div');
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
ModalUtils.close = (key: string) => {
  const node = document.getElementById(key);
  if (node) {
    ModalUtils.hashMap.get(key).onRequestClose();
  }
};

// alert
ModalUtils.openAlert = (data: ModalProps) => {
  ModalUtils.appendNode(Alert, data, 'alert-modal');
};

export default ModalUtils;
