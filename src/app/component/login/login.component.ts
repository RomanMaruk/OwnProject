import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(4))
  })
  
  constructor() { }

  ngOnInit(): void {

  }

  submitUser() {
    if (!this.user.invalid) {
      console.log(this.user.value);
      console.log(this.user.invalid);
      this.user.reset()
      console.log(this.user.value);
      
      
    } else {
      console.log('Erro');
      
    }
    
  }

}
