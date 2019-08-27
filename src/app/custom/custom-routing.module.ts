import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'doctors',
        component: DoctorComponent,
      },
      {
        path: 'doctors/:slug',
        component: DoctorDetailsComponent,
      },
      {
        path: 'patients',
        component: PatientComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
