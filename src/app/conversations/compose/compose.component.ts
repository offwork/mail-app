import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '../../shared/model';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent {
  form = this.fb.group({
    title: ['', Validators.required],
    body: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actions: Actions,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    const conversationRoute = this.route.snapshot.root.firstChild.firstChild;
    // tslint:disable-next-line: no-string-literal
    const conversationId = +conversationRoute.params['id'];

    this.actions.next({
      type: 'reply',
      // tslint:disable-next-line: object-literal-shorthand
      conversationId: conversationId,
      payload: this.form.value,
      onSuccess: () => this.hidePopup()
    });
  }

  private hidePopup() {
    this.router.navigate(['/', { outlets: { popup: null } }]);
  }
}
