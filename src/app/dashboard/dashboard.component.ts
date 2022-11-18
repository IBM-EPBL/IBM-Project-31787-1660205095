import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  card1=false;
  card2=true;
  card3=true;
  card4=true;
  card5=true;

  click_card1(){
    this.card1=true;
    this.card2=false;
    this.card3=true;
    this.card4=true;
    this.card5=true;
  }

  click_card2_prev(){
    this.card1=false;
    this.card2=true;
    this.card3=true;
    this.card4=true;
    this.card5=true;
  }

  click_card2_next(){
    this.card1=true;
    this.card2=true;
    this.card3=false;
    this.card4=true;
    this.card5=true;
  }

  click_card3_prev(){
    this.card1=true;
    this.card2=false;
    this.card3=true;
    this.card4=true;
    this.card5=true;
  }

  click_card3_next(){
    this.card1=true;
    this.card2=true;
    this.card3=true;
    this.card4=false;
    this.card5=true;
  }

  click_card4_prev(){
    this.card1=true;
    this.card2=true;
    this.card3=false;
    this.card4=true;
    this.card5=true;
  }

  click_card4_next(){
    this.card1=true;
    this.card2=true;
    this.card3=true;
    this.card4=true;
    this.card5=false;
  }

  click_card5(){
    this.card1=true;
    this.card2=true;
    this.card3=true;
    this.card4=false;
    this.card5=true;
  }

  

  ngOnInit(): void {
  }

}
