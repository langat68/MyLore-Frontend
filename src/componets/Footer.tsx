import { Sparkles, Mail, Twitter, Instagram, Facebook } from "lucide-react";
import "../styling/Footer.scss"

const Footer = () => {
    const socialLinks = [
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Mail, href: "#", label: "Email" },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
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
                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} MyLore. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
