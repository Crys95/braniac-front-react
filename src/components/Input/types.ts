type dimension = 'small' | 'medium' | 'large' | 'extra' | 'modal' | 'signup' | 'modal2';

export interface PropsInputMask {
  italic?: number;
  required?: boolean;
  placeholder?: string;
  label?: string;
  dimension?: dimension;
  error?:string;
}
