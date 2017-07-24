import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage){

  }

  getData() {
    return this.storage.get('todos');
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }

  getWorkouts(){
    return this.storage.get('workouts');
  }

  saveWorkout(workout){
    let newWorkout = JSON.stringify(workout);
    this.storage.set('workouts', newWorkout);
  }

}
