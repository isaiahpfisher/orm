import { NavMain } from '@/components/nav-main';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { home } from '@/routes';
import authors from '@/routes/authors';
import categories from '@/routes/categories';
import posts from '@/routes/posts';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { NewspaperIcon, TagsIcon, UsersRoundIcon } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Posts',
        href: posts.index(),
        icon: NewspaperIcon,
    },
    {
        title: 'Authors',
        href: authors.index(),
        icon: UsersRoundIcon,
    },
    {
        title: 'Categories',
        href: categories.index(),
        icon: TagsIcon,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={home()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>
        </Sidebar>
    );
}
