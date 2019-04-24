import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversation } from '../../shared/model';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  conversation: Observable<Conversation>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.conversation = route.data.pipe(pluck('conversation'));
  }

  goUp(): void {
    // tslint:disable-next-line: no-string-literal
    const folder = this.route.snapshot.parent.params['folder'];
    this.router.navigate(['/', folder]);
  }
}
