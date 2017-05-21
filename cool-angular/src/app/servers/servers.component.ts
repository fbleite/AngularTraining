import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus = "No server created";
  serverName = "Default Name";
  isServerCreated:boolean = false;
  servers = [
    'Test Server',
    'Test Server 2'
  ]

  constructor() {
    setTimeout(( ) =>{
      this.allowNewServer = true;
    },
      3000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created, name is " + this.serverName;
    this.servers.push(this.serverName);
    this.isServerCreated = true;
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
