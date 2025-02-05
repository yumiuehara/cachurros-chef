import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'index.page.html'
})
export default class BlogComponent {
  readonly recipes = injectContentFiles<PostAttributes>();
}
