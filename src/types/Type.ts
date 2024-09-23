export type Toast = {
  id?: any,
  type: string;
  autoClose: boolean;
  progressBar: boolean;
  pauseOnHover: boolean;
  closeOnClick: boolean;
  customImage: boolean | string;
  position?: string;
  message?:string;
  resolve?:any;
};


export type Position = {
  't-1'?:Toast[]
  't-c'?: Toast[],
  't-r'?: Toast[],
  'c-l'?: Toast[],
  'c-c'?: Toast[],
  'c-r'?: Toast[],
  'b-l'?: Toast[],
  'b-c'?:Toast[],
  'b-r'?: Toast[]
}