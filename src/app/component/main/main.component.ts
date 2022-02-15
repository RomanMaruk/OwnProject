import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  links: any = routes.filter(item => item.path !== '')
  activeLink = this.pLocation.hash.slice(1);

  constructor(private pLocation: PlatformLocation) {
  }

  ngOnInit(): void {
  }

}
