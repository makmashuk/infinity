import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ChemberComponent } from './chember/chember.component';

@Component({
  selector: 'ngx-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  doctorID: number;
  bioflipped: boolean;
  piflipped: boolean;
  aiflipped: any;

  constructor(private activatedRoute:ActivatedRoute , private dialogService: NbDialogService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.doctorID = params['slug'];
      // console.log(this.doctorID)
  });
  }
  onEditBio(){
    this.toggleBioView();
  }
  onSaveBio(){
    this.toggleBioView();
  }
  toggleBioView() { 
    this.bioflipped = !this.bioflipped;
   }

  onEditProfessionalInfo(){
    this.togglePIView();
  }
  onSaveProfessionalInfo(){
    this.togglePIView();
  }
  togglePIView() { 
    this.piflipped = !this.piflipped;
   }

  onEditAcademicInfo(){
    this.toggleAIView();
  }
  onSaveAcademicInfo(){
    this.toggleAIView();
  }
  toggleAIView() { 
    this.aiflipped = !this.aiflipped;
   }

   open() {
    const dialogRef = this.dialogService.open(ChemberComponent, {
      hasBackdrop:false
    });

  }

}

