import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { DoctorComponent, ButtonRenderComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { CustomComponent } from './custom.component';
import { ThemeModule } from '../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule, NbDialogModule, NbTabsetModule } from '@nebular/theme';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { ChemberComponent } from './doctor/doctor-details/chember/chember.component';

const components = [
  DoctorComponent,
  PatientComponent,
  CustomComponent,
  DoctorDetailsComponent,
  ButtonRenderComponent
];



@NgModule({
  declarations: [...components, ChemberComponent],
  imports: [
    CommonModule,
    CustomRoutingModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule,
    NbDialogModule.forChild()
  ],
  entryComponents:[ButtonRenderComponent,ChemberComponent]
})
export class CustomModule { }
