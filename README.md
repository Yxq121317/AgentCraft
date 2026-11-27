# AgentCraft · 个人技术博客

基于 VitePress 的个人技术博客 / 项目作品集。极简科技风，支持亮暗两套配色、本地搜索与 Mermaid 架构图，推送即自动部署到 GitHub Pages。

- 线上地址：<https://yxq121317.github.io/AgentCraft/>
- 仓库地址：<https://github.com/Yxq121317/AgentCraft>

## 技术栈

- **VitePress 1.6**（Vue 3 + TypeScript）
- **Mermaid 11**：架构图，仅在含图表的页面按需加载
- **GitHub Actions + GitHub Pages**：main 分支推送即发布

## 本地运行

```bash
npm install          # 安装依赖
npm run docs:dev     # 开发预览：http://localhost:5173
npm run docs:build   # 打包：输出到 docs/.vitepress/dist
npm run docs:preview # 本地预览打包结果
```

> Node.js 版本要求 >= 18，推荐 20 LTS。

## 目录结构

```text
.
├─ .github/workflows/deploy.yml   # 推送即部署到 GitHub Pages
├─ docs/
│  ├─ .vitepress/
│  │  ├─ config.mts               # 站点配置：导航、侧边栏、搜索、SEO、Mermaid 插件
│  │  └─ theme/
│  │     ├─ index.ts              # 继承默认主题并注册 Mermaid 组件
│  │     ├─ custom.css            # 极简科技风配色、首页卡片、文章排版
│  │     └─ components/Mermaid.vue
│  ├─ public/                     # logo.svg / favicon.svg 等静态资源
│  ├─ index.md                    # 首页：Hero + 精选文章
│  ├─ about.md                    # 关于我
│  └─ projects/
│     ├─ index.md                 # 项目实战总览
│     ├─ smart-grading.md         # 智能阅卷与学情分析（LangGraph 多 Agent）
│     └─ storycast.md             # AI 智能绘本工作台（可灵图生视频）
├─ screenshots/                   # 首页预览图
├─ package.json
└─ README.md
```

## 部署到 GitHub Pages

1. 新建仓库并推送代码（仓库名示例为 `AgentCraft`）：

   ```bash
   git init -b main
   git add .
   git commit -m "chore: init VitePress blog"
   git remote add origin https://github.com/<你的用户名>/AgentCraft.git
   git push -u origin main
   ```

2. 打开仓库 **Settings → Pages → Build and deployment**，把 **Source** 选为 **GitHub Actions**。
3. 之后每次推送 `main` 都会自动构建发布，地址为 `https://<你的用户名>.github.io/AgentCraft/`。

部署说明：

- 工作流会自动把 `VITEPRESS_BASE` 设为 `/<仓库名>/`，因此普通项目仓库不需要手改 `base`；
- 如果你的仓库是 `<用户名>.github.io`，工作流会自动使用 `/`；
- 如果绑定自定义域名，删除 `deploy.yml` 中的 `VITEPRESS_BASE` 环境变量即可（base 回落到 `/`）。

## 换成你自己的信息

| 想改什么 | 去哪里改 |
| --- | --- |
| 站点标题、描述、导航、侧边栏、搜索、SEO | `docs/.vitepress/config.mts` |
| 首页 Hero 标题、副标题、两个项目按钮、精选文章 | `docs/index.md` |
| 个人简介、项目清单、联系方式 | `docs/about.md` |
| GitHub 链接、编辑此页链接 | `config.mts` 中的 `socialLinks`、`editLink` |
| 文章 | `docs/projects/*.md`，同时在 `config.mts` 侧边栏与 `docs/projects/index.md` 添加入口 |

## 写作提示

- 新文章 frontmatter 建议包含：`title`、`description`、`date`、`tags`；
- Mermaid 图表直接用 ```` ```mermaid ```` 代码块，主题会自动跟随亮色 / 暗色模式重新渲染；
- 搜索为 VitePress 内置本地搜索，无需额外服务或 API Key。

## 说明

- 首页预览见 [screenshots/home.png](./screenshots/home.png)，暗色效果见 [screenshots/home-dark.png](./screenshots/home-dark.png)；
- 文章内代码为可读的示例骨架，接入真实项目时替换 API Key、域名、模型名与具体实现。
