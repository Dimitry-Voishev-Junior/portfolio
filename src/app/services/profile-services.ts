import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileServices {
  
  getProfile(): Profile {
    let profile: Profile = {
      name: "Dimitry Voishev Junior",
      email: "dimitryjunior.dev@gmail.com",
      whatsAppUrl: "https://wa.me/5511981213222",
      linkedInUrl: "https://www.linkedin.com/in/voishev-dev/"
    }

    return profile;
  }
}
