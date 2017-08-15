import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {MailService} from "./mail.service";
import { GreetDirective } from './greet.directive';
import { UserComponent } from './user/user.component';
import { MembersComponent } from './members/members.component';
import { MemberService } from './member.service'; //注入服务

//使用 const 定义路由的配置信息，然后把它作为参数调用 RouterModule.forRoot() 方法


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    GreetDirective,
    UserComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     //RouterModule.forRoot() 方法用于在主模块中定义主要的路由信息
  ],
  providers: [
    MailService,MemberService,
    {provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
