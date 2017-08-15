import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  showSkills: boolean;
  skills: string[];
  constructor() {
    this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
    this.showSkills = true;
  }

  addSkill(skill: string) {
          let skillStr = skill.trim();
          if(this.skills.indexOf(skillStr)===-1){
               this.skills.push(skillStr);
            console.log(this.skills);
          }
  }

  ngOnInit() {
  }

}
