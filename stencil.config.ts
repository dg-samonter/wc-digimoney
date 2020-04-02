import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'wc-digimoney',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '../node_modules/design-pichincha/dist/collection/global/variables.css' },
        { src: '../node_modules/design-pichincha/dist/collection/global/spaces.css' },
      ],
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],

  globalStyle: 'node_modules/design-pichincha/dist/collection/global/variables.css'
}
