import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  email:string = "";
  password:string = ""; 

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {}

  async register(){
    try{
      await this.authService.register(this.email,this.password);
      alert("Registrado Exitosamente!"+this.email);
      this.router.navigate(["/home"]);
    }catch(error){alert("Error al intentar registrarse !"+error)}
  }
}
