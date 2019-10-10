import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit{

  isDisable: boolean = false;
  serverState: string = 'Server is offline';
  serverName: string;

  constructor() {
    setTimeout(() => {
        this.isDisable = true
    }, 3000);
  }

  ngOnInit() {
  }

  onServerChange(): void {
    this.serverState = "Server is online now" ;
  }

  // onFormUpdate(event: Event): void {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
