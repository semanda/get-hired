import { Component, OnInit } from '@angular/core';
import{trigger,style,transition,animate,keyframes,query,stagger}from '@angular/animations'

import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('jobs',[
      transition('* =>*',[
        query(':enter',style({opacity:0}),{optional:true}),

        query(':enter',stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity:0,transform:'translateY(-75%)', offset:0}),
            style({opacity:.5,transform:'translateY(35px)', offset:.3}),
            style({opacity:1,transform:'translateY(0)', offset:1})
          ]))
        ]),{optional:true}),

        query(':leave',stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity:1,transform:'translateY(0)', offset:0}),
            style({opacity:.5,transform:'translateY(35px)', offset:.3}),
            style({opacity:0,transform:'translateY(-75%)', offset:1})
          ]))
        ]),{optional:true})

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  itemCounter:number;
  btnText:string="Add Item";
  professionTxt:string;
  jobs=[];

  constructor( private _data:DataService) { }

  ngOnInit() {
   
    
    this._data.job.subscribe(res => this.jobs=res);
    this.itemCounter=this.jobs.length;
    this._data.changeJob(this.jobs);

  } 
  addItem(){
    this.jobs.push(this.professionTxt);
    this.professionTxt='';
    this.itemCounter=this.jobs.length;
    this._data.changeJob(this.jobs);


  }
  removeItem(i){
    this.jobs.splice(i,1);
    this._data.changeJob(this.jobs);
  }

}
