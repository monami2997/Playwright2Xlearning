import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
        trace : 'on',
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'on',
    },
    reporter: 'list',
});
