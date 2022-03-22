import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogIn: boolean

  constructor(private router: Router, private fbAuth: AngularFireAuth) {
    this.userLogIn = false

    this.fbAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userLogIn = true
      } else {
        this.userLogIn = false
      }
    })
  }

  signUpUser(user: any): Promise<any> {
    return this.fbAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        result.user?.sendEmailVerification()
      })
      .catch(error => {
        console.log('Auth Services sign up error ', error);
          return {isValid: false, message: error.message}
      })
  }
}
