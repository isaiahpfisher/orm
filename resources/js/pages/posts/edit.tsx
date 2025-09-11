import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import posts from '@/routes/posts';
import { Form, Head } from '@inertiajs/react';
import { SaveIcon } from 'lucide-react';

export default function PostsEdit({ post, authors, categories }: { post: any; authors: any[]; categories: any[] }) {
    return (
        <AppLayout>
            <Head title={post.title} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading
                    title={post.title}
                    description="Labore adipisicing exercitation pariatur ad excepteur eu laboris ex pariatur reprehenderit deserunt laborum ut aliquip amet."
                />

                <Form action={posts.store()} method="post">
                    {({ errors }) => (
                        <>
                            <div className="grid grid-cols-3 gap-12">
                                <div className="col-span-2 flex flex-col gap-6">
                                    <div className="grid gap-3">
                                        <Label>Title</Label>
                                        <Input name="title" defaultValue={post.title} />
                                        {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                                    </div>
                                    <div className="grid gap-3">
                                        <Label>Content</Label>
                                        <Textarea name="content" rows={20} defaultValue={post.content} />
                                        {errors.content && <p className="text-xs text-red-500">{errors.content}</p>}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-3">
                                        <Label>Author</Label>
                                        <Select name="author" defaultValue={post.author.id.toString()}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an author" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {authors.map((author) => (
                                                    <SelectItem key={author.id} value={`${author.id}`}>
                                                        {author.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.author && <p className="text-xs text-red-500">{errors.author}</p>}
                                    </div>
                                    <div className="grid gap-3">
                                        <Label>Category</Label>
                                        <Select name="category" defaultValue={post.category.id.toString()}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem key={category.id} value={`${category.id}`}>
                                                        {category.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.category && <p className="text-xs text-red-500">{errors.category}</p>}
                                    </div>
                                </div>
                            </div>
                            <Button className="mt-6">
                                <SaveIcon />
                                Save Changes
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
