import { Injectable } from '@angular/core';
import { State, Selector, Action } from '@ngxs/store';

@State<any>({
  name: 'animals',
  defaults: {
    isAnyAnimalHungry: false,
    animals: []
  }
})
@Injectable()
export class AnimalsState {
  @Select()
  public static

}