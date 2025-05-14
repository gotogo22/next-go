import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

export async function GET() {
  // openapi.yamlの絶対パスを取得
  const filePath = path.join(process.cwd(), 'openapi.yaml')
  // ファイルを読み込む
  const file = fs.readFileSync(filePath, 'utf8')
  // YAMLをパースしてJSONに変換
  const spec = YAML.parse(file)
  return NextResponse.json(spec)
}