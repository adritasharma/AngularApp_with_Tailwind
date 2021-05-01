import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxAlignmentComponent } from './box-alignment/box-alignment.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
    { path: 'flexbox', component: FlexboxComponent },
    { path: 'grid', component: GridComponent },
    { path: 'box', component: BoxAlignmentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }