import { Heart, Sparkles, Mail, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
    const footerLinks = {
        company: [
            { name: "About", href: "#about" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "Genres", href: "#genres" },
            { name: "My Stories", href: "#my-stories" },
        ],
        support: [
            { name: "Contact", href: "#contact" },
            { name: "Help Center", href: "#help" },
            { name: "Story Guidelines", href: "#guidelines" },
            { name: "Community", href: "#community" },
        ],
        legal: [
            { name: "Terms of Service", href: "#terms" },
            { name: "Privacy Policy", href: "#privacy" },
            { name: "Cookie Policy", href: "#cookies" },
            { name: "Content Policy", href: "#content" },
        ],
    };

    const socialLinks = [
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Mail, href: "#", label: "Email" },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <Sparkles />
                            <span className="footer-logo-text">MyLore</span>
                        </div>
                        <p className="footer-description">
                            Where every story is uniquely yours. Creating magical, personalized tales that bring joy and wonder to your world.
                        </p>
                        <div className="footer-socials">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a key={index} href={social.href} aria-label={social.label} className="social-icon">
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Support</h4>
                        <ul className="footer-links">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Legal</h4>
                        <ul className="footer-links">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} MyLore. All rights reserved.
                    </p>
                    <p className="footer-credit">
                        <span>Crafted with</span>
                        <Heart />
                        <span>by MyLore – where every story is yours</span>
                        <Sparkles />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
