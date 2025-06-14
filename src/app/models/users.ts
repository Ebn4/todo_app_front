export interface Users {
  id : number,
  name : string,
  email_verified_at : Date,
  created_at : Date,
  updated_at : Date,
  token : string,
}

// interface login
export interface AuthLoginData {
  email: string;
  password: string;
}

