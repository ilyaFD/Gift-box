import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
interface IModal {
    open: boolean
    setOpen: (val: boolean) => void
    children?: JSX.Element
};

export const Modal: React.FC<IModal> = ({open, setOpen, children}) => {

  const cancelButtonRef = React.useRef(null)

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-100 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left outline outline-2 outline-blue-300 transition-all sm:my-8 sm:w-full sm:max-w-lg bg-white">
                {children}
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded uppercase"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Ok
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}