import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FeaturesRoutingModule } from './features.routing.module';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  declarations: [
    FlexboxComponent,
    GridComponent
  ]
})
export class FeaturesModule { }
