export interface SectionProps {
    className?: string;
}

export interface NavbarProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

export interface SidebarProps {
    className?: string;
} 