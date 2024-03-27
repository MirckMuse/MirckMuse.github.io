import { defineConfig } from 'vitepress'

function nav() {
  return [
    // { text: 'Home', link: '/' },
    // {
    //   text: '案例',
    //   link: '/codemirror/examples',
    //   activeMatch: '/codemirror/'
    // }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SCode",
  titleTemplate: ":title",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MirckMuse' }
    ]
  }
})
