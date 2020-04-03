import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribeComponent } from './subscribe.component';

const routes: Routes = [
  { path: '', component: SubscribeComponent },
  {
    path: 'signin',
    loadChildren: () => import('../signin/signin.module')
      .then(mod => mod.SigninModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SubscribeRoutingModule { }

