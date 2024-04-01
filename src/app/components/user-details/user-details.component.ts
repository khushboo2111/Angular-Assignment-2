import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserFetchService } from '../../UserFetchService';
import { User } from '../../User';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userdetailsfetchservice = inject(UserFetchService);
  userbriefdata: User | undefined;

  constructor()
  {
    const username = String(this.route.snapshot.params['name']);
    this.userbriefdata = this.userdetailsfetchservice.getUser(username);
  }
}
