  
  //Register
  export interface RequestSignup {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    isAdmin: boolean;

  }
  
  //Login
  export interface RequestSignin {
    email: boolean;
    password: string;
  }

  //Response
  export interface singResponse {
    message: string;
    loading: boolean;
    success: boolean;
  }