import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { WhetherService } from 'src/app/services/whether/whether.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  FB: boolean = !!this.fbAuth.user

constructor(private whetherService: WhetherService, private fbAuth: AngularFireAuth) {}

  ngOnInit(): void {
    
  }

}
