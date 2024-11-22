import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  plugin() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer YOUR_VALID_API_TOKEN',
    });

    this.http
      .get('https://plugins.stripo.email/api/v1/plugins/config', { headers })
      .subscribe(
        (response) => {
          console.log('Builder Config:', response);
        },
        (error) => {
          console.error('Error fetching config:', error);
          if (error.status === 401) {
            console.error('Authentication failed. Check your token.');
          }
        }
      );
  }
}