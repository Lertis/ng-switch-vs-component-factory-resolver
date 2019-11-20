import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ComponentFactoryComponent } from './component-factory.component'

const routes: Routes = [
  {
    path: '',
    component: ComponentFactoryComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentFactoryRoutingModule {}
