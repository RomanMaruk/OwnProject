import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links: any = routes.filter(item => item.path !== '');
  activeLink = this.pLocation.hash.slice(1);

  constructor(private pLocation: PlatformLocation) {
  }

  ngOnInit(): void {
  }

}