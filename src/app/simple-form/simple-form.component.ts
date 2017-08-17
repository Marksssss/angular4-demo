import {Component, OnInit, Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <!--<div>-->
    <!--&lt;!&ndash;#声明了模板变量myInput 而myInput.value获取了文本框的内容&ndash;&gt;-->
     <!--<input #myInput type="text" [(ngModel)]="message" -->
     <!--[ngClass]="{mousedown:isMousedown}" (mousedown)="isMousedown=true" (mouseup)="isMousedown=false"  >-->
     <!--&lt;!&ndash;ngClass 接收的是一对key,value值 key代表是控制样式的类名 value取值为true or false(可根据事件发生改变)&ndash;&gt;-->
     <!---->
     <!---->
     <!--&lt;!&ndash;(eventname)绑定方法 传入鼠标事件对象&ndash;&gt;-->
     <!--<button (click)="update.emit({text:message})">更新</button>-->
    <!--</div>-->
    
     <div>用来测试一下静态路由</div>
  `,
  // styles: [`
  //  :host { margin: 10px; }
  //  /*:host 表示选择宿主元素，即 AppComponent 组件模板中的 app-simple-form 元素*/
  //  .mousedown{
  //       border: 2px solid orangered;
  //  }
  //  input:focus { font-weight: bold;}
  // `
  // ]
})
export class SimpleFormComponent implements OnInit {
  @Input() message :string; //用于定义组件的输入属性
  @Output() update = new EventEmitter<{text: string}>(); //用@Output作为类型 监听update事件

  // onClick(event,value) {
  //   console.log(event);//鼠标对象
  //   console.log(value);
  // }


  ngOnInit() {}
}
