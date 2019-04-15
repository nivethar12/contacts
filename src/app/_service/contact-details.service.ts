import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, throwError as ObservableThrowError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailsService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private httpCall: Http
  ) {}

  //private hostName = 'http://localhost:3000';
  private hostName = 'https://contractapp-api.glitch.me/';

  getContacts(): Observable<any> {
    return this.httpCall
      .get(this.hostName + '/contacts')
      .map((response: Response) => {
        return response.json();
      });
  }
  getContactDetails(id): Observable<any> {
    return this.httpCall
      .get(this.hostName + '/contactsDetails?id=' + id)
      .map((response: Response) => {
        return response.json();
      });
  }
  addorEdit(reqObj): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.httpCall
      .post(this.hostName + '/addorEdit', JSON.stringify(reqObj), options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }
  addFav(reqObj): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.httpCall
      .post(this.hostName + '/addfav', JSON.stringify(reqObj), options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }
  removeFav(reqObj): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.httpCall
      .post(this.hostName + '/removefav', JSON.stringify(reqObj), options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }
  delete(reqObj): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.httpCall
      .post(this.hostName + '/delete', JSON.stringify(reqObj), options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }
}
