import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {
  private _color:string = 'red';
  private _msg:string = 'This field is required';

  @Input() set color(value:string) {
    this.setColor(value);
  }

  @Input() set msg(value:string) {
    this.setMessage(value);
  }

  @Input() set valid(value:boolean) {
    if (value) {
      this.element.nativeElement.classList.add('hidden');
    }
    else {
      this.element.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private element:ElementRef<HTMLElement>) {} 

  ngOnInit(): void {
    this.setColor(this._color);
    this.setMessage(this._msg);
    this.setStyle();
  }

  setColor(value:string):void {
    this._color = value;
    this.element.nativeElement.style.color = this._color;
  }

  setMessage(value:string):void {
    this._msg = value;
    this.element.nativeElement.innerText = this._msg;
  }

  setStyle():void {
    this.element.nativeElement.classList.add('form-text');
  }
}
