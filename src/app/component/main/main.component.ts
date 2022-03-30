import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CreateUsersInterface } from 'src/app/model/createUsers.interface';
import { WhetherService } from 'src/app/services/whether/whether.service';
import { CreateUsersAction } from 'src/app/store/createUsers/createUsers.action';
import { CreateUsersState } from 'src/app/store/createUsers/createUsers.state';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  @Select(CreateUsersState.getCreateUsers)
  users$: Observable<any> // need add type but I don't know which

  userData: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required,),
    emailUser: new FormControl('', [Validators.email, Validators.required])
  })

constructor(private whetherService: WhetherService, private fbAuth: AngularFireAuth, private store: Store) {}

  ngOnInit(): void {
    console.log('*****', this.users$);
    
  }

  createUsers() {
    if(this.userData.invalid) {
      return
    } 
    this.store.dispatch(new CreateUsersAction(this.userData.value))
    this.userData.reset()
  }

}
