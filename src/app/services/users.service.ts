import { inject, Injectable } from '@angular/core';
import { User } from '../MODELS/User';
import { UsersApiService } from './users-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersApiService = inject(UsersApiService);
  private readonly usersSubject$ = new BehaviorSubject<User[]>([]);
  public readonly users$ = this.usersSubject$.asObservable();

  constructor() {
    this.loadUsers();
  }

  public deleteUser(id: number): void {
    this.usersSubject$.next(this.usersSubject$.value.filter(user => user.id !== id));
  }

  public loadUsers(): void {
    this.usersApiService.getUsers().subscribe((users) => this.usersSubject$.next(users));
  }
}
