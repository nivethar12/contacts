import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { ParamMap } from '@angular/router';
import {ContactDetailsService} from '../_service/contact-details.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private myService:ContactDetailsService,private route: ActivatedRoute,private router: Router) { }
  contactId:any;
  details:any;
  editContact:any="";
  firstName:any="";
  lastName:any="";

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id= parseInt(params.get('id'));
      this.contactId=id;
      
  });
  if(this.contactId){
    this.myService.getContactDetails(this.contactId).subscribe(data  =>  {
      this.details =data;
      console.log(JSON.stringify(this.details, null, 2));
      this.editContact=this.details;
      this.firstName=this.editContact.contactName.split(" ")[0];
      this.lastName=this.editContact.contactName.split(" ")[1];
    });
  }
}
submit(){
  
  const obj = {
    contactName: this.firstName + " " + this.lastName,
    mobile: this.editContact.mobile,
    email: this.editContact.email,
    id: this.editContact.id
  };
 
  this.myService.addorEdit(obj).subscribe(Response  => {

    console.log("response", Response);
    console.log("Data saved successfully after calling  api");
    
    // this.router.navigate(['msworkbench/dashboard']);
  },
  err => { 
    console.log(err);
    console.log("Request is unsuccessful,Please try again later");
    //	this.router.navigate(['/reports']);
  }
);

 }
}
