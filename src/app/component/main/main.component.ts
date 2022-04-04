import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CreateUsersInterface } from 'src/app/model/createUsers.interface';
import { WhetherService } from 'src/app/services/whether/whether.service';
import { CreateUsersAction } from 'src/app/store/createUsers/createUsers.action';
import { CreateUsersState } from 'src/app/store/createUsers/createUsers.state';
import { RequestDataState } from 'src/app/store/requst-data.state';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  @Select(CreateUsersState.getCreateUsers)
  users$: Observable<any> // need add type but I don't know which
  @Select(RequestDataState.getHeader)
  title$: Observable<string>

  userData: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required,),
    emailUser: new FormControl('', [Validators.email, Validators.required])
  })

constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
  }

  createUsers() {
    if(this.userData.invalid) {
      return
    } 
    this.store.dispatch(new CreateUsersAction(this.userData.value))
    this.userData.reset()
  }

}
