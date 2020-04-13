import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile.component';
import { AuthGuard } from 'src/app/security/auth.guard';

const routes: Routes = [{ path: '', component: UserProfileComponent, canActivate: [ AuthGuard ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
