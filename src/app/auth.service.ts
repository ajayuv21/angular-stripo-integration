import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://plugins.stripo.email/api/v1/auth'; 
 
  constructor(private http: HttpClient) {}

  fetchToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      pluginId: "013fb63e307940cdb6965e097e9d59f2",
      secretKey: "aa95cb35c55b4972b5e07121f454b914",
      userId: "AJAY UV",
      role: "Admin"
    }
    return this.http.post(this.apiUrl, body, { headers });
  }
}