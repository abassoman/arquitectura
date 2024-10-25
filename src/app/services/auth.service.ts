import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afAuth:AngularFireAuth) { }

  async login(email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }
  
  async register(email:string,password:string){
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  async logout(){
    this.afAuth.signOut();
  }

  getUser(){
    return this.afAuth.user;
  }

  async getUserEmail(): Promise<string> {
    const user = await this.afAuth.currentUser; // Espera a que se resuelva la promesa
    return user && user.email ? user.email : ''; // Devuelve el correo del usuario o una cadena vacía
  }
}
