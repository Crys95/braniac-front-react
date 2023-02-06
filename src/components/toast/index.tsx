import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  faTriangleExclamation,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styles';

type TypeToast = 'info' | 'success' | 'warning' | 'error';

const CustomToast = (title: string, type: TypeToast, text: string) => (
  <>
    <Styled.Container>
      <Styled.Icon
        icon={type === 'error' ? faTriangleExclamation : faCheck}
        fontSize={22}
      />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
    <Styled.Text>{text}</Styled.Text>
  </>
);

/**
 * Função para exibir o toast
 * @param title Titulo do toast
 * @param text Texto do toast
 * @param type tipo do toast success | error
 */
export const ShowToast = (title: string, text: string, type: TypeToast) => {
  toast(CustomToast(title, type, text), {
    icon: false,
    type,
    theme: 'colored',
    position: 'bottom-right',
    hideProgressBar: true,
    closeButton: false,
    autoClose: 3000,
  });
};
