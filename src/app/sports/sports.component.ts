import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SportsData } from './sportsData';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {

  
  public quotes: any = [];
  public quote: any = ["Golf","Dancing","Cycling","Swimming","Aerobics","Tennis","Badminton","Fitness / Gymnasium Workouts"];
  searchText;
  constructor() { }
  ngOnInit() {
    this.getData();
  }


  getData() {
    this.quotes = SportsData;
  }

  reset(){
    this.searchText = "";
  }

}

