import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import categoryRoutes from '@/routes/categories';
import { Head, Link } from '@inertiajs/react';
import { EyeIcon, PlusIcon, Trash2Icon } from 'lucide-react';

export default function CategoriesIndex({ categories }: { categories: any[] }) {
    return (
        <AppLayout>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading
                    title="Categories"
                    description="Labore adipisicing exercitation pariatur ad excepteur eu laboris ex pariatur reprehenderit deserunt laborum ut aliquip amet."
                    actions={
                        <Button asChild>
                            <Link href={categoryRoutes.create()}>
                                <PlusIcon />
                                New Category
                            </Link>
                        </Button>
                    }
                />
                <div className="grid grid-cols-2 gap-6">
                    {categories.map((category) => (
                        <Card key={category.id}>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>{category.name}</CardTitle>
                                    <div className="flex gap-2">
                                        <Button asChild size={'sm'} variant={'outline'}>
                                            <Link href={categoryRoutes.edit(category.id)}>
                                                <EyeIcon />
                                                View
                                            </Link>
                                        </Button>
                                        <Button asChild size={'sm'} variant={'destructive'}>
                                            <Link href={categoryRoutes.destroy(category.id)}>
                                                <Trash2Icon />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>{category.description}</CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
