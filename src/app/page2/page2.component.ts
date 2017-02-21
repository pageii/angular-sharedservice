import { Component, OnInit } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { InterService } from './../inter.service';
import { Subscription }   from 'rxjs/Subscription';
import { 
  Pipe,
  PipeTransform,
 } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})

export class Page2Component implements OnInit {
  my_observable: any;
  response: any;
  
  constructor(private interService: InterService) {
   }

  ngOnInit() {

      this.interService.getfilteredPosts().subscribe({
        next: (response) => {
            this.response = response;
            console.log(this.response);
            return this.response;
        }
      });

    console.log(this.interService.getStorage());  //unsubscribed
  }

  // ngOnDestroy() {
  //   this.interService.getfilteredPosts().unsubscribe();
  // }

}




