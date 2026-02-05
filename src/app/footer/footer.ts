import { Component, inject } from '@angular/core';
import { ProfileServices } from '../services/profile-services';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  profileServices = inject(ProfileServices);

  profile?: Profile;
  date: Date = new Date;

  ngOnInit() {
    this.profile = this.profileServices.getProfile();
  }
}
