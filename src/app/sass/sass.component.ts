import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.scss']
})
export class SassComponent implements OnInit {
  name:string = 'child-component'

  constructor() { }

  ngOnInit() {
  }

}
