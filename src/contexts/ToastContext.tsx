import { createContext, ReactNode, useContext, useState } from 'react'

import { Toast, ToastType } from '../components/Toast'

interface ToastContextProps {
  children: ReactNode
}

interface ToastContextData {
  toast: (type: ToastType, data: { title: string; message: string }) => void
}

const ToastContext = createContext({} as ToastContextData)

export function ToastProvider({ children }: ToastContextProps): JSX.Element {
  const [show, setShow] = useState(false)
  const [type, setType] = useState<ToastType>('success')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const toast = (
    type: ToastType,
    data: { title: string; message: string }
  ): void => {
    setType(type)
    setTitle(data.title)
    setMessage(data.message)
    setShow(true)
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      <Toast
        type={type}
        title={title}
        message={message}
        show={show}
        setShow={setShow}
      />
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextData => useContext(ToastContext)
