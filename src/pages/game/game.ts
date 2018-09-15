import { GeneralConfigProvider } from './../../providers/general-config/general-config';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface INumeros {
  num: number,
  status: boolean
}

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})


export class GamePage {
  imagesA:any;
  imagesATwo:any;
  contFront = 0;
  j:number = 0;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public generalConfigProvider:GeneralConfigProvider) {
      this.imagesA = generalConfigProvider.finaArray;
      this.imagesA = this.shuffleArray(this.imagesA);
      
      this.imagesATwo = generalConfigProvider.finaArray;
      this.imagesATwo = this.shuffleArray(this.imagesATwo);
      console.log('this.imagesATwo: ', this.imagesATwo);
      console.log('this.imagesA: ', this.imagesA);
  }

  flipImg(index:number){
    console.log(index);
    
    this.imagesA[index].visible = !this.imagesA[index].visible;
  }

  flipImgTwo(index:number){
    console.log(index);
    this.imagesATwo[index].visible = !this.imagesATwo[index].visible;
  }

  shuffleArray(array) {
    var i = array.length, t, j;
    array = array.slice();
    while (--i) t = array[i], array[i] = array[j = ~~(Math.random() * (i+1))], array[j] = t;
    return array;
  }


  checkCount():boolean{
    if(this.contFront >= 2) {
      return true 
    } 
      else 
        return false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
