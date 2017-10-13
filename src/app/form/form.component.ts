import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   username: 'Mark';
   versions = ['1.x', '2.x', '3.x'];
   onSubmit(value){
      console.dir(value);
   }

  constructor() { }

  ngOnInit() {
  }

}
