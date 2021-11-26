import {
  Component
} from '@angular/core';

import {
  SkyModalInstance
} from '@skyux/modals';

import { DemoModel } from '../Model/demo-model';

import { DemoService } from '../service/demo-service.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})

export class AddModelComponent {
  public rowData: DemoModel[] = [];
  public demoDataModel = new DemoModel();
  public firstName: string;
  public lastName: string;
  public contactNo: string;
  public email: string;
  public dob: Date;
  public address: string;

  constructor(
    public instance: SkyModalInstance,
    private demoservice: DemoService
  ) { }

  public onSaveClick() {
    const demoData = new DemoModel();
    demoData.firstName = this.firstName;
    demoData.lastName = this.lastName;
    demoData.dob = this.dob ? this.dob.toDateString() : demoData.dob;
    demoData.email = this.email;
    demoData.contactNo = this.contactNo;
    demoData.address = this.address;
    this.rowData.push(demoData);
    this.demoservice.rowData.next(this.demoservice.rowData.getValue().concat(this.rowData));
    this.instance.close();
  }
}
