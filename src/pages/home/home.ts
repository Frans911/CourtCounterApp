import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scoreA:number;
  scoreB:number;
  constructor(public navCtrl: NavController) {
    this.scoreA = 0;
    this.scoreB = 0
  }

  TeamAadd(num:number){
    if(num == 3){
      this.scoreA += 3;
    }else  if(num == 2){
      this.scoreA += 2;
    }
    if(num == 1){
      this.scoreA += 1;
    }
  }
  TeamBadd(num:number){
    if(num == 3){
      this.scoreB += 3;
    }else  if(num == 2){
      this.scoreB += 2;
    }
    if(num == 1){
      this.scoreB += 1;
    }
  }
  reset(){
    this.scoreA = 0;
    this.scoreB = 0;
  }

}
