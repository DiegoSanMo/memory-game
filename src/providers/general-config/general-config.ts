import { Injectable } from '@angular/core';

/*
  Generated class for the GeneralConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface IImage{
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
      name: 'Amsterdam',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Düsseldorf',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Vancouver',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Barcelona',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Lisboa',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Hong Kong',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Fukuoka',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Helsinki',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Kioto',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Estocolmo',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Madrid',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Hamburgo',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Zúrich',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Sidney',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Copenhague',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Melbourne',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Múnich',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Berlín',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
      name: 'Viena',
      frontUrl: '',
      backUrl: '../../assets/pictures/back.jpg',
      visible: false
    },
    {
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
