import { Component, Inject } from '@angular/core';
import { ProfileServices } from '../services/profile-services';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  profileService = Inject(ProfileServices);
}
