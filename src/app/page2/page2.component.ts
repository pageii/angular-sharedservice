import { Component, OnInit } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { InterService } from './../inter.service';
import { Pipe, PipeTransform } from '@angular/core';
import { OnDestroy } from "@angular/core";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})

export class Page2Component implements OnInit, OnDestroy {
  my_observable_static: any;
  my_observable_observable: any;
  response: any;
  
  constructor(private interService: InterService) {
   }

  ngOnInit() {

    //This component recieves the source value via inter-service (aka shared service)

    this.my_observable_static = this.interService.getStorage();
    
    this.interService.getStorage_Observable().subscribe({
      next: (my_observable_observable) => {
          this.my_observable_observable = my_observable_observable;
      }
    });

  }

  ngOnDestroy() {
    this.my_observable_observable.unsubscribe();  // Unsubscribe cleanup to release resources.
  }

}