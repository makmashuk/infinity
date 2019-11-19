import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Router } from '@angular/router';
import { NewsService } from '../../pages/layout/news.service';

@Component({
  selector: 'ngx-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent  {



  settings = {


    columns: {
      id: {
        title: 'Registration Id',
        type: 'number',
        width:'10%'
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      speciality: {
        title: 'Speciality',
        type: 'string',
      },
      button: {
        title: 'view details',
        type: 'custom',
        renderComponent: ButtonRenderComponent,
        onComponentInitFunction(instance) {
        instance.save.subscribe();
        }
      },
    },
    hideSubHeader:true,
    actions:false

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}

@Component({
  template: `
      <button nbButton (click)="onClick()">View Details</button>
  `,
})
export class ButtonRenderComponent implements ViewCell {


  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router){

  }


onClick() {
  this.router.navigate(['pages/custom/doctors/'+this.rowData.id]);
  // alert('id row '+this.rowData.id)
}


}
