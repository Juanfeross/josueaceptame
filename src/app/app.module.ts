import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './shared/components/table/table.module';
import { FiltersModule } from './shared/components/filters/filters.module';
import { AddButtonModule } from './shared/components/add-button/add-button.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ReactiveFormsModule } from '@angular/forms';
import { AddModalModule } from './shared/components/add-modal/add-modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FiltersModule,
    AddButtonModule,
    NgxSmartModalModule.forRoot(),
    ReactiveFormsModule,
    AddModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
