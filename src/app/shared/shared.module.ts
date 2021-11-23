import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { RouterModule } from '@angular/router';

// No services
// only components, piles, directives
// FormsModule, ReactiveFormsModule etc

@NgModule({
    declarations: [
      ...fromComponents.components,
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule
    ],
    exports: [
      ...fromComponents.components,
      FormsModule,
      RouterModule
    ]
  })
  export class SharedModule { }