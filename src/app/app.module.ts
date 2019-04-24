import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Repo, Actions } from './shared/model';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ConversationComponent,
  ConversationsComponent,
  MessageComponent,
  MessagesComponent,
  ComposeComponent
} from './conversations';

export function conversationsResolver(repo: Repo) {
  return (route: ActivatedRouteSnapshot) =>
    // tslint:disable-next-line: no-string-literal
    repo.conversations(route.params['folder']);
}

export function conversationResolver(repo: Repo) {
  return (route: ActivatedRouteSnapshot) =>
    // tslint:disable-next-line: no-string-literal
    repo.conversation(+route.params['id']);
}

export function messagesResolver(repo: Repo) {
  return (route: ActivatedRouteSnapshot) =>
    // tslint:disable-next-line: no-string-literal
    repo.messageTitles(+route.parent.params['id']);
}

export function messageResolver(repo: Repo) {
  // tslint:disable-next-line: no-string-literal
  return (route: ActivatedRouteSnapshot) => repo.message(+route.params['id']);
}

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    ConversationsComponent,
    MessageComponent,
    MessagesComponent,
    ComposeComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [
    Repo,
    Actions,
    {
      provide: 'conversationsResolver',
      useFactory: conversationsResolver,
      deps: [Repo]
    },
    {
      provide: 'conversationResolver',
      useFactory: conversationResolver,
      deps: [Repo]
    },
    { provide: 'messagesResolver', useFactory: messagesResolver, deps: [Repo] },
    { provide: 'messageResolver', useFactory: messageResolver, deps: [Repo] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
