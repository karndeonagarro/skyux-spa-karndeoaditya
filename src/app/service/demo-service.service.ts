import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { DemoModel } from '../Model/demo-model';

@Injectable()

export class DemoService {
  public rowData = new BehaviorSubject<DemoModel[]>([]);
  constructor() { }
}
