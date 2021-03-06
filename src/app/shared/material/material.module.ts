import { NgModule } from '@angular/core'

import { MatButtonModule } from '@angular/material'
import { MatCardModule } from '@angular/material/card'

const materialModules = [MatButtonModule, MatCardModule]

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule {}
