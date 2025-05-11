'use client'

import React, { useEffect } from 'react'

export default function ApiDocs() {
  useEffect(() => {
    // Swagger UIのスクリプトとCSSを動的にロード
    const loadSwaggerUI = async () => {
      // CSS
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css'
      document.head.appendChild(link)
      
      // APIドキュメントのJSONを取得
      const response = await fetch('/api/swagger.json')
      const spec = await response.json()
      
      // コンテナを作成
      const container = document.getElementById('swagger-ui')
      
      // スクリプトをロード
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js'
      script.onload = () => {
        // @ts-ignore
        window.ui = SwaggerUIBundle({
          spec: spec,
          dom_id: '#swagger-ui',
          deepLinking: true,
          presets: [
            // @ts-ignore
            SwaggerUIBundle.presets.apis,
            // @ts-ignore
            SwaggerUIBundle.SwaggerUIStandalonePreset
          ],
          layout: "BaseLayout",
          supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
        })
      }
      document.body.appendChild(script)
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