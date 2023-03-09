
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

export interface InfoSing {
  name: string,

}
//Response
export interface singResponse {
  token: string;
  name: string,
  error: string;
  message: string;
  loading: boolean;
  success: boolean;
}

export interface ResponseSing {
  data: InfoSing;
}