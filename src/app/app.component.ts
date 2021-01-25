import { Component, OnInit } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs } from '@progress/kendo-angular-scheduler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import '@progress/kendo-date-math/tz/regions/Europe';
import '@progress/kendo-date-math/tz/regions/NorthAmerica';
import { DatePipe } from '@progress/kendo-angular-intl';

enum EditMode {
    Event,
    Occurrence,
    Series
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    //   date=new Date();
    //   current_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
      selectedDate: Date = new Date('2021-01-01T09:30:00');
     formGroup: FormGroup | undefined;
     events: SchedulerEvent[] = [{
        id: 1,
        title: 'Breakfast',
        start: new Date('2021-01-01T09:00:00'),
        end: new Date('2021-01-01T09:30:00'),
        recurrenceRule: 'FREQ=DAILY;COUNT=5;'
    }];
    date:any;
    latest_date: any;

    constructor(private formBuilder: FormBuilder, public datepipe: DatePipe) {
        this.createFormGroup = this.createFormGroup.bind(this);
        this.myFunction();
        
    }

    myFunction(){
        this.date=new Date();
         this.latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
        const currentDate = this.latest_date.toString();
       }

     createFormGroup(args: CreateFormGroupArgs): FormGroup {
        const dataItem = args.dataItem;
        // const isOccurrence = args.mode === EditMode.Occurrence;
        // const exceptions = isOccurrence ? [] : dataItem.recurrenceExceptions;

        this.formGroup = this.formBuilder.group({
            'id': args.isNew ? this.getNextId() : dataItem.id,
            'start': [dataItem.start, Validators.required],
            'end': [dataItem.end, Validators.required],
            'startTimezone': [dataItem.startTimezone],
            'endTimezone': [dataItem.endTimezone],
            'isAllDay': dataItem.isAllDay,
            'title': dataItem.title,
            'description': dataItem.description,
            'recurrenceRule': dataItem.recurrenceRule,
            'recurrenceId': dataItem.recurrenceId,
            // 'recurrenceExceptions': [exceptions]
        });

        return this.formGroup;
    }

     isEditingSeries(editMode: EditMode): boolean {
        return editMode === EditMode.Series;
    }

     getNextId(): number {
        const len = this.events.length;

        return (len === 0) ? 1 : this.events[this.events.length - 1].id + 1;
    }
}
