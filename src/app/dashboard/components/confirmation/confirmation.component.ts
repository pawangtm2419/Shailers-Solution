import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  status: EventEmitter<String> = new EventEmitter();
  constructor( private dialogRef :MatDialogRef<ConfirmationComponent>,
    ) { }

  ngOnInit(): void {
   
  }
  
  submit() {
    this.dialogRef.close();
    this.status.emit("submit");
  }
  cancel() {
    this.dialogRef.close();
  }
  

}
