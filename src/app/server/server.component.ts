import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss']
})

export class ServerComponent {
    _x = Math.random();

    serverId = Math.round(this._x * 1000);
    serverSts = this._x > 0.5 ? 'online' : 'offline'    

    constructor() {}

    getColor(): string {
        return this.serverSts === 'offline' ? 'red' : 'green';
    }
}
