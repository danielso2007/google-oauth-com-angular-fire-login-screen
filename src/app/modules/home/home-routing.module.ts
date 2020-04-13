import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AuthGuard } from 'src/app/security/auth.guard';

const routes: Routes = [{ path: '', component: HomeComponent, canActivate: [ AuthGuard ], canActivateChild: [ AuthGuard ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
