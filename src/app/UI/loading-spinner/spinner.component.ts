import { Component } from '@angular/core';

@Component({
  styleUrls:['./spinner.component.scss'],
  template: `<div class="lds-roller mt-2"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`,
  selector: 'app-loading-spinner'
})
export class AppLoadingSpinner {
  constructor(){}
}