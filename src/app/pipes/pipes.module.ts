import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelPipe } from './model.pipe';



@NgModule({
  declarations: [
    ModelPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModelPipe
  ]
})
export class PipesModule { }
