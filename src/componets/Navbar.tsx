import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Genres", href: "#genres" },
        { name: "My Stories", href: "#my-stories" },
    ];

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <div className="logo">
                        <Sparkles />
                        <span className="brand-text">MyLore</span>
                    </div>

                    <div className="nav-links-desktop">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href}>
                                {link.name}
                            </a>
                        ))}
                        <button className="start-story-btn">Start Story</button>
                    </div>

                    <div className="nav-mobile-toggle">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="nav-links-mobile">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                        <button className="start-story-btn-mobile">Start Story</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
