import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  { path: 'error', component: ErrorpageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }