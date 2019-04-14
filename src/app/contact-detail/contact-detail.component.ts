import { Component, OnInit } from '@angular/core';
import {ContactDetailsService} from '../_service/contact-details.service';
import { ActivatedRoute,Router} from '@angular/router';
import { ParamMap } from '@angular/router';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private myService:ContactDetailsService,private route: ActivatedRoute,private router: Router) { }
  details:any;
  currentContact:any;
  public contactId;
  ngOnInit() {
    
    // let id= parseInt(this.route.snapshot.paramMap.get('id'));
    // this.contactId=id;
    this.route.paramMap.subscribe((params : ParamMap) => {
        let id= parseInt(params.get('id'));
        this.contactId=id;
    });
    this.myService.getContactDetails(this.contactId).subscribe(data  =>  {
      this.details =data;
      console.log(JSON.stringify(this.details, null, 2));
      // this.currentContact=this.details[this.contactId];
      this.currentContact=this.details;
    });
  }
  deleteContact(){
  var userInput = confirm("Are yoy sure,you want to delete?");
  if (userInput == true) {
   
    console.log("delete");
  } else {
    
    console.log("ignore it");
  }
}
editContacts(){
  this.router.navigate(['/edit',this.contactId]);
}
}
