
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
picture = [];
  constructor() {
    console.log('Hello DatabaseProvider Provider');
  }
add(picture){
this.picture.push(picture);
}
get(){
  return this.picture;
}
}
