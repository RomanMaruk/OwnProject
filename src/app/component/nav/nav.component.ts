import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetHeaderAction } from 'src/app/store/requst-data.action';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links: any = routes[0].children;
  activeLink = this.pLocation.pathname.slice(1);

  constructor(private pLocation: PlatformLocation, private store: Store ) {}

  location: any = this.pLocation;

  ngOnInit(): void {
    
  }

  getCurrentUrl(title: string) {
    this.store.dispatch(new GetHeaderAction(title))
  }

}