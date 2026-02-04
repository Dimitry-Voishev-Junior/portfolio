import { Injectable } from '@angular/core';
import { ModelMenu } from '../models/modelMenu';

@Injectable({
  providedIn: 'root',
})
export class MenuServices {
  
  getItems() : Array<ModelMenu> {
    const menu: Array<ModelMenu> = [
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
