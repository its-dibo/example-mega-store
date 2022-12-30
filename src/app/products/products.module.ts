import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EditorComponent } from './editor/editor.component';
import { Route } from '@angular/router';

const routes: Route[] = [
  { path: 'products/:id', component: DetailsComponent },
  { path: 'products', component: ListComponent },
  { path: 'editor', component: EditorComponent },
];

@NgModule({
  declarations: [ListComponent, DetailsComponent, EditorComponent],
  imports: [CommonModule],
})
export class ProductsModule {}
