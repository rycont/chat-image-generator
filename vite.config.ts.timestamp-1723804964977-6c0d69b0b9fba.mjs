// vite.config.ts
import { vanillaExtractPlugin } from "file:///workspaces/chat-image-generator/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import solid from "file:///workspaces/chat-image-generator/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import { defineConfig } from "file:///workspaces/chat-image-generator/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/workspaces/chat-image-generator";
var vite_config_default = defineConfig({
  plugins: [vanillaExtractPlugin(), solid()],
  resolve: {
    alias: {
      "@shade": "/src/shade-ui",
      "@component": "/src/component",
      "@type": "/src/type",
      "@service": "/src/service",
      "@storage": "/src/storage",
      "@": __vite_injected_original_dirname
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9jaGF0LWltYWdlLWdlbmVyYXRvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3dvcmtzcGFjZXMvY2hhdC1pbWFnZS1nZW5lcmF0b3Ivdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3dvcmtzcGFjZXMvY2hhdC1pbWFnZS1nZW5lcmF0b3Ivdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2YW5pbGxhRXh0cmFjdFBsdWdpbiB9IGZyb20gJ0B2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW4nXG5pbXBvcnQgc29saWQgZnJvbSAndml0ZS1wbHVnaW4tc29saWQnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFt2YW5pbGxhRXh0cmFjdFBsdWdpbigpLCBzb2xpZCgpXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAnQHNoYWRlJzogJy9zcmMvc2hhZGUtdWknLFxuICAgICAgICAgICAgJ0Bjb21wb25lbnQnOiAnL3NyYy9jb21wb25lbnQnLFxuICAgICAgICAgICAgJ0B0eXBlJzogJy9zcmMvdHlwZScsXG4gICAgICAgICAgICAnQHNlcnZpY2UnOiAnL3NyYy9zZXJ2aWNlJyxcbiAgICAgICAgICAgICdAc3RvcmFnZSc6ICcvc3JjL3N0b3JhZ2UnLFxuICAgICAgICAgICAgJ0AnOiBfX2Rpcm5hbWUsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtSLFNBQVMsNEJBQTRCO0FBQ3ZULE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUY3QixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDekMsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osS0FBSztBQUFBLElBQ1Q7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
