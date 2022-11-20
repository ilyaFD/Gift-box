import React from 'react'

interface IModal {
    open: boolean
    setOpen: (val: boolean) => void
    children?: JSX.Element
};

export const Modal: React.FC<IModal> = ({open, setOpen, children}) => {


  return (
    <>
      {open ?
        <div className="fixed inset-0 max-h-screen overflow-y-auto w-full bg-white bg-opacity-90 flex justify-center items-center p-4">
          <div className="w-full relative transform rounded-lg outline outline-2 outline-blue-200 transition-all sm:w-full sm:max-w-3xl bg-white">
            {children}
            <div className="bg-gray-50 px-4 py-3 flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded uppercase"
                onClick={() => setOpen(false)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      :
        null}
    </>
  )
}