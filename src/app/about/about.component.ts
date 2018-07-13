import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
jobs:any;

  constructor(private _data:DataService, private route:ActivatedRoute, private router:Router) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.job.subscribe(res => this.jobs=res);
  }

  backHomepage(){
    this.router.navigate(['']);
  }

  removeItem(i){
    this.jobs.splice(i,1);
    this._data.changeJob(this.jobs);
  }

}
