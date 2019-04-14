import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {ContactDetailsService} from '../_service/contact-details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myService:ContactDetailsService,private router: Router) { }
  contacts:any;
  clickedIndex: any;

  ngOnInit() {
    
    this.myService.getContacts().subscribe(data  =>  {
      this.contacts =data;
      console.log(JSON.stringify(data, null, 2));
    });
  }
  displayDetails(i) {
    this.clickedIndex = i;
  }
  onSelect(contact){
    console.log("contact is",contact.id)
    this.router.navigate(['/details',contact.id]);
  }

}
