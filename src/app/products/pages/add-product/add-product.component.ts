import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: [
  ]
})
export class AddProductComponent {
  color:string='red';
  msg:string='required';

  myForm:FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required ] ]
  });

  constructor(private formBuilder:FormBuilder) { }

  public hasError(field:string):boolean {
    return (this.myForm.get(field)?.invalid || false);
  }

  public changeColor():void {
    this.color = '#xxxxxx'.replace(/x/g, y => (Math.random()*16|0).toString(16));
  }

  public changeMsg():void {
    this.msg = Math.random().toString();
  }
}
