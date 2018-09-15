import { GeneralConfigProvider } from './../../providers/general-config/general-config';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  row:string;
  col:string;

  constructor(public navCtrl: NavController, public generalConfigProvider: GeneralConfigProvider) {}

  onSubmit(){
    this.generalConfigProvider.col = this.col;
    this.generalConfigProvider.row = this.row;
    this.generalConfigProvider.cantPictures = parseInt(this.row) * parseInt(this.col);
    this.arrayRandom(this.generalConfigProvider.cantPictures)
    this.navCtrl.push('GamePage')
  }

  arrayRandom(quantityP:number){   
    let q = quantityP;
    let ban:boolean = false;
    let i, f;
    while(!ban){
      i = this.randomNumber();
      f = this.randomNumber();
      let diI = i - f;
      let diF = f - i;
      if(diI === quantityP || diF === quantityP){
        ban = true;
      }
    }

    if(ban){
      i > f ? this.cutArray(f, i) : this.cutArray(i, f);
    }
  }

  cutArray(start:number, end:number){
    this.generalConfigProvider.finaArray =  this.generalConfigProvider.images.slice(start, end)
  }

  randomNumber():number{
    return Math.floor(Math.random() * 20) +1;
  }
  

}
