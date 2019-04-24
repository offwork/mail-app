import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ConversationComponent,
  ConversationsComponent,
  MessageComponent,
  MessagesComponent,
  ComposeComponent
} from './conversations';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inbox' },
  {
    path: ':folder',
    children: [
      {
        path: '',
        component: ConversationsComponent,
        resolve: { conversations: 'conversationsResolver' }
      },
      {
        path: ':id',
        component: ConversationComponent,
        resolve: { conversation: 'conversationResolver' },
        children: [
          {
            path: '',
            component: MessagesComponent,
            resolve: { messages: 'messagesResolver' }
          },
          {
            path: 'messages/:id',
            component: MessageComponent,
            resolve: {
              messages: 'messagesResolver',
              message: 'messageResolver'
            }
          }
        ]
      }
    ]
  },
  {
    path: 'compose',
    component: ComposeComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
