import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import solid from 'vite-plugin-solid'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [vanillaExtractPlugin(), solid()],
    resolve: {
        alias: {
            '@shade': '/src/shade-ui',
            '@component': '/src/component',
            '@type': '/src/type',
            '@service': '/src/service',
            '@storage': '/src/storage',
            '@': __dirname,
        },
    },
})
