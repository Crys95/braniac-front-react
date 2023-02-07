
//Register
export interface RequestSignup {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  isAdmin: boolean;

}

//Login
export interface RequestSignin {
  email: string;
  password: string;
}

//Response
export interface singResponse {
  error: string;
  message: string;
  loading: boolean;
  success: boolean;
}