import {
  Component
} from '@angular/core';

import { ColDef } from 'ag-grid-community';

import {
  SkyModalService
} from '@skyux/modals';

import { AddModelComponent } from './add-model.component';

import { DemoService } from '../service/demo-service.service';

import { DemoModel } from '../Model/demo-model';

@Component({
  selector: 'app-my-demo',
  templateUrl: './my-demo.component.html',
  styleUrls: ['./my-demo.component.scss']
})

export class MyDemoComponent {
  public rowData: DemoModel[];
  public api: any;
  public columnDefs: ColDef[] = [
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'contactNo'},
    {field: 'email'},
    {field: 'dob'},
    {field: 'address'}
  ];
  public helpKey: string = 'help-demo.html';
  public modalSize: string = 'medium';
  constructor(
    private modal: SkyModalService, private demoservice: DemoService
  ) { }

  public onInit() {
    this.demoservice.rowData.subscribe((data: DemoModel[]) => {
      this.rowData = data;
    });
  }

  public onOpenModalClick(): void {
    const modalInstanceType: any = AddModelComponent;
    const options: any = {
      helpKey: this.helpKey,
      size: this.modalSize
    };
    this.modal.open(modalInstanceType, options);
  }

  public onGridReady = (params: any) => {
    
    params.api.showLoadingOverlay();
   setTimeout(() => {
     this.api = params.api;
      this.demoservice.rowData.subscribe((data: DemoModel[]) => {
        this.rowData = data;
      });
      params.api.setRowData(this.rowData);
   }, 500);
  }
}
