---
layout: home
title: 大模型应用开发工程师

hero:
  name: 大模型应用开发工程师
  text: 专注 Agent 编排、RAG 与多模态应用落地
  tagline: 把大模型 API 封装成真正可用的产品。这里记录设计取舍、踩坑复盘，以及那些「Demo 很酷、上线很疼」的工程细节。
  actions:
    - theme: brand
      text: 智能阅卷系统
      link: /projects/smart-grading
    - theme: alt
      text: AI 绘本工作台
      link: /projects/storycast

features:
  - icon: 🧠
    title: 多 Agent 编排
    details: 用 LangGraph 把复杂流程拆成可观测、可恢复的状态机：Send 并发、checkpoint 续跑、人工复核介入。
  - icon: 📚
    title: RAG 与知识工程
    details: 关注切分、召回、重排、引用溯源的完整链路，让答案可解释，而不是把资料一股脑塞进上下文。
  - icon: 🎨
    title: 多模态 AIGC
    details: 文本、图像、视频模型串成产品链路，用任务队列、幂等缓存与降级策略处理异步与失败。
---

<div class="home-section">
  <div class="home-section__head">
    <h2>最新文章</h2>
    <a href="./projects/">全部项目 →</a>
  </div>
  <div class="post-grid">
    <a class="post-card" href="./projects/smart-grading">
      <div class="post-card__tags"><span>LangGraph</span><span>多智能体</span></div>
      <h3>LangGraph 多 Agent 编排实战：构建智能阅卷与学情分析系统</h3>
      <p>把「逐题批改」拆成可并行的智能体，教师只复核没把握的题；附 Mock 客户端测试与格式修复方案。</p>
      <div class="post-card__meta">2026-11-20 · 约 10 分钟</div>
    </a>
    <a class="post-card" href="./projects/storycast">
      <div class="post-card__tags"><span>可灵 API</span><span>多模态</span></div>
      <h3>从静态到动态：基于可灵 API 的 AI 绘本工作台实战</h3>
      <p>对比骨骼动画、CSS 缓动与图生视频三种方案，讲清动态绘本的选型、异步轮询与降级策略。</p>
      <div class="post-card__meta">2026-11-24 · 约 14 分钟</div>
    </a>
  </div>
</div>
