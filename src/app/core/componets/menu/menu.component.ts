import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 optionsList: Item[]= [
    {
      title: 'Categoría',
      options: [
        {
          name: 'Tops y Bodies',
          path:  '',
        },

        {
          name: 'Pantalones',
          path: '',
        },
        {
          name: 'Camisetas',
          path: '',
        },
        {
          name: 'Medias',
          path: '',
        },
        {
          name: 'Gorras',
          path: '',
        },
        {
          name: 'Vestidos',
          path: '',
        },
        {
          name: 'Vestidos de baño',
          path: '',
        },
        {
          name: 'Shorts',
          path: '',
        },
        {
          name: 'Faldas',
          path: '',
        },
        {
          name: 'Pines',
          path: '',
        },
        {
          name: 'Chaquetas',
          path: '',
        },
        {
          name: 'Camisas',
          path: '',
        },
        {
          name: 'Bolsas',
          path: '',
        },
      ],
    },
    {
      title: 'Talla',
      options: [
        {
          name: 'S',
          path: '',
        },
        {
          name: 'M',
          path: '',
        },
        {
          name: 'L',
          path: '',
        },
        {
          name: 'XL',
          path: '',
        },
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
