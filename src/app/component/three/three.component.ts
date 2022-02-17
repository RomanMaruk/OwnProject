import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/login/login.action';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
 name = '';
 password = ''

  constructor(private store: Store) { }

  onSubmit() {
    this.store.dispatch(login({name: this.name, password: this.password}))
    console.log('Name ', this.name, 'Pasword ', this.password)
    this.name = this.password = ''
  }
  ngOnInit(): void {
  }

}
