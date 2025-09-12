import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import authors from '@/routes/authors';
import { Form, Head, Link } from '@inertiajs/react';
import { ChevronLeftIcon, SaveIcon } from 'lucide-react';

export default function AuthorsCreate() {
    return (
        <AppLayout>
            <Head title="Add Author" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading
                    title="Add Author"
                    description="Labore adipisicing exercitation pariatur ad excepteur eu laboris ex pariatur reprehenderit deserunt laborum ut aliquip amet."
                    actions={
                        <Button asChild variant={"ghost"}>
                            <Link href={authors.index()}>
                                <ChevronLeftIcon />
                                Back
                            </Link>
                        </Button>
                    }
                />

                <Form action={authors.store()} method="post">
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
                                        <Label>Email</Label>
                                        <Input name="email" type="email" />
                                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                    </div>
                                    <div className="grid gap-3">
                                        <Label>Bio</Label>
                                        <Textarea name="bio" rows={5} />
                                        {errors.bio && <p className="text-xs text-red-500">{errors.bio}</p>}
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
