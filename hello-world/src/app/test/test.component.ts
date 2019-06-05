import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  hello {{name}}!
  <input id="{{myText}}" type="text" value="123"/>
  <input [id]="myText" type="text" value="456"/>
  <input [id]="myText" type="text" value="{{myValue}}"/>
  <button (click)="btclick($event)">button</button>
  {{greeting}}
`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="Isaac";
  public myText="test";
  public myValue="789";
  public greeting="button message!!"
  constructor() { }
  ngOnInit() {
  }
  btclick(event){
    console.log('event',event);
  }
}
