import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run diaz-consulting-services:serve',
        production: 'nx run diaz-consulting-services:preview',
      },
      ciWebServerCommand: 'nx run diaz-consulting-services:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
