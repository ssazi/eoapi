import {  NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ParamsImportComponent } from './params-import.component';

import { SharedModule } from 'eo/workbench/browser/src/app/shared/shared.module';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EoIconparkIconModule } from 'eo/workbench/browser/src/app/eoui/iconpark-icon/eo-iconpark-icon.module';

@NgModule({
  declarations: [ParamsImportComponent],
  imports: [FormsModule, EoIconparkIconModule, NzDropDownModule, NzModalModule, NzButtonModule, SharedModule],
  exports: [ParamsImportComponent]
})
export class ParamsImportModule {}
