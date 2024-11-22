import { Component, NgZone } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-stripo-integration';

  constructor(
    // private service:AppService,
    private readonly zone: NgZone
  ) {}

  ngOnInit(): void {
    // this.service.plugin()
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
          email: 'AJAY UV',
        },
        html: 'Your initial HTM',
        css: '.example { color: red; }',
       
        onTokenRefreshRequest: function (callback: (token: string) => void) {
          const token ="eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQWRtaW4iLCJ1c2VySWQiOiJBSkFZIFVWIiwic3ViIjoiMDEzZmI2M2UzMDc5NDBjZGI2OTY1ZTA5N2U5ZDU5ZjIiLCJleHAiOjE3MzIyNjk5MTJ9.etiBsPiaDrmmGzScMesMHf8IBID3k1j86hqUcj8NEhAHPIca0cOcG1Z8xn8ouc81-54aRDmDMnsWkgYWsQR3Tg"
          callback(token);
        },

        textEditorAllowedPasteContent: {
          tags: ['b', 'strong', 'i', 'a'],
          attributes: ['href', 'target'],
        },
      };

      if (window.UIEditor) {
        window.UIEditor.initEditor(domContainer, stripoConfig);
      } else {
        console.error(
          'UIEditor is not defined. Ensure the library is included.'
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
