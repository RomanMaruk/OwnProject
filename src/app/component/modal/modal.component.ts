import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseWhether, WhetherInterface } from 'src/app/model/getWhether.modal';
import { IpUser } from 'src/app/model/ipUser.modal';
import { WhetherService } from 'src/app/services/whether/whether.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  ip = '';
  latitude: string = "48.94357"
  longitude: string = "24.70024"
  currentWheher: WhetherInterface = {
    icon: '',
    description: '',
    main: '',
    id: 0
  }

  @Input() title = 'hello';
  @Output() close = new EventEmitter();
  
  constructor(private whetherservice: WhetherService) { }

  ngOnInit(): void {
    this.whetherservice.getIpAddress().subscribe((data: IpUser) => this.ip = data.ip)
    this.whetherservice.getGEOLocation(this.ip).subscribe(data => console.log('Geo location ', data))
    this.whetherservice.getWhether(this.latitude, this.longitude).subscribe((data: ResponseWhether) => {
      console.log('Get Whether ', data)
      this.currentWheher = {
        icon: data.current.weather.icon,
        id: data.current.weather.id,
        main: data.current.weather.main,
        description: data.current.weather.description,
      }
    })
  }

}
