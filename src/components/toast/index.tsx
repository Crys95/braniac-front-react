import toast from 'react-hot-toast';

type typeToast = 'SUCCESS' | 'ERROR' | 'LOADING' | 'WARNING';

export const ShowToast = (type: typeToast, text: string) => {
  if (type === 'SUCCESS') {
    toast.success(text, { position: 'bottom-right' });
  }
  if (type === 'ERROR') {
    toast.error(text, { position: 'bottom-right' });
  }
  if (type === 'LOADING') {
    toast.loading(text, { position: 'bottom-right' });
  }
  if (type === 'WARNING') {
    toast.error(text, {
      position: 'bottom-right',
      duration: 4000,
      icon: <i className="bi bi-exclamation-triangle-fill text-warning fs-2" />,
    });
  }
};