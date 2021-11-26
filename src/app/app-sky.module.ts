import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import { SkyAvatarModule } from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import { SkyIdModule } from '@skyux/core';

import {
  SkyInputBoxModule
} from '@skyux/forms';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import { SkyThemeModule } from '@skyux/theme';

import {
   AgGridModule
} from 'ag-grid-angular';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({imports: [
  BrowserModule,
  FormsModule
],
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    AgGridModule,
    SkyThemeModule,
    SkyModalModule,
    CommonModule,
    FormsModule,
    SkyIdModule,
    SkyInputBoxModule,
    BrowserModule
  ]
})
export class AppSkyModule { }
