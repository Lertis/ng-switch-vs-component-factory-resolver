import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentFactoryComponent } from './component-factory.component'
import { ComponentFactoryRoutingModule } from './component-factory.routing'

@NgModule({
  declarations: [ComponentFactoryComponent],
  imports: [CommonModule, ComponentFactoryRoutingModule]
})
export class ComponentFactoryModule {}
