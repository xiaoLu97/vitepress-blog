import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-blog/',
  title: "Yonghwa Project",
  description: "It's never too late to start over",
  themeConfig: {
    logo: '/theme/logo.svg',
    siteTitle: 'Yonghwa Blog',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', items: [
          { text: 'vue', link: '/frontend/vue' },
          { text: 'vite', link: '/frontend/vite' }
        ]
      },
      { text: '后端', items: [
          { text: 'nest', link: '/backend/nest' },
          { text: 'node', link: '/backend/node' }
        ]
      },
      { text: 'Examples', link: '/test/markdown-examples' }
    ],

    sidebar: {
      '/test/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/test/markdown-examples' },
            { text: 'Runtime API Examples', link: '/test/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  rewrites: {
    'src/examples/:file': 'test/:file',
    'src/:type/:file': ':type/:file'
  },
  cleanUrls: true,
})
