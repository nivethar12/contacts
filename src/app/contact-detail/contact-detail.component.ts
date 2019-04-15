import { Component, OnInit } from '@angular/core';
import { ContactDetailsService } from '../_service/contact-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  constructor(
    private myService: ContactDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  details: any;
  currentContact: any;
  public contactId;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.contactId = id;
    });
    this.myService.getContactDetails(this.contactId).subscribe(data => {
      this.currentContact = data;
    });
  }
  addToFav() {
    this.myService.addFav({ id: this.contactId }).subscribe(data => {
      this.ngOnInit();
    });
  }
  removeFromFav() {
    this.myService.removeFav({ id: this.contactId }).subscribe(data => {
      this.ngOnInit();
    });
  }
  deleteContact() {
    var userInput = confirm('Are you sure,you want to delete?');
    if (userInput == true) {
      this.myService.delete({ id: this.contactId }).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
  }
  editContacts() {
    this.router.navigate(['/edit', this.contactId]);
  }
}
