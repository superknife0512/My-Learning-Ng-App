import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 
export class AppComponent {
  currentPage: string = 'recipe';

  onChangePage(page: string){
    this.currentPage = page;
  }
}
