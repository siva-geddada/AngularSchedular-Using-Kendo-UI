import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { SchedulerEditFormComponent } from './scheduler-edit-form/scheduler-edit-form.component';
import { DatePipe } from '@progress/kendo-angular-intl';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerEditFormComponent
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SchedulerModule,
    ButtonsModule,
    DateInputsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
