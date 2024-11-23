import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

declare const Stripo: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-stripo-integration';
  token: string | null = null;

  constructor(
    private readonly zone: NgZone,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getToken();
  }

  getToken(): void {
    this.authService.fetchToken().subscribe({
      next: (response: any) => {
        this.token = response?.token; // Adjust to match the actual key in the response
        console.log('Token fetched successfully:', this.token);

        // Optionally store the token in local storage
        localStorage.setItem('authToken', this.token || '');
        this.initializeStripoEditor();
      },
      error: (err) => {
        console.error('Error fetching token:', err);
      },
    });
  }

  initializeStripoEditor(): void {
    this.zone.runOutsideAngular(() => {
      const domContainer = document.querySelector('#stripoEditorContainer');
      if (!domContainer) {
        console.error('DOM container not found');
        return;
      }

      const stripoConfig = {
        metadata: {
          emailId: '1',
          username: 'AJAY UV',
          email: 'ajay.uv@tudotechnologies.com',
        },
        settingsId: 'stripoSettingsContainer',
        previewId: 'stripoPreviewContainer',
        html: '',
        css: '.example { color: red; }',
        apiRequestData: {
          emailId: 'ajay.uv@tudotechnologies.com',
        },
        onTokenRefreshRequest: (callback: (token: string) => void) => {
          callback(this.token || ''); // Provide the token
        },
      };

      if (window.UIEditor) {
        window.UIEditor.initEditor(domContainer, stripoConfig);
      } else {
        console.error(
          'UIEditor is not defined. Ensure the library is included and loaded.'
        );
      }
    });
  }
}
declare global {
  interface Window {
    UIEditor: any; // Replace `any` with the actual type if available
  }
}
