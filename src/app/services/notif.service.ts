import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor(private http: HttpClient) { }

  showNotif(message:any){
    console.log(message);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post('http://localhost:5000/api/kafka/sendNotif', JSON.stringify(message), {headers: headers}).subscribe(res => {
      console.log(res);
    });
  }
}
