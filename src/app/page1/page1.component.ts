import { Component, OnInit } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { InterService } from './../inter.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})

export class Page1Component implements OnInit {
  my_observable: any;

  constructor(private interService: InterService) { }

  ngOnInit() {

    //This component emits the source value

    this.interService.setStorage("Shared Service Works: Static Method"); // Static method to storage data

    this.my_observable = this.interService.setStorage_Observable("Shared Service Works: Subscription Method");

  }

  ngOnDestroy() {
    this.my_observable.unsubscribe();  // Unsubscribe cleanup to release resources.
  }

}