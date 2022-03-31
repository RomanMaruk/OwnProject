import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MealDBService } from 'src/app/services/mealServices/meal-db.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  logIn: boolean = false;

  constructor(private fbAuth: AngularFireAuth, private getMealServices: MealDBService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.fbAuth.signOut()
  }

}
