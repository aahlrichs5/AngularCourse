import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server-component.html',
  // styles: [
  //   `
  //     .online {
  //       background-color: black;
  //     }
  //   `,
  // ],
})
export class ServerComponent {
  serverId = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
