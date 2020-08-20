import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddAnimal, RemoveAnimal, MakeAnimalsHungry, FeedAnimals } from './actions';

const rand = max => ~~(Math.random() * max);

export interface IZooStateModel {
  label: string;
  animals: string[];
  isFeedNedded: boolean;
}

@State<IZooStateModel>({
  name: 'animals',
  defaults: {
    label: "ZOO",
    animals: ['Default Panda'],
    isFeedNedded: false
  }
})
@Injectable()
export class ZooState {
  @Selector()
  public static animals(state: IZooStateModel) {
    return state.animals;
  }

  @Selector()
  public static label(state: IZooStateModel) {
    return state.label;
  }

  @Selector()
  public static isFeedNeeded(state: IZooStateModel) {
    return state.isFeedNedded;
  }

  @Selector()
  public static animal(state: IZooStateModel) {
    return (name: string) => {
      state.animals.find((animal) => animal === name);
    }
  }

  @Selector()
  public static firstAnimal(state: IZooStateModel) {
    return state.animals[0];
  }

  @Selector([ZooState.firstAnimal])
  public static happyAnimal(state: IZooStateModel, animal: string) {
    return 'A happy ' + (animal ?? 'nobody');
  }

  @Action(AddAnimal)
  public addAnimal({patchState, getState}: StateContext<IZooStateModel>) {
    const state = getState();
    const names = ['Poo', 'Moo', 'Coco', 'Fart', 'Bart', 'Cart', 'Shart'];
    patchState({
      animals: [...state.animals, names[rand(names.length)]]
    })
  }

  @Action(RemoveAnimal)
  public removeAnimal({patchState, getState}: StateContext<IZooStateModel>) {
    const state = getState();
    const removeIndex = rand(state.animals.length);
    patchState({
      animals: state.animals.filter((_, index) => index !== removeIndex)
    })
  }

  @Action(MakeAnimalsHungry)
  public makeHungry({patchState}: StateContext<IZooStateModel>) {
    patchState({
      isFeedNedded: true
    })
  }

  @Action(FeedAnimals)
  public feed({patchState}: StateContext<IZooStateModel>) {
    patchState({
      isFeedNedded: false
    })
  }
}