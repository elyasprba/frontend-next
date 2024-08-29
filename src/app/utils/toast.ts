import { Bounce, toast } from 'react-toastify'

export const toastSuccess = (message: string) =>
  toast.success(message, {
    style: {
      margin: '20px 20px',
      borderRadius: '5px',
    },
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  })

export const toastError = (message: string) => {
  toast.error(message, {
    style: {
      margin: '20px 20px',
      borderRadius: '5px',
    },
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  })
}
