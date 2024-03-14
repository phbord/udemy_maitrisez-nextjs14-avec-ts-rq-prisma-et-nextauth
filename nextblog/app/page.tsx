'use client'

import PageContainer from "@/components/page-container";
import PostsList from "@/components/posts-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Category } from "@/types";
import { CATEGORIES } from "@/utils/categories";
import { POSTS } from "@/utils/posts";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <PageContainer>
      <div className="py-10 px-4">
        {/* 1st section */}
        <div 
          style={{backgroundImage: "url(/img/hero.jpeg)"}} 
          className="rounded-lg aspect-square md: aspect[2.4/1] overflow-hidden bg-cover">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
                <h1 className="text-center font-bold tex-3xl sm:text-5xl text-black dark:text-white">
                  Become a better react developper
                </h1>
                <Input type="email" placeholder="Email" className="dark:bg-white mt-4" />
                <Button size="lg" className="w-full py-6 text-xl mt-4">
                  Subscribe to our Newsletter
                </Button>
              </div>
            </div>
          </div>
      </div>
      {/* 2nd section : Categories */}
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
        {CATEGORIES.map((category: Category) => (
          <Button variant="outline" key={category.id}>
            <Link href={`/categories/${category.slug}`}>
              {category.name}
            </Link>
          </Button>
        ))}
      </div>
      {/* 3rd section : Posts */}
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <PostsList posts={POSTS} />
      </div>
    </PageContainer>
  );
}
