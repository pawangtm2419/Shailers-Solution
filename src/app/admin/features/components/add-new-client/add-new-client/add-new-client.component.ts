import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.css']
})
export class AddNewClientComponent implements OnInit {
msg = null;
error = null;
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  backToClientList(){
   this.route.navigateByUrl('/shailerscrm/admin/manage/client')
  }

}
