import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EditorComponent } from './editor/editor.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    EditorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
