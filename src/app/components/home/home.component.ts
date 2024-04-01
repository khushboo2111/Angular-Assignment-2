import { Component, OnInit, inject } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { User } from '../../User';
import { UserFetchService } from '../../UserFetchService';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,UserCardComponent,HttpClientModule, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


    users: User[] = [];

    httpclient =inject(HttpClient);
    uds = inject(UserFetchService);

    ngOnInit(): void {
      this.fetchData();
    }

    fetchData()
    {
      this.httpclient.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        this.users = data;
        this.uds.add(this.users);
      });
    }
  }
