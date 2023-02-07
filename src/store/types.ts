export type TypeLoading = 'IDLE' | 'PROCESSING' | 'SUCCESS' | 'FAILURE';
export interface IBaseState {
  loading: TypeLoading;
  message?: string;
}
