import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bound-data',
  templateUrl: './bound-data.component.html',
  styleUrls: ['./bound-data.component.css']
})
export class BoundDataComponent implements OnInit {

  firstName: string = "Nabiel";

  constructor() {
  }

  ngOnInit(): void {

  }

}
