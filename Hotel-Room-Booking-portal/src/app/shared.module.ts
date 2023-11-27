import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FotterComponent } from "./fotter/fotter.component";
import { MaterialModule } from './material.module';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
      HeaderComponent,
      FotterComponent
    ],
    imports: [
      MaterialModule,
      RouterModule
    ],
    exports: [
      HeaderComponent,
      FotterComponent,
      MaterialModule
    ]
  })
  export class SharedModule { }