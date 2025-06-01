import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

// ブログ記事の型定義
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

// 静的データ（実際のプロジェクトではAPIやCMSから取得）
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js 14でSSGを活用した高速なブログシステムの構築',
    slug: 'nextjs-14-ssg-blog-system',
    excerpt: 'Next.js 14の新機能を使って、パフォーマンスに優れた静的サイト生成によるブログシステムの作り方を解説します。',
    content: '',
    publishedAt: '2024-01-15',
    category: 'Tech',
    tags: ['Next.js', 'SSG', 'React'],
    author: {
      name: '開発者太郎',
      avatar: '/avatars/developer.jpg'
    }
  },
  {
    id: '2',
    title: 'Tailwind CSSでモダンなUIコンポーネントを作成する',
    slug: 'tailwind-css-modern-ui-components',
    excerpt: 'Tailwind CSSを使用して、再利用可能で美しいUIコンポーネントライブラリを構築する方法をステップバイステップで説明します。',
    content: '',
    publishedAt: '2024-01-10',
    category: 'Design',
    tags: ['Tailwind CSS', 'UI/UX', 'CSS'],
    author: {
      name: 'デザイナー花子',
      avatar: '/avatars/designer.jpg'
    }
  },
  {
    id: '3',
    title: 'Go言語でRESTful APIの設計と実装',
    slug: 'golang-restful-api-design',
    excerpt: 'Go言語を使用してスケーラブルで保守性の高いRESTful APIを設計・実装するためのベストプラクティスを紹介します。',
    content: '',
    publishedAt: '2024-01-05',
    category: 'Backend',
    tags: ['Go', 'API', 'REST'],
    author: {
      name: 'バックエンド次郎',
      avatar: '/avatars/backend.jpg'
    }
  }
];

// メタデータの生成（静的生成時に実行）
export const metadata: Metadata = {
  title: 'ブログ一覧 | Tech Blog',
  description: '最新の技術記事やプログラミングに関する情報をお届けします。Next.js、React、Go言語などの記事を掲載中。',
  keywords: ['ブログ', 'プログラミング', 'Next.js', 'React', 'Go言語', 'Web開発'],
  openGraph: {
    title: 'ブログ一覧 | Tech Blog',
    description: '最新の技術記事やプログラミングに関する情報をお届けします。',
    type: 'website',
  },
};

// ブログデータを取得する関数（ビルド時に実行）
async function getBlogPosts(): Promise<BlogPost[]> {
  // 実際のプロジェクトでは外部APIやCMSからデータを取得
  // 例: const response = await fetch('https://api.example.com/posts', { cache: 'force-cache' });
  
  // ここでは静的データを返す
  return blogPosts;
}

export default async function BlogPage() {
  // ビルド時にデータを取得（SSG）
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダー部分 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Tech Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          最新の技術記事やプログラミングに関する情報をお届けします
        </p>
      </div>

      {/* ブログ記事一覧 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <time className="text-sm text-gray-500">
                  {formatDate(post.publishedAt)}
                </time>
              </div>
              <CardTitle className="line-clamp-2">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{post.author.name}</span>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 