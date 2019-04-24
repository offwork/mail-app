import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpamComponent } from './spam/spam.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SpamComponent
  }
];

@NgModule({
  declarations: [SpamComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [SpamComponent]
})
export class SpamModule {}
