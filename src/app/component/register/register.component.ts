import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide: boolean = true;
  fireBaseErrorMessege: string = '';


  registerForm: FormGroup = new FormGroup({
    displayName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(private authServices: AuthService, private router: Router, private fbAuth: AngularFireAuth) { }

  ngOnInit(): void {

  }

  getErrorMessage() {
    if (this.registerForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    
    this.authServices.signUpUser(this.registerForm.value).then((result: any) => {
      if (result == null) {
        this.router.navigate(['/'])
        console.log('Resoult form register (null) ', result);
      } else if (result.isValid == false) {
        this.fireBaseErrorMessege = result.message
        console.log('Resoult isValid ', result);
      }
    })
  }

}
