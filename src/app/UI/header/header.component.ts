import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isToggle = true;
  isDropdown: boolean = false;

  @Output() changePageEvent = new EventEmitter<string>()
  
  constructor() { }

  ngOnInit() {
  }

  onDropdown(){
    this.isDropdown = !this.isDropdown;
  }

  changePage(page){
    this.changePageEvent.emit(page);
  }

}
