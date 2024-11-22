import { Component, NgZone, OnInit } from '@angular/core';
declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  private emailTemplateHtml: string = `
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title></title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
 </head> 
 <body> 
  <div class="es-wrapper-color"> 
   <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f6f6f6"></v:fill>
			</v:background>
		<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"> 
    <tbody> 
     <tr> 
      <td class="esd-email-paddings" valign="top"> 
       <table class="esd-footer-popover es-content" cellspacing="0" cellpadding="0" align="center"> 
        <tbody> 
         <tr> 
          <td class="esd-stripe" align="center"> 
           <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" esd-img-prev-src=""> 
            <tbody> 
             <tr> 
              <td class="esd-structure es-p20t es-p20r es-p20l" align="left"> 
               <!--[if mso]><table width="560" cellpadding="0"
                            cellspacing="0"><tr><td width="180" valign="top"><![endif]--> 
               <table cellpadding="0" cellspacing="0" class="es-left" align="left"> 
                <tbody> 
                 <tr> 
                  <td width="180" class="es-m-p0r es-m-p20b esd-container-frame" valign="top" align="center"> 
                   <table cellpadding="0" cellspacing="0" width="100%"> 
                    <tbody> 
                     <tr> 
                      <td align="center" class="esd-empty-container" style="display: none;"></td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> 
               <!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]--> 
               <table cellpadding="0" cellspacing="0" align="right"> 
                <tbody> 
                 <tr> 
                  <td width="360" align="left" class="esd-container-frame"> 
                   <table cellpadding="0" cellspacing="0" width="100%"> 
                    <tbody> 
                     <tr> 
                      <td align="center" class="esd-empty-container" style="display: none;"></td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> 
               <!--[if mso]></td></tr></table><![endif]--> </td> 
             </tr> 
             <tr> 
              <td class="es-p20t es-p20r es-p20l esd-structure" align="left"> 
               <table width="100%" cellspacing="0" cellpadding="0"> 
                <tbody> 
                 <tr> 
                  <td class="esd-container-frame" width="560" valign="top" align="center"> 
                   <table width="100%" cellspacing="0" cellpadding="0"> 
                    <tbody> 
                     <tr> 
                      <td class="esd-empty-container" style="display: none;" align="center"></td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> </td> 
             </tr> 
             <tr> 
              <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left"> 
               <!--[if mso]><table width="560" cellpadding="0" 
                        cellspacing="0"><tr><td width="270" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left"> 
                <tbody> 
                 <tr> 
                  <td class="es-m-p20b esd-container-frame" width="270" align="left"> 
                   <table width="100%" cellspacing="0" cellpadding="0"> 
                    <tbody> 
                     <tr> 
                      <td class="esd-empty-container" style="display: none;" align="center"></td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> 
               <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]--> 
               <table class="es-right" cellspacing="0" cellpadding="0" align="right"> 
                <tbody> 
                 <tr> 
                  <td class="esd-container-frame" width="270" align="left"> 
                   <table width="100%" cellspacing="0" cellpadding="0"> 
                    <tbody> 
                     <tr> 
                      <td class="esd-empty-container" style="display: none;" align="center"></td> 
                     </tr> 
                    </tbody> 
                   </table> </td> 
                 </tr> 
                </tbody> 
               </table> 
               <!--[if mso]></td></tr></table><![endif]--> </td> 
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
        </tbody> 
       </table> </td> 
     </tr> 
    </tbody> 
   </table> 
  </div>  
 </body>
</html>
`;


  private loadStripoScript(): void {
    const script = document.createElement('script');
    script.src = 'https://plugins.stripo.email/static/latest/stripo.js';
    script.onload = () => this.initializeStripo();
    document.body.appendChild(script);
  }
  


  ngOnInit(): void {
    this.loadStripoScript();
    this.initializeStripo();
  }

  private initializeStripo(): void {
    window.Stripo.init({
      settingsId: 'stripo-settings-container',
      previewId: 'stripo-preview-container',
      html: this.emailTemplateHtml,
      css: '/* Your initial CSS styles go here */',
      apiRequestData: {
        emailId: 'dev4venkatmohan@gmail.com'
      },
      getAuthToken: (callback: (token: string) => void) => {
        // Fetch or generate an authentication token for Stripo
        const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQWRtaW4iLCJ1c2VySWQiOiJBSkFZIFVWIiwic3ViIjoiMDEzZmI2M2UzMDc5NDBjZGI2OTY1ZTA5N2U5ZDU5ZjIiLCJleHAiOjE3MzIyODQ0OTN9.6xeJHbeVHE7fwHgmeGUrDOTsdE6X0_AY6nar_Hmn2yWR2XmnHIjPlYeXjqVW3wRAtkjrvzZVz4CPyGdEvXozIg';
        callback(token);
      }
    });
  }

//   title = 'angular-stripo-integration';
//   constructor(
//     private readonly zone: NgZone // provide NgZone
//   ) {}

//   ngOnInit(): void {
//     this.zone.runOutsideAngular(() => {
//       const domContainer = document.querySelector('#stripoEditorContainer');
//       if (!domContainer) {
//         console.error('DOM container not found');
//         return;
//       }

//       const stripoConfig = {
//         metadata: {
//           emailId: '1',
//           username: 'AJAY UV',
//           email: 'ajay.uv@tudotechnologies.com',
//         },
//         html: 'Your initial HTML',
//         css: '.example { color: red; }',
//         onTokenRefreshRequest: function (callback: (token: string) => void) {
//           const token =
//             'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQWRtaW4iLCJ1c2VySWQiOiJBSkFZIFVWIiwic3ViIjoiMDEzZmI2M2UzMDc5NDBjZGI2OTY1ZTA5N2U5ZDU5ZjIiLCJleHAiOjE3MzIyODMwNTd9.M5NJl9qcGQ-4Zhfr6_5ZciEXKw8xTBNwtJQlo2Y9PKeNHCqfj0_uDIJkyxD9H2uRmyzdZLZUPqG6LqX_3PgSkQ';
//           callback(token);
//         },
        

//         textEditorAllowedPasteContent: {
//           tags: ['b', 'strong', 'i', 'a'],
//           attributes: ['href', 'target'],
//         },
//       };

//       if (window.UIEditor) {
//         window.UIEditor.initEditor(domContainer, stripoConfig);
//       } else {
//         console.error(
//           'UIEditor is not defined. Ensure the library is included.'
//         );
//       }
//     });
//   }
// }

// declare global {
//   interface Window {
//     UIEditor: {
//       initEditor: (domContainer: Element, config: any) => void;
//     };
//   }
}
