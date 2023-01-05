import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITableObjects } from 'src/app/core/models/table-objects/tableObjects';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  @Output() newStore = new EventEmitter<ITableObjects>();
  @Output() close = new EventEmitter<boolean>();
  public formGroup?: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      rol: ['', Validators.required]
    });
  }

  public addStore() {
    if (this.formGroup?.valid) {
      this.newStore.emit(this.formGroup?.value);
      this.formGroup?.reset();
    } else {
      console.log('Formulario no completado');
    }
  }

  public closeModal() {
    this.close.emit(true);
    this.formGroup?.reset();
  }
}
