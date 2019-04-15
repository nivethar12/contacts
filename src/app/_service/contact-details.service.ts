import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable, throwError as ObservableThrowError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailsService {

  constructor(private http: HttpClient, private router: Router,private httpCall: Http) { }

  // private readContactsUrl="./assets/contacts.json";
  private readContactsUrl= "http://localhost:3000/contacts";
  // private readDetailsUrl="./assets/contactsDetail.json";
  private readDetailsUrl= "http://localhost:3000/contactsDetails";

  getContacts():Observable<any>
  {
      return this.httpCall.get(this.readContactsUrl)
      .map((response:Response) =>{
      return response.json();
   });
  }
  getContactDetails(id):Observable<any>
  {
      return this.httpCall.get(`http://localhost:3000/contactsDetails?id=`+id)
      .map((response:Response) =>{
      return response.json();
   });
  }
  addorEdit(reqObj) : Observable<any>{

    let url="http://localhost:3000/addorEdit";
    console.log("reqObj"+JSON.stringify(reqObj));
   
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
  
   const options = new RequestOptions({headers: headers});
    
    return this.httpCall.post(url,
         JSON.stringify(reqObj),
        options
    ).map((response:Response) => {
        console.log('response.json()', response.json());
        return response.json();
    })
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  
  }
}
