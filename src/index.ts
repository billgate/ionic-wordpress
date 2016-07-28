import { PLATFORM_DIRECTIVES, provide } from '@angular/core';
import { IONIC_WORDPRESS_DIRECTIVES } from './components';

export const IONIC_WORDPRESS_PROVIDERS: any[] = [
  provide(PLATFORM_DIRECTIVES, {useValue: IONIC_WORDPRESS_DIRECTIVES, multi: true}),
]
