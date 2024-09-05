import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ReactNode } from 'react';

interface IProps {
  isOpen: boolean;
  close: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ isOpen, close, title, children }: IProps) => {
  return (
    <Dialog as="div" className="relative z-10 mx-5" open={isOpen} onClose={close}>
      <div className="fixed inset-0 z-10 bg-black/30 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-5 ">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-8  shadow-lg">
            {title && (
              <DialogTitle as="h3" className="text-lg  m-5 font-medium text-gray-900 mb-4">
                {title}
              </DialogTitle>
            )}
            <div className="mt-4 p-4 mx-7">
              {children}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
