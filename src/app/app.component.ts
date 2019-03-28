import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [WebsocketService]
})
export class AppComponent {
	title = 'socket-angular';

	constructor(
		private WebsocketService: WebsocketService
	){}

	ngOnInit(){
		//this.socket()
	}

	socket(){
		this.WebsocketService.listen('test').subscribe((data) => {
			console.log(data)
		})
	}
}
