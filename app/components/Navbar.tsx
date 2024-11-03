'use client'

interface NavbarProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'resume', label: 'Resume' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navItems.map(item => (
                    <li key={item.id}>
                        <button
                            className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => onSectionChange(item.id)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
} 