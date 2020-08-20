import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ZooState } from 'app/animals-store/store';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  @Select(ZooState.animals) animals$;
  @Select(ZooState.isFeedNeeded) isAnimalsHungry$;
  @Select(ZooState.happyAnimal) happyAnimal$;

  constructor() {
    this.animals$.subscribe(console.log)
    this.isAnimalsHungry$.subscribe(console.log)
    this.happyAnimal$.subscribe(console.log)
  }

  public trackByFn() {
    return ~~(Math.random() * 100);
  }
}
