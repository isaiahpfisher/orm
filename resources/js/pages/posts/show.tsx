import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { home } from '@/routes';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeftIcon } from 'lucide-react';

export default function PostsShow({ post }: { post: any }) {
    return (
        <>
            <Head title={post.title} />
            <div className="mx-auto flex max-w-2xl flex-col p-6">
                <div className="py-12">
                    <Heading
                        title={post.title}
                        description={`${post.author.name} | ${post.category.name}`}
                        actions={
                            <Button asChild variant={'outline'}>
                                <Link href={home()}>
                                    <ChevronLeftIcon />
                                    Go Back
                                </Link>
                            </Button>
                        }
                    />
                    <p className="leading-relaxed">{post.content}</p>
                </div>
            </div>
        </>
    );
}
