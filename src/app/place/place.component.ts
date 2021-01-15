import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor() { }
  @Input() state: 'X' | 'O' = null;
  @Input() winning:boolean = false;

  ngOnInit(): void {
    
  }

}
