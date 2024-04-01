import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink , RouterOutlet } from '@angular/router';
import { User } from '../../User';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() smpdata !: User;
}
