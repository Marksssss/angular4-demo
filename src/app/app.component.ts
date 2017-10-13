import {Component, OnInit, ViewChild, AfterViewInit,ElementRef} from '@angular/core';
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
  display: boolean = true
  @ViewChild(SassComponent) childcmp:SassComponent
  @ViewChild('greet') greetP:ElementRef

  ngAfterViewInit() {
    console.log(this.childcmp.name);
    console.log(this.greetP)
  }

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



