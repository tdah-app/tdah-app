import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';

import { Methode } from './../../objects/methode';
import { ViewHomePage } from './../../../cartes-module/pages/dimensions/view-homepage.component';
import { Utils } from './../../utils/utils';
import { ElementTimer } from '../../objects/element-timer';

export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}

@Component({
  selector: 'view-timer',
  templateUrl: 'view-timer.component.html'
})
export class ViewTimer implements OnInit {

  timeInSeconds: number;
  timer: CountdownTimer;
  private increment;
  private transform;
  private percent;
  private fixTransform;
  myMethode: Methode;
  i: number;
  nomBouton: string;
  texte: string;
  title: string;
  image: string;

  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
    this.myMethode = navParams.get("resultParam");
    this.i = navParams.get("index");
  }

  ngOnInit() {
    if (this.myMethode.listeElements.length != 0)
      this.nomBouton = this.myMethode.listeElements[this.i].bouton;
    else this.nomBouton = 'Retour au menu';
    this.timeInSeconds = (<ElementTimer>this.myMethode.listeElements[this.i]).timer;
    this.texte = this.myMethode.listeElements[this.i].texte;
    this.title = this.myMethode.nom;
    this.image = (<ElementTimer>this.myMethode.listeElements[this.i]).image;
    this.initTimer();
  }

  hasFinished() {
    return this.timer.hasFinished;
  }
  initProgressBar() {
    this.percent = 100;
    this.increment = 180 / 100;
    const progress = 'rotate(' + this.increment * this.percent + 'deg)';
    this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
    this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
  }

  initTimer() {
    this.initProgressBar();
    if (!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      this.percent = this.timer.secondsRemaining / this.timer.seconds * 100;
      this.increment = 180 / 100;
      const progress = 'rotate(' + this.increment * this.percent + 'deg)';
      this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
      this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      } else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - (hours * 3600)) / 60);
    const seconds = secNum - (hours * 3600) - (minutes * 60);
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    hoursString = (hours < 10) ? '0' + hours : hours.toString();
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

  boutonTapped() {
    //on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
    if (this.i < this.myMethode.listeElements.length - 1) {
      this.i = this.i + 1;
      this.navCtrl.push(Utils.getNextPage(this.myMethode, this.i), {
        resultParam: this.myMethode,
        index: this.i
      });
    }
    // si la liste d'élements de la carte a été entièrement parcourue
    else {
      //on retourne à la page d'accueil et on reset l'historique de navigation
      this.navCtrl.setRoot(ViewHomePage);
      this.navCtrl.popToRoot();
    }
  }

}