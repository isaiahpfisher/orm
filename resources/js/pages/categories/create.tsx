import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import categories from '@/routes/categories';
import { Form, Head, Link } from '@inertiajs/react';
import { ChevronLeftIcon, SaveIcon } from 'lucide-react';

export default function CategoriesCreate() {
    return (
        <AppLayout>
            <Head title="Add Category" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading
                    title="Add Category"
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

                <Form action={categories.store()} method="post">
                    {({ errors }) => (
                        <>
                            <div className="grid md:grid-cols-3">
                                <div className="col-span-2 flex flex-col gap-6">
                                    <div className="grid gap-3">
                                        <Label>Name</Label>
                                        <Input name="name" />
                                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                    </div>
                                    <div className="grid gap-3">
                                        <Label>Description</Label>
                                        <Textarea name="description" rows={5} />
                                        {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
                                    </div>
                                </div>
                            </div>
                            <Button className="mt-6">
                                <SaveIcon />
                                Save
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
