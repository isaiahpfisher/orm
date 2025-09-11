import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import authors from '@/routes/authors';
import categories from '@/routes/categories';
import posts from '@/routes/posts';
import { Form, Head, Link } from '@inertiajs/react';
import { ChevronLeftIcon, EyeIcon, Loader2, PencilIcon, SaveIcon, Trash2Icon } from 'lucide-react';

export default function CategoriesEdit({ category }: { category: any }) {
    return (
        <AppLayout>
            <Head title={category.name} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading
                    title={category.name}
                    description="Labore adipisicing exercitation pariatur ad excepteur eu laboris ex pariatur reprehenderit deserunt laborum ut aliquip amet."
                    actions={
                        <Button asChild variant={'ghost'}>
                            <Link href={categories.index()}>
                                <ChevronLeftIcon />
                                Back
                            </Link>
                        </Button>
                    }
                />

                <div className="grid grid-cols-3 gap-12">
                    <div className="col-span-2 space-y-6">
                        {category.posts.length > 0 ? (
                            category.posts.map((post: any) => (
                                <Card key={post.id}>
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
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
                                                    <Link href={posts.edit(post.id)}>
                                                        <EyeIcon />
                                                        View
                                                    </Link>
                                                </Button>
                                                <Button asChild size={'sm'} variant={'destructive'}>
                                                    <Link href={posts.destroy(post.id)}>
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
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-8 p-24">
                                <p className="text-lg">There's nothing here yet.</p>
                                <Button asChild variant={'outline'}>
                                    <Link href={posts.create()}>
                                        <PencilIcon />
                                        Write New Post
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle>Edit Category</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form action={categories.update(category.id)} method="patch">
                                {({ errors, processing }) => (
                                    <>
                                        <div className="col-span-2 flex flex-col gap-6">
                                            <div className="grid gap-3">
                                                <Label>Name</Label>
                                                <Input name="name" defaultValue={category.name} />
                                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                            </div>
                                            <div className="grid gap-3">
                                                <Label>Description</Label>
                                                <Textarea name="description" rows={5} defaultValue={category.description} />
                                                {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
                                            </div>
                                        </div>
                                        <Button className="mt-6 w-full" disabled={processing}>
                                            {processing ? <Loader2 className="animate-spin" /> : <SaveIcon />}
                                            Save Changes
                                        </Button>
                                    </>
                                )}
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
