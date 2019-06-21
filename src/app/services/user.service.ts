import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Hasi',
        lastName: 'Chandu',
        email: 'Hasi@gmail.com',
        isActive: true,
        registerd: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Tiro',
        lastName: 'Kavi',
        email: 'Hasi@gmail.com',
        isActive: true,
        registerd: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Babi',
        lastName: 'Babi',
        email: 'Hasi@gmail.com',
        registerd: new Date('01/02/2018 08:30:00'),
        hide: true,
      }
    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
      setTimeout(() => {
        observer.next(1);
      }, 5000);
    });
    return this.data;

  }

  getUsers(): Observable<User []> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
