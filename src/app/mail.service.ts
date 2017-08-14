import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages: Array<{id: number, text: string}> = [ //这是用数组范型来表示数组 Array<elemtype>
    {id: 0, text: '天之骄子，加入修仙之路'},
    {id: 1, text: 'Shadows，加入修仙之路'},
    {id: 2, text: 'Keriy，加入修仙之路'}
  ];
  update(id, text) {
    this.messages = this.messages.map(msg => {  //回调function(msg) { }
      return msg.id === id ? {id, text} : msg;
    });
  }

  constructor() { }

}
