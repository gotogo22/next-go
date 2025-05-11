export const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'ビデオ管理API',
    version: '1.0.0',
    description: 'ビデオの管理を行うためのAPI仕様',
  },
  servers: [
    {
      url: '/api',
      description: 'APIサーバー',
    },
  ],
  paths: {
    '/videos': {
      get: {
        summary: 'ビデオ一覧の取得',
        description: '全てのビデオを取得します。キーワードによる検索も可能です。',
        parameters: [
          {
            name: 'keyword',
            in: 'query',
            description: '検索キーワード（タイトル、アップローダー、説明文から検索）',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '成功',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Video',
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: '新規ビデオの追加',
        description: '新しいビデオを追加します。',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/VideoInput',
              },
            },
          },
        },
        responses: {
          '201': {
            description: '作成成功',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Video',
                },
              },
            },
          },
          '400': {
            description: 'リクエストの形式が無効',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
    '/videos/{id}': {
      get: {
        summary: '特定のビデオを取得',
        description: '指定されたIDのビデオを取得します。',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ビデオID',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '成功',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Video',
                },
              },
            },
          },
          '404': {
            description: 'ビデオが見つかりません',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
      put: {
        summary: 'ビデオの更新',
        description: '指定されたIDのビデオ情報を更新します。',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ビデオID',
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/VideoInput',
              },
            },
          },
        },
        responses: {
          '200': {
            description: '更新成功',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Video',
                },
              },
            },
          },
          '400': {
            description: 'リクエストの形式が無効',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
          '404': {
            description: 'ビデオが見つかりません',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
      delete: {
        summary: 'ビデオの削除',
        description: '指定されたIDのビデオを削除します。',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ビデオID',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: '削除成功',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Video',
                },
              },
            },
          },
          '404': {
            description: 'ビデオが見つかりません',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Video: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'ビデオID',
          },
          title: {
            type: 'string',
            description: 'ビデオタイトル',
          },
          url: {
            type: 'string',
            description: 'ビデオのURL',
          },
          thumbnail: {
            type: 'string',
            description: 'サムネイル画像のURL',
          },
          uploader: {
            type: 'string',
            description: 'アップローダー名',
          },
          uploadedAt: {
            type: 'string',
            format: 'date',
            description: 'アップロード日（YYYY-MM-DD形式）',
          },
          description: {
            type: 'string',
            description: 'ビデオの説明文',
          },
        },
        required: ['id', 'title', 'url', 'thumbnail', 'uploader', 'uploadedAt'],
      },
      VideoInput: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'ビデオタイトル',
          },
          url: {
            type: 'string',
            description: 'ビデオのURL',
          },
          thumbnail: {
            type: 'string',
            description: 'サムネイル画像のURL',
          },
          uploader: {
            type: 'string',
            description: 'アップローダー名',
          },
          description: {
            type: 'string',
            description: 'ビデオの説明文',
          },
        },
        required: ['title', 'url', 'thumbnail', 'uploader'],
      },
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'エラーメッセージ',
          },
        },
        required: ['error'],
      },
    },
  },
}; 