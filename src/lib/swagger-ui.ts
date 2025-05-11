/**
 * Swagger UIのHTMLを生成する関数
 * @param spec OpenAPI仕様オブジェクト
 * @returns HTML文字列
 */
export function createSwaggerHTML(spec: any) {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API ドキュメント</title>
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css">
    </head>
    <body>
      <div id="swagger-ui"></div>
      <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js"></script>
      <script>
        window.onload = function() {
          window.ui = SwaggerUIBundle({
            spec: ${JSON.stringify(spec)},
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIBundle.SwaggerUIStandalonePreset
            ],
            layout: "BaseLayout",
            supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
          });
        };
      </script>
    </body>
    </html>
  `;
} 