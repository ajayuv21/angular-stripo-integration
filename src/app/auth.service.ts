import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://plugins.stripo.email/api/v1/auth';

  constructor(private http: HttpClient) {}

  fetchToken(): Observable<any> {
    const payload = {
      pluginId: '013fb63edb6965e097e9d59f2',
      secretKey: 'aa95cb35c557121f454b914',
      userId: 'AJAY UV',
      role: 'Admin'
    };

    return this.http.post(this.apiUrl, payload);
  }
}
