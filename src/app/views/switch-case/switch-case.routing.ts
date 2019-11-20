import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwitchCaseComponent } from './switch-case.component';


const routes: Routes = [
    {
        path: '',
        component: SwitchCaseComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchCaseRoutingModule { }
