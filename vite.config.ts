import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import autoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
const resolves = () => {
  return  {
      '@':  resolve(__dirname,'src'),
      '@components': resolve(__dirname, 'src/components'),
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    autoImport({
      imports: ['vue'],
      dts: 'src/types/auto-import.d.ts',
    }),
    Components({
      resolvers: [],
      dts: 'src/types/components.d.ts'
    })
  ],
  resolve: {
    alias: resolves(),
    extensions: ['.js','.ts','jsx','tsx','json','.vue','.mjs']
  },
})
