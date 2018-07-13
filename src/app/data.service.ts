import { Injectable } from '@angular/core';
import  { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jobs = new BehaviorSubject<any> (["1991 - Carder College Admin - Ngabo", "2006 - MMC -Mbarara Stanbic"]);
job= this.jobs.asObservable();

  constructor() { }

  changeJob(job){
    this.jobs.next(job)
  }
}

