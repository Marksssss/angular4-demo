import {Directive, HostBinding,Input,HostListener,Attribute} from '@angular/core';

@Directive({
  selector: '[greet]'
})
export class GreetDirective {

   @Input() greet :string;
   @HostBinding() get innerText() { //利用 HostBinding 装饰器，设置元素的 innerText 属性
        return this.greet;
   };
   @HostListener('click',['$event']) //HostListener 装饰器，监听用户的点击事件。
    onClick(event){
       this.greet= 'Clicked!';
   }


  constructor(@Attribute('author') public author:string) { //Attribute 装饰器，获取指令宿主元素上的自定义属性 author 的值。
       console.log(author);
  }

}

