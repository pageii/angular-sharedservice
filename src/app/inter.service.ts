import { Injectable } from '@angular/core';

import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//Other Methods for different occasions
// import { Subject } from 'rxjs/Subject';
// import { ReplaySubject } from 'rxjs/ReplaySubject';
// import { AsyncSubject } from 'rxjs/AsyncSubject';


var Rx = require('rxjs'); //    require everything
var subject_rx = new Rx.BehaviorSubject();

@Injectable()
export class InterService {

  storage: any;
  response: any;
  
//   subject = new Subject<any>();
  subject = new BehaviorSubject<any>(null);
//   subject = new ReplaySubject<any>(null);
 
  // private subject = new ReplaySubject<Array<Object>>(null);
//   private subject = new AsyncSubject();

// missionAnnounced$ = this.subject.asObservable();

  constructor() {
  }


   setStorage(input) : void {
        this.storage = input;
    }

   getStorage() {
        return this.storage;        
    }



   setfilteredPosts(filtered: any) : void {
      this.subject.next(filtered);    
      // this.subject.complete(); // For AsyncSubject. Remove if using BehaviourSubject or replaySubject
    }

   getfilteredPosts() : Observable<any> {
        return this.subject;
    }


}