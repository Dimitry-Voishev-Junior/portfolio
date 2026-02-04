import { Component, inject } from '@angular/core';
import { MenuServices } from '../services/menu-services';
import { ModelMenu } from '../models/modelMenu';


@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  menuServices = inject(MenuServices);

  menuItems?: Array<ModelMenu>;

  menuStatus = "closed";

  ngOnInit() {
    const menu = this.menuServices.getItems();
    this.menuItems = menu;
  }

  menuClick() {
    this.menuStatus = (this.menuStatus === "open" ? "closed" : 'open');
  }
}
