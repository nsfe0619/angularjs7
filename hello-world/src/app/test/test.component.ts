import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
  test works!
  <input id="{{myText}}"/>
  <input [id]="myText"/>
</div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public myText="test";
  constructor() { }
  ngOnInit() {
  }

}
