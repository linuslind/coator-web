import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Import modules that should be instantiated once in app
// place service in this module, but do not provide them
// DO NOT declare components, pipes, directives
// DO NOT import coreModule into any modules other tha the AppModule

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
    ],
    providers: [
    ]
})
export class CoreModule { }