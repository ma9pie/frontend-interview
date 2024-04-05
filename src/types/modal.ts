export interface ModalProps {
  key?: string;
  isOpen?: boolean;
  top?: string;
  left?: string;
  title?: string;
  message?: string;
  confirmBtnText?: string;
  component?: () => JSX.Element;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
  onRequestClose?: () => void;
}
