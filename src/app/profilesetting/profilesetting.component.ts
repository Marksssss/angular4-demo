import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilesetting',
  templateUrl: './profilesetting.component.html',
  styleUrls: ['./profilesetting.component.css']
})
export class ProfilesettingComponent implements OnInit {
  birthday = new Date(1994,10,29);
  toggle = true;
  get format() { return this.toggle? 'shortDate' : 'fullDate'  }
  toggleFormat() {
    this.toggle = !this.toggle;
    // console.log(this.birthday);
  }

  constructor() { }

  ngOnInit() {
  }

}
