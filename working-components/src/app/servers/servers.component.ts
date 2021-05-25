import { Component, OnInit } from '@angular/core';

@Component({
  // USE THIS ONE PREFERRABLy
  // selector: '[app-servers]',
  //selector: '.app-servers',
  // template: ` <app-server></app-server>
  // <app-server></app-server>`,
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  createServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}
