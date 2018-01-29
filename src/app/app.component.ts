import {Component, OnInit, ViewChild} from '@angular/core';
import {MailService} from "./mail.service";
import {SassComponent} from "./sass/sass.component"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular4 App';
  show: boolean;
  agreed = 0;
  disagreed = 0;
  voters = ['张三','李四','王五','小六'];
  options = [
        { value: 1, viewValue: '最近一小时' },
        { value: 2, viewValue: '今天' },
        { value: 3, viewValue: '昨天' },
        { value: 4, viewValue: '本周' },
        { value: 'other', viewValue: '其他时间' },
    ]
  obj = {
     first : 'wang',
     second: 'ming'
  }

  // @ViewChild('')

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
  // display: boolean = true
  // @ViewChild(SassComponent) childcmp:SassComponent
  // @ViewChild('greet') greetP:ElementRef


  onUpdate(id, text) {
    this.mailService.update(id, text); //调用在mailService服务里的update方法
  }

  constructor(private mailService: MailService) {
    this.show = true;
  }

  toggle() {
    this.show = !this.show;
  }

}



