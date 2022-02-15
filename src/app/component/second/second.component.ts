import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  name: string = ''
  secondName: string = ''
  count: number = 0
  color: boolean = false;
  isBackGround: boolean = false
  
  persons: {name: string, secondName: string}[] = [
    {name: 'Roman', secondName: 'Maruk'},
    {name: 'Olya', secondName: 'Slobodyan'},
  ]
  constructor() { }

  onAdd(name: string, secondName: string) {
    if (this.name === '' || this.name.trim() === '') {
      return
    }

    this.persons.push({name: name, secondName: secondName})

    this.name = this.secondName = ''
  }

  increse() {
    this.count += 1
  }

  change(){
    this.color = !this.color
  }

  ngOnInit(): void {
  }

}
