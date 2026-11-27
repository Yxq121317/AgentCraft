import { defineConfig } from 'vitepress'

/**
 * base 规则：
 * - 本地开发、用户主页仓库（<用户名>.github.io）或自定义域名：'/'
 * - 普通仓库部署到 https://<用户名>.github.io/<仓库名>/ 时需要子路径前缀。
 *   GitHub Actions 会在构建时注入 VITEPRESS_BASE（见 deploy.yml），本地不用管；
 *   如果你改用自定义域名，把 deploy.yml 里的 VITEPRESS_BASE 删掉即可。
 */
const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: 'AgentCraft',
  titleTemplate: ':title · AgentCraft',
  description: '大模型应用开发工程师的个人技术博客，记录 Agent 编排、RAG 与多模态应用落地',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { name: 'author', content: 'AgentCraft' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#0b1020' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AgentCraft · 大模型应用开发工程师' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '专注 Agent 编排、RAG 与多模态应用落地的工程实践记录',
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    config(md) {
      // 把 ```mermaid 代码块交给主题里的 <Mermaid> 组件在浏览器端渲染。
      // 图表源码用 base64 传参，避免引号、换行、尖括号破坏 HTML 属性。
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (token.info.trim() === 'mermaid') {
          const encoded = Buffer.from(token.content, 'utf-8').toString('base64')
          return `<Mermaid encoded="${encoded}" />\n`
        }
        return fence(tokens, idx, options, env, self)
      }
    },
  },

  vite: {
    build: {
      // mermaid 是体积较大的按需依赖，只会在有图表的文章里动态加载
      chunkSizeWarningLimit: 1200,
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AgentCraft',

    nav: [
      { text: '首页', link: '/' },
      { text: '项目实战', link: '/projects/' },
      { text: '关于我', link: '/about' },
    ],

    sidebar: {
      '/projects/': [
        {
          text: '项目实战',
          items: [
            { text: '项目总览', link: '/projects/' },
            { text: '智能阅卷与学情分析', link: '/projects/smart-grading' },
            { text: 'AI 智能绘本工作台', link: '/projects/storycast' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Yxq121317' }],

    search: { provider: 'local' },

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },

    editLink: {
      pattern: 'https://github.com/Yxq121317/AgentCraft/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: '用工程化的方式，把大模型做成真正可用的产品。',
      copyright: 'Copyright © 2026 AgentCraft',
    },
  },
})
