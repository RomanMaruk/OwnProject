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

  titleNew: Array<any> = this.links.filter((obj: any) => obj.path == this.activeLink)

  constructor(private pLocation: PlatformLocation, private store: Store ) {}

  location: any = this.pLocation;

  ngOnInit(): void {
    console.log(this.links, ' Links');
    
    if(this.titleNew.length > 0) {
      this.store.dispatch(new GetHeaderAction(this.titleNew[0].data.label))
    } else {
      this.store.dispatch(new GetHeaderAction('Main'))
    }
  }

  getCurrentUrl(title: string) {
    this.store.dispatch(new GetHeaderAction(title))
  }

}