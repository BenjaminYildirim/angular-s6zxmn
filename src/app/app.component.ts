import { Component } from '@angular/core';
import { ITask, tasks } from './employees';

@Component({
  selector: 'my-app',
  template: `
        <kendo-treelist [kendoTreeListFlatBinding]="data" [height]="410" kendoTreeListExpandable
                        idField="uuid" parentIdField="parentTaskUuid">
            <kendo-treelist-column [expandable]="true" field="title" title="Titel" [width]="250">
            </kendo-treelist-column>
            <kendo-treelist-column field="description" title="Beschreibung" [width]="180"></kendo-treelist-column>
        </kendo-treelist>
    `,
})
export class AppComponent {
  public data: ITask[] = tasks;
}
