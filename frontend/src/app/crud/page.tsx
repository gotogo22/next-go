"use client"

import { useState } from "react"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
}

export default function CrudPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const columns = [
    {
      accessorKey: "title",
      header: "タイトル",
    },
    {
      accessorKey: "description",
      header: "説明",
    },
    {
      accessorKey: "completed",
      header: "完了",
      cell: ({ row }: any) => (
        <div>{row.original.completed ? "完了" : "未完了"}</div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }: any) => {
        const todo = row.original
        return (
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.completed ? "未完了にする" : "完了にする"}
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(todo.id)}
            >
              削除
            </Button>
          </div>
        )
      },
    },
  ]

  const handleAdd = () => {
    if (!title || !description) return
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setTitle("")
    setDescription("")
    setIsOpen(false)
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Todo管理</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>新規作成</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>新しいTodoを作成</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">タイトル</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">説明</Label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Button onClick={handleAdd}>作成</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={todos} />
    </div>
  )
} 
