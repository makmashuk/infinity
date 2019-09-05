import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-chember',
  templateUrl: './chember.component.html',
  styleUrls: ['./chember.component.scss']
})
export class ChemberComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<ChemberComponent>) { }

  close() {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}

