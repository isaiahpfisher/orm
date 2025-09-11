import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { login, register } from '@/routes';
import postRoutes from '@/routes/posts';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { EyeIcon, LockIcon } from 'lucide-react';

export default function Home({ posts }: { posts: any[] }) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="ORM Blog">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="mx-auto flex max-w-5xl flex-col p-6">
                <div className="py-12">
                    <Heading
                        title="ORM Blog"
                        description="Labore adipisicing exercitation pariatur ad excepteur eu laboris ex pariatur."
                        actions={
                            <nav className="flex items-center justify-end gap-4">
                                {auth.user ? (
                                    <Button asChild variant={'outline'}>
                                        <Link href={postRoutes.index()}>
                                            <LockIcon />
                                            Admin
                                        </Link>
                                    </Button>
                                ) : (
                                    <>
                                        <Button asChild>
                                            <Link href={login()}>Log in</Link>
                                        </Button>
                                        <Button asChild variant={'outline'}>
                                            <Link href={register()}>Register</Link>
                                        </Button>
                                    </>
                                )}
                                <AppearanceToggleDropdown />
                            </nav>
                        }
                    />
                    <div className="space-y-6">
                        {posts.map((post) => (
                            <Card key={post.id}>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <CardTitle>{post.title}</CardTitle>
                                            <CardDescription>
                                                {post.category.name}
                                                <span className="mx-1"> | </span>
                                                {post.author.name}
                                            </CardDescription>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button asChild size={'sm'} variant={'outline'}>
                                                <Link href={postRoutes.show(post.id)}>
                                                    <EyeIcon />
                                                    Read
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
            </div>
        </>
    );
}
