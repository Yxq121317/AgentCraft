---
title: 项目实战
description: 智能阅卷系统与 AI 绘本工作台：从架构设计到降级策略的完整复盘
---

# 项目实战

两个从 0 到 1 落地的大模型应用。比起「用了什么模型」，这里更想写清楚：**为什么这样设计、哪里会坏、怎么兜底。**

<div class="post-grid">
  <a class="post-card" href="./smart-grading">
    <div class="post-card__tags"><span>LangGraph</span><span>多智能体</span><span>FastAPI</span></div>
    <h3>LangGraph 多 Agent 编排实战：构建智能阅卷与学情分析系统</h3>
    <p>用状态图编排逐题批改：Send 并发、置信度路由、教师复核中断，以及一套不依赖真实模型的确定性测试。</p>
    <div class="post-card__meta">smart_grading · 2026-11-20</div>
  </a>
  <a class="post-card" href="./storycast">
    <div class="post-card__tags"><span>可灵 API</span><span>图生视频</span><span>FFmpeg</span></div>
    <h3>从静态到动态：基于可灵 API 的 AI 绘本工作台实战</h3>
    <p>长文本记忆、角色一致性、一键抠图、异步图生视频与合成链路，外加一套「演示绝不挂」的降级方案。</p>
    <div class="post-card__meta">storycast · 2026-11-24</div>
  </a>
</div>

## 阅读建议

- **想看 Agent 怎么编排**：从「智能阅卷」开始，重点看第二节的状态图和第三节的 Mock 测试。
- **想看多模态怎么落地**：直接看「AI 绘本工作台」，第三节的方案对比和第五节降级策略是核心。
- **关心工程化而不是概念**：两篇都尽量给出可运行的代码骨架、失败路径和取舍理由。
