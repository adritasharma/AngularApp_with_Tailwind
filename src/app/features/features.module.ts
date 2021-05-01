import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FeaturesRoutingModule } from './features.routing.module';
import { GridComponent } from './grid/grid.component';
import { BoxAlignmentComponent } from './box-alignment/box-alignment.component';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  declarations: [
    FlexboxComponent,
    GridComponent,
    BoxAlignmentComponent
  ]
})
export class FeaturesModule { }
