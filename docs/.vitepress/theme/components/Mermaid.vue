<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{ encoded: string }>()

const container = ref<HTMLElement | null>(null)
const { isDark } = useData()
let renderSeq = 0
let mermaidModule: any = null

/** 解码 markdown 插件传入的 base64 图表源码 */
function decode(input: string): string {
  const binary = atob(input)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

/** mermaid 体积较大，只在真正出现图表时按需加载 */
async function loadMermaid() {
  if (!mermaidModule) {
    mermaidModule = (await import('mermaid')).default
  }
  return mermaidModule
}

function themeVariables(dark: boolean) {
  return dark
    ? {
        background: 'transparent',
        primaryColor: '#1e293b',
        primaryBorderColor: '#3b82f6',
        primaryTextColor: '#e2e8f0',
        secondaryColor: '#0f172a',
        tertiaryColor: '#111a2e',
        lineColor: '#64748b',
        textColor: '#e2e8f0',
        mainBkg: '#1e293b',
        nodeBorder: '#3b82f6',
        clusterBkg: 'rgba(30, 41, 59, 0.55)',
        clusterBorder: 'rgba(96, 165, 250, 0.35)',
        edgeLabelBackground: '#0b1020',
        labelBackground: '#0b1020',
        fontFamily: 'var(--vp-font-family-base)',
      }
    : {
        background: 'transparent',
        primaryColor: '#eef2ff',
        primaryBorderColor: '#93c5fd',
        primaryTextColor: '#1e293b',
        secondaryColor: '#e0f2fe',
        tertiaryColor: '#f8fafc',
        lineColor: '#64748b',
        textColor: '#1e293b',
        mainBkg: '#eef2ff',
        nodeBorder: '#93c5fd',
        clusterBkg: 'rgba(241, 245, 251, 0.85)',
        clusterBorder: 'rgba(100, 116, 139, 0.28)',
        edgeLabelBackground: '#ffffff',
        labelBackground: '#ffffff',
        fontFamily: 'var(--vp-font-family-base)',
      }
}

async function renderDiagram() {
  const target = container.value
  if (!target) return

  const mermaid = await loadMermaid()
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: 'base',
    themeVariables: themeVariables(isDark.value),
    flowchart: { curve: 'basis', useMaxWidth: true, padding: 10, nodeSpacing: 34, rankSpacing: 34 },
    sequence: { useMaxWidth: true },
  })

  const id = `mermaid-diagram-${++renderSeq}`
  try {
    const { svg } = await mermaid.render(id, decode(props.encoded))
    target.innerHTML = svg
  } catch (error) {
    target.innerHTML = `<pre class="mermaid-error">图表渲染失败：${String(error)}</pre>`
  }
}

onMounted(renderDiagram)

// 暗黑模式切换时用对应配色重新渲染
watch(isDark, async () => {
  await nextTick()
  renderDiagram()
})
</script>

<template>
  <div ref="container" class="mermaid-diagram" role="img" aria-label="Mermaid 架构图" />
</template>
