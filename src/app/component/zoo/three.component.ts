import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, Select } from '@ngxs/store'
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { AddAnimal } from 'src/app/store/Zoo/zoo.action';


@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})


export class ThreeComponent implements OnInit {

  // @Select((state: any) => state.animals) animals$: Observable<any>

  animalData: FormGroup = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl('')
  })
 constructor(private store: Store) { }

 addAnimals() {
   console.log(this.animalData.value);
   
   this.store.dispatch(new AddAnimal(this.animalData.value.name, this.animalData.value.amount))
  //  .pipe(withLatestFrom(this.animals$))
   .subscribe((res: any) => {
     console.log(res)
   })
   
 }

  ngOnInit(): void {
  }

}
