import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../MODELS/User';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({required: true}) user!: User;
  @Output() userDelete = new EventEmitter<number>();

  deleteUser(id: number): void {
    this.userDelete.emit(id);
  }
}
