import { Component, OnInit } from '@angular/core';
import { Http } from  '@angular/http';
import 'rxjs/add/operator/map' ;
import { MemberService } from "../member.service";

interface Member { // Member接口类型
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
   members:Member[];
  constructor(private memberService: MemberService) {} //使用构造注入方式，注入服务

  ngOnInit() {
     this.memberService.getMember()
       .subscribe(data => {
           if(data) this.members = data;
       })

  }

}
