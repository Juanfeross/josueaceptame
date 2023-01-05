import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFilters } from 'src/app/core/models/filters/filters';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  @Output() newStore = new EventEmitter<IFilters>();
  public formGroup?: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: '',
      email: '',
      rol: '',
    });
  }

  public addStore() {
    this.newStore.emit(this.formGroup?.value);
  }
}
