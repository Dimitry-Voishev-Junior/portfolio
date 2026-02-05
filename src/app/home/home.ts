import { Component, inject} from '@angular/core';
import { Profile } from '../models/profile';
import { ProfileServices } from '../services/profile-services';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  profileServices = inject(ProfileServices);

  profile?: Profile;

  ngOnInit() {
    this.profile = this.profileServices.getProfile();
  }
}
