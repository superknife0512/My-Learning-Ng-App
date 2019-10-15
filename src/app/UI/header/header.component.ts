import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isToggle = true;

  isDropdown: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onDropdown(){
    this.isDropdown = !this.isDropdown;
  }

}
