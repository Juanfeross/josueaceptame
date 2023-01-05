import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFilters } from '../../../core/models/filters/filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() storeName = new EventEmitter<IFilters>();
  public formGroup?: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nameOrEmail: '',
      rol: '',
    });
  }

  public sendFilter() {
    this.storeName.emit(this.formGroup?.value);
  }
}
