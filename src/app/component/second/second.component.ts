import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FormControl, FormGroup } from '@angular/forms';
import { EditUsersState, UserStateModel } from 'src/app/store/editUser/editUser.state';
import { Observable } from 'rxjs';
import { AddUsers, DeleteUsers, GetUsers, UpdateUsers } from 'src/app/store/editUser/editUser.action';
import { UsersJsonPlaceholder } from 'src/app/model/usersJsonPlaceHolder.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  userInfo: UsersJsonPlaceholder[] = [];
  displayedColumns: string[] = ['Id', 'Full Name', 'User Name', 'Email', 'Phone', 'Update',];

  @Select(EditUsersState.selectStateData) userInfo$!: Observable<UsersJsonPlaceholder[]>;
  
  constructor(private store: Store) { }


  ngOnInit(): void {
    this.store.dispatch(new GetUsers())

    this.userInfo$.subscribe((returnData) => {
      this.userInfo = returnData
    })
  }

  addUser() {
    this.store.dispatch(new AddUsers(this.userForm.value)).subscribe(res => {
      console.log('REs Add', res);
      
      this.userInfo = [...this.userInfo, res]
    })
    this.userForm.reset()
  }

  updateUser(id: number, i: number) {
    const newData = this.userForm.value
    console.log('I ', i);
    

    this.store.dispatch(new UpdateUsers(newData, id, i))
  }

  deleteUser(i: number) {
    this.store.dispatch(new DeleteUsers(i))
  }

}
