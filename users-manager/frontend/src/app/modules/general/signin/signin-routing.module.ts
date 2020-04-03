import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  {
    path: 'subscribe',
    loadChildren: () => import('../subscribe/subscribe.module')
      .then(mod => mod.SubscribeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
