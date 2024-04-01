import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserFetchService {
  constructor() { }
  userdata_list: User[] = [];

  add(arr: User[])
  {
    this.userdata_list = arr;
  }

  getUser(name: string) : User | undefined
  {
    return this.userdata_list.find(Ud => Ud.name==name);
  }
}
