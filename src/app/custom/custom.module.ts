import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { DoctorComponent, ButtonRenderComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { CustomComponent } from './custom.component';
import { ThemeModule } from '../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule, NbDialogModule, NbTabsetModule, NbInfiniteListDirective, NbMenuModule, NbListModule } from '@nebular/theme';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { ChemberComponent } from './doctor/doctor-details/chember/chember.component';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { ECommerceModule } from '../pages/e-commerce/e-commerce.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { NewsService } from '../pages/layout/news.service';


import { NewsPostComponent } from './doctor/infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './doctor/infinite-list/news-post-placeholder/news-post-placeholder.component';
import { InfiniteListComponent } from './doctor/infinite-list/infinite-list.component';

const components = [
  DoctorComponent,
  PatientComponent,
  CustomComponent,
  DoctorDetailsComponent,
  ButtonRenderComponent,
  InfiniteListComponent,
  NewsPostComponent,
  NewsPostPlaceholderComponent

];



@NgModule({
  declarations: [...components, ChemberComponent],
  imports: [
    CommonModule,
    CustomRoutingModule,
    NbListModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule,
    NbDialogModule.forChild()
  ],
  entryComponents:[ButtonRenderComponent,ChemberComponent],
  providers: [ NewsService ]
})
export class CustomModule { }
