import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {MailService} from "./mail.service";
import { GreetDirective } from './greet.directive';
import { UserComponent } from './user/user.component';
import { MembersComponent } from './members/members.component';
import { MemberService } from './member.service';
import { ProfileComponent } from './profile/profile.component'; //注入服务

//使用 const 定义路由的配置信息，然后把它作为参数调用 RouterModule.forRoot() 方法


export const ROUTES : Routes = [
  //  path 属性定义路由的匹配路径，而 component 属性用于定义路由匹配时需要加载的组件。
  { path: '', component: SimpleFormComponent },
  { path: 'member', component:MembersComponent},
  { path: 'user', component:UserComponent},
  { path: 'profile/:username', component:ProfileComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    GreetDirective,
    UserComponent,
    MembersComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
     //方法用于在主模块中定义主要的路由信息
  ],
  providers: [
    MailService,MemberService,
    {provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
