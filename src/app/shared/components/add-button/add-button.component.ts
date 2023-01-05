import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  @Input() buttonType: 'primary' | 'default' = 'default';
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
