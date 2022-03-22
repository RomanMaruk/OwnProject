import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // links: any = routes.filter(item => item.path !== '');
  links: any = routes[0].children;
  activeLink = this.pLocation.hash.slice(1);

  constructor(private pLocation: PlatformLocation, private router: Router) {
  }
  location: any = this.pLocation;
  ngOnInit(): void {
   
  }

}