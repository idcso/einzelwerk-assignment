import { ReactNode, useCallback, useEffect } from 'react';
import classes from './Modal.module.css';

interface ModalProps {
  children?: ReactNode;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const Modal = ({ children, visible, setVisible }: ModalProps) => {
  const modalClasses = [classes.modal];
  if (visible) {
    modalClasses.push(classes.active);
  }

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false);
      }
    },
    [setVisible]
  );

  useEffect(() => {
    if (visible) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [visible, onKeyDown]);

  return (
    <div className={modalClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className="bg-white rounded-xl p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
