"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { Button, buttonVariants } from "@/components/ui/Button";

import Image from "next/image";
import Link from "next/link";
import { content } from "@/components/content";
import TextRevealByWord from "@/components/TextReavel";

import {
  ArrowDownToLine,
  ArrowRight,
  Github,
  Twitter,
  LeafIcon,
  Instagram,
} from 'lucide-react'
import { Powered } from "@/components/powered";
import  Testimonials  from "@/components/Testinomals";
import { OpenSource } from "@/components/Open-source";
import { motion } from "framer-motion";

import { Info } from "@/components/info";
import VideoCard from "@/components/VideoCard";
import { Video } from "@/types/video";

// featuresをローカル変数に変更（exportを削除）
const features = [
  {
    title: "Save Your Knowledge",
    description:
      "Capture, organize, and utilize your knowledge effortlessly with Cow Templates.",
    link: "/",
    Icon: ArrowDownToLine,
  },
  {
    title: "Quick Setup",
    description:
      "Get started in minutes! Cow Templates makes it easy to save whatever you want.",
    link: "/",
    Icon: LeafIcon,
  },
  {
    title: "Secure Tracking",
    description:
      "Track SSL certificates and domains for ultimate security and peace of mind.",
    link: "/",
    Icon: ArrowRight,
  },
  {
    title: "Customizable Experience",
    description:
      "Tailor Cow Templates to your needs and preferences for a personalized experience.",
    link: "/",
    Icon: LeafIcon,
  },
  {
    title: "Collaboration Tools",
    description:
      "Work together seamlessly with team members using Cow Templates' collaboration features.",
    link: "/",
    Icon: Github,
  },
  {
    title: "Intuitive Interface",
    description:
      "Enjoy a user-friendly interface designed to simplify your workflow and increase productivity.",
    link: "/",
    Icon: Instagram,
  },
];

// 仮データ
const videos: Video[] = [
  {
    id: "1",
    title: "サンプル動画1",
    url: "/videos/sample1.mp4",
    thumbnail: "/images/wich.jpg",
    uploader: "管理者A",
    uploadedAt: "2024-06-01",
    description: "サンプル動画の説明1",
  },
  {
    id: "2",
    title: "サンプル動画2",
    url: "/videos/sample2.mp4",
    thumbnail: "/images/tatsumaki.jpg",
    uploader: "管理者B",
    uploadedAt: "2024-06-02",
    description: "サンプル動画の説明2",
  },
];

export default function Home({ searchParams }: { searchParams?: { keyword?: string } }) {
  const keyword = searchParams?.keyword || "";
  const filtered = videos.filter(v =>
    v.title.includes(keyword) ||
    v.uploader.includes(keyword) ||
    v.description?.includes(keyword)
  );
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">動画一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500">該当する動画がありません</div>
        )}
      </div>
    </main>
  );
}
