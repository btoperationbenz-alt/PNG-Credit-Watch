import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: "1",
        title: "Understanding Credit Scores in PNG",
        description: "A deep dive into how credit scoring works in Papua New Guinea and how you can improve yours.",
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "finance chart",
        date: "October 26, 2024",
        author: "Admin"
    },
    {
        id: "2",
        title: "5 Tips for Managing Your First Personal Loan",
        description: "Getting your first loan is a big step. Here are five essential tips to manage it responsibly.",
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "person planning",
        date: "October 22, 2024",
        author: "Admin"
    },
    {
        id: "3",
        title: "Business Loans vs. Personal Loans: What's the Difference?",
        description: "Choosing the right type of financing is crucial for your success. We break down the key differences.",
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "small business",
        date: "October 18, 2024",
        author: "Admin"
    }
]


export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20">
       <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Blog</h1>
        <p className="text-lg text-muted-foreground mt-2">Insights and updates from our team of financial experts.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
            <Card key={post.id} className="flex flex-col overflow-hidden">
                <CardHeader className="p-0">
                     <div className="relative h-48 w-full">
                        <Image 
                            src={post.imageUrl} 
                            alt={post.title} 
                            layout="fill" 
                            objectFit="cover"
                            data-ai-hint={post.imageHint}
                        />
                     </div>
                </CardHeader>
                <CardContent className="p-6 flex-1">
                    <CardTitle className="text-xl mb-2 font-headline">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                        <span>{post.date}</span> by <span>{post.author}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                        <Link href="#">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
}
