import { Component, OnInit } from '@angular/core';
import { Music } from './music.data'
@Component({
  selector: 'app-cityhigh',
  templateUrl: './cityhigh.component.html',
  styleUrls: ['./cityhigh.component.css']
})
export class CityhighComponent implements OnInit {

  public quotes: any = [];
  public quote: any = ["Theatre", "Bar", "Museum","Community Hall","Gallery","Church","Casino"];
  searchText;
  constructor() { }
  ngOnInit() {
    this.getData();
  }

  
  getData() {
    this.quotes = Music;
  }

  reset(){
      this.searchText = "";
  }

}
