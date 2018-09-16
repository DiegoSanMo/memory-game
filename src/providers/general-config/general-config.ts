import { Injectable } from '@angular/core';

/*
  Generated class for the GeneralConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface IImage{
  num: number;
  name: string;
  frontUrl: string;
  backUrl: string;
  visible: boolean;
}

@Injectable()
export class GeneralConfigProvider {
  username:string;
  row:string;
  col:string;
  imgCont:number = 1;
  cantPictures:number;
  finaArray:any;
  images: Array<IImage> = [
    {
      num: 0,
      name: 'Amsterdam',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 1,
      name: 'Düsseldorf',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 2,
      name: 'Vancouver',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 3,
      name: 'Barcelona',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 4,
      name: 'Lisboa',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 5,
      name: 'Hong Kong',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 6,
      name: 'Fukuoka',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 7,
      name: 'Helsinki',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 8,
      name: 'Kioto',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 9,
      name: 'Estocolmo',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 10,
      name: 'Madrid',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 11,
      name: 'Hamburgo',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 12,
      name: 'Zúrich',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 13,
      name: 'Sidney',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 14,
      name: 'Copenhague',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 15,
      name: 'Melbourne',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 16,
      name: 'Múnich',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 17,
      name: 'Berlín',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 18,
      name: 'Viena',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      num: 19,
      name: 'Tokio',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    }
  ]
  constructor() {

    this.images.forEach(element => {
      element.frontUrl = `../../assets/pictures/city_${this.imgCont}.jpg`;
      this.imgCont+=1;
    });
  }

}
