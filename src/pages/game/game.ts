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

export interface ICompare {
  id:number;
  index: number;
  array:string;
}

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})


export class GamePage {
  imagesA:any = [];
  imagesATwo:any = [];
  contFront = 0;
  user:string = '';
  comeBack: boolean = false;
  classGrid:any;

  points:number = 0;

  arrayCompare:Array<ICompare> = [];
  
  j:number = 0;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public generalConfigProvider:GeneralConfigProvider) {
      this.user = this.generalConfigProvider.username;
      this.imagesA = JSON.parse(JSON.stringify(generalConfigProvider.finaArray));
      this.imagesATwo = JSON.parse(JSON.stringify(generalConfigProvider.finaArray));

       

      if(generalConfigProvider.col === '2') {
        this.classGrid = "col-2"
      } else if(generalConfigProvider.col === '3'){
        this.classGrid = "col-3"
      }
      else {
        this.classGrid = "col-4"
      }

      this.imagesA = this.shuffleArray(this.imagesA);
      console.log('this.imagesA: ', this.imagesA);
      this.imagesATwo = this.shuffleArray(this.imagesATwo);
      console.log('this.imagesATwo: ', this.imagesATwo);
  }

  flipImg(index:number){

    if(this.contFront >= 2){
       console.log('verificar el otro array');
    } else {
      this.imagesA[index].visible = !this.imagesA[index].visible;
      this.arrayCompare.push({id:this.imagesA[index].num, index: index, array:'imagesA' });
      this.contFront++;

      if(this.contFront === 2){
        this.verificar()
        this.checkBothArray()
      }
    }    
  }

  flipImgTwo(index:number){
    if(this.contFront >= 2){
      console.log('verificar el otro array');
   } else {
     this.imagesATwo[index].visible = !this.imagesATwo[index].visible;
     this.arrayCompare.push({id: this.imagesATwo[index].num, index: index, array:'imagesATwo' });
     this.contFront++;

     if(this.contFront === 2){
      this.verificar();
      this.checkBothArray()
      console.log(this.points);
      
      
    }
   } 
  }


  verificar(){
    
    let numOne = this.arrayCompare[0];
    let numTwo = this.arrayCompare[1];

    if(numOne.array === numTwo.array){
      if(numOne.array === 'imagesA'){
        setTimeout(() => {
          console.log(1);
          
          this.imagesA[numOne.index].visible = !this.imagesA[numOne.index].visible;
          this.imagesA[numTwo.index].visible = !this.imagesA[numTwo.index].visible;
          this.arrayCompare = [];
          this.contFront = 0;
          this.points === 0 ? this.points = 0 : this.points--;
         
        }, 1000);

      } else {
        setTimeout(() => {
          console.log(2);
          this.imagesATwo[numOne.index].visible = !this.imagesATwo[numOne.index].visible;
          this.imagesATwo[numTwo.index].visible = !this.imagesATwo[numTwo.index].visible;
          this.arrayCompare = [];
          this.contFront = 0;
          this.points === 0 ? this.points = 0 : this.points--;
          
        }, 1000);
      }

    } else {
      console.log('numOne: ', numOne);
      console.log('numTwo: ', numTwo);
      
      if(numOne.array === 'imagesA' && numTwo.array === 'imagesATwo'){
        if(this.imagesA[numOne.index].num === this.imagesATwo[numTwo.index].num){
          console.log('Son iguales');
          this.points++;
          this.contFront = 0;
          this.arrayCompare = [];
        } else {
          console.log('entro');
          
          setTimeout(()=>{
  
            this.imagesA[numOne.index].visible = !this.imagesA[numOne.index].visible;
            this.imagesATwo[numTwo.index].visible = !this.imagesATwo[numTwo.index].visible;
            this.arrayCompare = [];
            this.contFront = 0;
            this.points === 0 ? this.points = 0 : this.points--;
            console.log('No son iguales');
          }, 1000)
          
        }
      } else {
        if(this.imagesA[numTwo.index].num === this.imagesATwo[numOne.index].num){
          console.log('Son iguales');
          this.points++;
          this.contFront = 0;
          this.arrayCompare = [];
        } else {
          console.log('entro');
          
          setTimeout(()=>{
  
            this.imagesA[numTwo.index].visible = !this.imagesA[numTwo.index].visible;
            this.imagesATwo[numOne.index].visible = !this.imagesATwo[numOne.index].visible;
            this.arrayCompare = [];
            this.contFront = 0;
            this.points === 0 ? this.points = 0 : this.points--;
            console.log('No son iguales');
          }, 1000)
          
        }

      }
      
    }

  }

  checkBothArray(){
    let cantI = 0
    
    for (let index = 0; index < this.imagesA.length; index++) {
      this.imagesA[index].visible  === true ? cantI++ : console.log('kjlkjlkj');
    }
    this.imagesA.length  === cantI ? this.comeBack = true : this.comeBack = false;

    
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
