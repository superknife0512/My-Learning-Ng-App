import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from './../../shared/dataStorage.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isToggle = true;
  isDropdown: boolean = false;
  isAuth = false;

  constructor(private storeService: DataStorageService, private authService: AuthService){}

  @Output() changePageEvent = new EventEmitter<string>()
  @Input() currentPage: string;

  ngOnInit() {
    this.authService.user.subscribe(userData=>{
      this.isAuth = userData ? true : false
    })
  }

  onDropdown(){
    this.isDropdown = !this.isDropdown;
  }

  changePage(page){
    this.changePageEvent.emit(page);
  }

  saveData(){
    this.storeService.storeRecipes();
    this.isDropdown = false
  }

  fetchData(){
    this.storeService.fetchRecipes();
    this.isDropdown = false
  }

  onLogout(){
    this.authService.logout()
  }
}
