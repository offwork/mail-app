import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversation } from '../../shared/model';
import { ActivatedRoute } from '@angular/router';
import { pluck, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationsComponent {
  folder: Observable<string>;
  conversations: Observable<Conversation[]>;

  constructor(route: ActivatedRoute) {
    this.folder = route.params.pipe(pluck('folder'));
    this.conversations = route.data.pipe(
      pluck('conversations'),
      mergeAll()
    ) as any;
  }
}
