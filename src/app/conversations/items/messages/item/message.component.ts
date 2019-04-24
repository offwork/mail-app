import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { pluck, mergeAll } from 'rxjs/operators';

import { Message } from '../../../../shared/model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  message: Observable<Message>;
  messages: Observable<Message[]>;

  constructor(route: ActivatedRoute) {
    this.messages = route.data.pipe(
      pluck('messages'),
      mergeAll()
    ) as any;
    this.message = route.data.pipe(pluck('message'));
  }
}
