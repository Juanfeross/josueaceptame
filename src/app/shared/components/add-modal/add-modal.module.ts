import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModalComponent } from './add-modal.component';
import { AddButtonModule } from '../add-button/add-button.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddModalComponent
  ],
  imports: [
    CommonModule,
    AddButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddModalComponent
  ]
})
export class AddModalModule { }
