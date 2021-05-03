import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularmodal';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openModal(){
    const dialogRef = this.dialog.open(ModalComponent, {
      position: { top: '10px'},
      width: '100%'
    
    });

   
  }
}
