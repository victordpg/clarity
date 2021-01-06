import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icons.page.html',
})
export class IconsPage {
  code = [
    {
      ng: {
        files: ['4.0.0/icons/icons.ng.html', '4.0.0/icons/icons.ng.ts'],
        component: '4.0.0/icons/icons.ng.ts',
        title: 'Angular icon',
      },
      core: {
        files: ['4.0.0/icons/icons.core.html', '4.0.0/icons/icons.core.ts'],
        component: '4.0.0/icons/icons.core.ts',
        title: 'Core icon',
      },
    },
  ];

  eslintSetup = `
"plugins": ["@clr/clarity-migration"],
"rules": {
  "@clr/clarity-adoption/no-clr-icon": "warn",
},
"overrides": [
  {
    "files": ["*.html"],
    "parser": "@clr/eslint-plugin-clarity-adoption/html-parser"
  }
]
`;
}
