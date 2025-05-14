'use client'

import React, { useEffect } from 'react'

/* ─────────────── ① 型宣言（window 直下に注入される） ─────────────── */
declare global {
  interface Window {
    SwaggerUIBundle: any
    SwaggerUIStandalonePreset: any
  }
}

/* ──────────────────────────── React コンポーネント ──────────────────────────── */
export default function ApiDocs() {
  useEffect(() => {
    /* -------- ヘルパ: <script> / <link> を動的ロードし Promise で待つ -------- */
    const loadScript = (src: string) =>
      new Promise<void>((res, rej) => {
        const s = document.createElement('script')
        s.src = src
        s.async = true
        s.onload = () => res()
        s.onerror = () => rej(new Error(`failed to load ${src}`))
        document.body.appendChild(s)
      })

    const loadCss = (href: string) => {
      const l = document.createElement('link')
      l.rel = 'stylesheet'
      l.href = href
      document.head.appendChild(l)
    }

    /* ---------------------------- メイン処理 ---------------------------- */
    ;(async () => {
      try {
        // 1. CSS
        loadCss('https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css')

        // 2. OpenAPI spec を取得
        const spec = await fetch('/api/swagger.json').then(r => r.json())

        // 3. JS を 2 本ロード（Bundle + StandalonePreset）
        await loadScript('https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js')
        await loadScript('https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-standalone-preset.js')

        // 4. Swagger‑UI 初期化
        window.SwaggerUIBundle({
          spec,
          dom_id: '#swagger-ui',
          deepLinking: true,
          presets: [
            window.SwaggerUIBundle.presets.apis,
            window.SwaggerUIStandalonePreset,      // タグ開閉等の UI プラグイン
          ],
          layout: 'StandaloneLayout', 
          docExpansion: 'list',
          defaultModelsExpandDepth: 1,
          defaultModelExpandDepth: 1,
          displayRequestDuration: true,
          supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
        })

        /* ---- (任意) Topbar を消したい場合だけ CSS で非表示 ---- */
        const style = document.createElement('style')
        style.textContent = `
        /* 展開中タグの sticky を完全オフ */
        .swagger-ui .opblock-tag-section.is-open h4 {
            position: static !important;
            top: auto       !important;
            z-index: auto   !important;
        }
        `
        document.head.appendChild(style)
      } catch (e) {
        console.error('Swagger UI 初期化エラー', e)
        const el = document.getElementById('swagger-ui')
        if (el) el.innerHTML = '<p class="text-red-600">Swagger UI の読み込みに失敗しました。</p>'
      }
    })()

    /* ------- アンマウント時に Swagger‑UI DOM をクリアする ------- */
    return () => {
      const el = document.getElementById('swagger-ui')
      if (el) el.innerHTML = ''
    }
  }, [])

  /* ---------------------------- JSX ---------------------------- */
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">API ドキュメント</h1>
      <div id="swagger-ui" />
    </div>
  )
}
