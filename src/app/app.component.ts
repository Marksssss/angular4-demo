import {Component, Inject} from '@angular/core';
import {MailService} from "./mail.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular4 App';
  show : boolean;
  onUpdate(id, text) {
    this.mailService.update(id, text); //调用在mailService服务里的update方法
  }
  constructor(

    private mailService: MailService,

  ){
     this.show = true;
  }

  toggle(){
      this.show = !this.show;
  }
  // constructor(private mailService: MailService) {}
}


