import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 3000, // Укажите нужный порт, если требуется
		open: true // Открывать ли браузер по адресу
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src')
		}
	}
})