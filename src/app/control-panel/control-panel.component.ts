import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddAnimal, RemoveAnimal, MakeAnimalsHungry, FeedAnimals } from 'app/animals-store/actions';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {

  constructor(
    private store: Store
  ) { }

  add() {
    this.store.dispatch(new AddAnimal());
  }

  remove() {
    this.store.dispatch(new RemoveAnimal());
  }

  makeHungry() {
    this.store.dispatch(new MakeAnimalsHungry());
  }

  feed() {
    this.store.dispatch(new FeedAnimals());
  }

}
