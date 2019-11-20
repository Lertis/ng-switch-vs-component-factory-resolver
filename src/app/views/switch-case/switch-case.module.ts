import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SwitchCaseComponent } from './switch-case.component'
import { SwitchCaseRoutingModule } from './switch-case.routing'
import { MaterialModule } from 'src/app/shared/material/material.module'

@NgModule({
  declarations: [SwitchCaseComponent],
  imports: [CommonModule, SwitchCaseRoutingModule, MaterialModule]
})
export class SwitchCaseModule {}
