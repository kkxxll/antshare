import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // 使用jsdom模拟浏览器环境
    setupFiles: "./src/setupTests.ts", // 如果有初始化代码，可以在这里指定
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
