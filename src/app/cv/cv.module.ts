import { NgModule } from '@angular/core';

import * as fromComponents from './components';
import * as fromPages from './pages';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromPages.pages
  ],
  imports: [
    SharedModule
  ]
})
export class SharedModule { }