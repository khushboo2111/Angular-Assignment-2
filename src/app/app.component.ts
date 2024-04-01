import { Component } from '@angular/core';
import { RouterOutlet , RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent , RouterModule , UserDetailsComponent , RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'user-app';
}

