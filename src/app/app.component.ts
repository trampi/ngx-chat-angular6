import {Component, Inject} from '@angular/core';
import {ChatService, ChatServiceToken} from '@pazznetwork/ngx-chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(ChatServiceToken) chatService: ChatService) {
    chatService.logIn({
      domain: '',
      uri: '',
      password: '',
      jid: '',
    });
  }

}
