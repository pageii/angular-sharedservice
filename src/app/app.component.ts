import { Component, OnInit } from '@angular/core';
import { InterService } from './inter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    InterService,
  ],
})
export class AppComponent implements OnInit {
  
  title = 'app works!';
  
  constructor() {
    
   }


  ngOnInit() {

  }

}
