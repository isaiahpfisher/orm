import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import authorsRoutes from '@/routes/authors';
import { Head, Link } from '@inertiajs/react';
import { EyeIcon, Trash2Icon, UserPlusIcon } from 'lucide-react';

export default function AuthorsIndex({ authors }: { authors: any[] }) {
    return (
        <AppLayout>
            <Head title="Authors" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading
                    title="Authors"
                    description="Labore adipisicing exercitation pariatur ad excepteur eu laboris ex pariatur reprehenderit deserunt laborum ut aliquip amet."
                    actions={
                        <Button asChild>
                            <Link href={authorsRoutes.create()}>
                                <UserPlusIcon />
                                New Author
                            </Link>
                        </Button>
                    }
                />
                <div className="grid gap-6 md:grid-cols-2">
                    {authors.map((author) => (
                        <Card key={author.id}>
                            <CardHeader>
                                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                                    <div>
                                        <CardTitle>{author.name}</CardTitle>
                                        <CardDescription>{author.email}</CardDescription>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button asChild size={'sm'} variant={'outline'}>
                                            <Link href={authorsRoutes.edit(author.id)}>
                                                <EyeIcon />
                                                View
                                            </Link>
                                        </Button>
                                        <Button asChild size={'sm'} variant={'destructive'}>
                                            <Link href={authorsRoutes.destroy(author.id)}>
                                                <Trash2Icon />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>{author.bio}</CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
