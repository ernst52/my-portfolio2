export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio2/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
})