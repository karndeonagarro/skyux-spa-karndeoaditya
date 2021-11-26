import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';

import { AgGridModule } from 'ag-grid-angular';

import { MyDemoComponent } from './demo/my-demo.component';

import { AddModelComponent } from './demo/add-model.component';

import {
  SkyDatepickerModule
} from '@skyux/datetime';

import { SkyTextExpandModule } from '@skyux/layout';

import { DemoService } from './service/demo-service.service';

@NgModule({
  imports: [
    AgGridModule.withComponents([MyDemoComponent])
  ],
  exports: [
    AppSkyModule,
    AgGridModule,
    SkyDatepickerModule,
    SkyTextExpandModule
  ],
  providers: [
    DemoService
  ],
  entryComponents: [
    AddModelComponent
  ]
})

export class AppExtrasModule { }
