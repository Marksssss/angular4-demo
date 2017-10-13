import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';

interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}

@Component({
  selector: 'app-passwordsetting',
  templateUrl: './passwordsetting.component.html',
  styleUrls: ['./passwordsetting.component.css']
})
export class PasswordsettingComponent implements OnInit {

  courses$: Observable<any>;
  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.courses$ = this.http
      .get("https://api.github.com/orgs/angular/members?page=1&per_page=5")
      .map(data => _.values(data))

  }

}
