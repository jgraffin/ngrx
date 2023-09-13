import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlighterPipe } from './highlighter.pipe';

@NgModule({
  declarations: [HighlighterPipe],
  exports: [HighlighterPipe],
  imports: [CommonModule],
})
export class PipesModule {}
