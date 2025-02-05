import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';

import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent, RouterLink],
  template: `
    <div class="min-h-screen">
      <nav>
        <a routerLink="/">Voltar</a>
      </nav>

      @if (post$ | async; as recipe) {
        <article class="markdown-body">
          <analog-markdown [content]="recipe.content" />
        </article>
      }
    </div>
  `,
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
