import { Component, inject } from '@angular/core';
import { ProfileServices } from '../services/profile-services';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  profileService = inject(ProfileServices);
}
