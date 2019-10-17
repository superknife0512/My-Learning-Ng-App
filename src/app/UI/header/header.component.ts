import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isToggle = true;
  isDropdown: boolean = false;

  @Output() changePageEvent = new EventEmitter<string>()
  @Input() currentPage: string;
  
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
