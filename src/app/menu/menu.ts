import { Component, inject } from '@angular/core';
import { MenuServices } from '../services/menu-services';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  menuServices = inject(MenuServices)
}
