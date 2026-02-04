import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuServices {
  
  getItems() : Array<Menu> {
    const menu: Array<Menu> = [
      {
        name: "Início",
        url: "#banner"
      },
      {
        name: "Sobre Mim",
        url: "#about"
      },
      {
        name: "Habilidades",
        url: "#skills"
      },
      {
        name: "Projetos",
        url: "#projects"
      },
      {
        name: "Contato",
        url: "#contact"
      }
    ];

    return menu;
  }
}
