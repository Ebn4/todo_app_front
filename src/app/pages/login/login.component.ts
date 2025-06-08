import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { AuthLoginData, Users } from '../../models/users';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  route:Router = inject(Router); // la variable pour la rédirection
  service : LoginService = inject(LoginService)
  isSuccess : boolean = false; //affichage du toast de succès
  error : boolean = false; // affichage du toast d'erreur
  message : string = "";
  data! : AuthLoginData; // la classe pour la connexion

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  login(){
    this.data = {
      email : this.loginForm.value.email!,
      password : this.loginForm.value.password!
    };
    // appelle de la methode login pour se connecter
    this.service.login(this.data)
    .then((response : Users) => {
      if(response){
        console.log(response);
        localStorage.setItem('token',response.token),
        localStorage.setItem('name',response.name),
        localStorage.setItem('id',String(response.id))

        this.message = "Connexion reussie";
        this.isSuccess = true;
        this.error = false;

        setTimeout(()=>{
          this.isSuccess = false;
          this.route.navigate(['/home']).then(() => {
            window.location.reload();
          })
        }, 1000)
      }else{
        this.message = "Email ou mot de passe incorrecte";
        this.isSuccess = false;
        this.error = true;
      }
    })
    .catch(() => {
      this.message = "Une erreur est survenue";
      this.error = true;
    });

  }


  closeToast(){
    this.error  = false;
    this.isSuccess = false;
  }

}
