'use client'

import React, { useEffect } from 'react'

// グローバル型宣言を追加（TypeScript用）
declare global {
  interface Window {
    SwaggerUIBundle: any;
    ui: any;
  }
}

export default function ApiDocs() {
  useEffect(() => {
    // Swagger UIのスクリプトとCSSを動的にロード
    const loadSwaggerUI = async () => {
      try {
        // CSS
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.href = 'https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css'
        document.head.appendChild(link)
        
        // APIドキュメントのJSONを取得
        const response = await fetch('/api/swagger.json')
        const spec = await response.json()
        
        // スクリプトをロード
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js'
        script.onload = () => {
          // SwaggerUIBundle は window.SwaggerUIBundle として利用可能
          const ui = window.SwaggerUIBundle({
            spec: spec,
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
              window.SwaggerUIBundle.presets.apis
            ],
            layout: "BaseLayout",  // StandaloneLayoutからBaseLayoutに戻す
            docExpansion: 'list',
            defaultModelsExpandDepth: 1,
            defaultModelExpandDepth: 1,
            displayOperationId: false,
            displayRequestDuration: true,
            filter: true,
            supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
          })
          window.ui = ui
          
          // 少し遅延してから折りたたみ機能を強化
          setTimeout(() => {
            const headers = document.querySelectorAll('.opblock-tag');
            headers.forEach(header => {
              header.addEventListener('click', function(this: HTMLElement) {
                const content = this.nextElementSibling as HTMLElement;
                if (content.style.display === 'none' || content.style.display === '') {
                  content.style.display = 'block';
                } else {
                  content.style.display = 'none';
                }
              });
            });
          }, 1000);
        }
        document.body.appendChild(script)
      } catch (error) {
        console.error('Swagger UIの読み込みに失敗しました:', error)
        const swaggerEl = document.getElementById('swagger-ui')
        if (swaggerEl) {
          swaggerEl.innerHTML = 
            '<p class="text-red-500">Swagger UIの読み込みに失敗しました。エラーの詳細はコンソールを確認してください。</p>'
        }
      }
    }
    
    loadSwaggerUI()
    
    // クリーンアップ
    return () => {
      const swaggerUI = document.getElementById('swagger-ui')
      if (swaggerUI) {
        swaggerUI.innerHTML = ''
      }
    }
  }, [])
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">API ドキュメント</h1>
      <div id="swagger-ui"></div>
    </div>
  )
} 