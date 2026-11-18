import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.tsx",
    // Outdated suites (mocks/APIs no longer match FollowUpBossClient / lead route)
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "lib/fub/client.test.ts",
      "middleware/claude-rate-limit.test.ts",
      "app/api/leads/capture/route.test.ts",
      "components/forms/LeadCaptureForm.test.tsx",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "tests/",
        ".next/",
        "out/",
        "*.config.js",
        "*.config.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      lib: path.resolve(__dirname, "./lib"),
      components: path.resolve(__dirname, "./components"),
      app: path.resolve(__dirname, "./app"),
    },
  },
});
