import { Injectable } from '@angular/core';
import { AuthLoginData, Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  async login(data : AuthLoginData) : Promise<Users>{
    let response = await fetch("http://127.0.0.1:8000/api/login",{
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(data),
    }).then((rep) => rep.json());
    return response;
  }

  constructor() { }
}
