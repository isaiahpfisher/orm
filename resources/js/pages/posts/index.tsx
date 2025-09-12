import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import authors from '@/routes/authors';
import categories from '@/routes/categories';
import postRoutes from '@/routes/posts';
import { Head, Link } from '@inertiajs/react';
import { EyeIcon, PencilIcon, Trash2Icon } from 'lucide-react';

export default function PostsIndex({ posts }: { posts: any[] }) {
    return (
        <AppLayout>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading
                    title="Posts"
                    description="Labore adipisicing exercitation pariatur ad excepteur eu laboris ex pariatur reprehenderit deserunt laborum ut aliquip amet."
                    actions={
                        <Button asChild>
                            <Link href={postRoutes.create()}>
                                <PencilIcon />
                                Write Post
                            </Link>
                        </Button>
                    }
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {posts.map((post) => (
                        <Card key={post.id}>
                            <CardHeader>
                                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                                    <div>
                                        <CardTitle>{post.title}</CardTitle>
                                        <CardDescription>
                                            <Link href={categories.edit(post.category.id)}>{post.category.name}</Link>
                                            <span className="mx-1"> | </span>
                                            <Link href={authors.edit(post.author.id)}>{post.author.name}</Link>
                                        </CardDescription>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button asChild size={'sm'} variant={'outline'}>
                                            <Link href={postRoutes.edit(post.id)}>
                                                <EyeIcon />
                                                View
                                            </Link>
                                        </Button>
                                        <Button asChild size={'sm'} variant={'destructive'}>
                                            <Link href={postRoutes.destroy(post.id)}>
                                                <Trash2Icon />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-5">{post.content}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
