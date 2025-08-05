import { Sparkles, BookOpen, Heart } from "lucide-react";
//import heroImage from "@/assets/hero-magical-books.jpg";
import "../styling/Hero.scss"
const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">

                <div className="hero-overlay" />
            </div>

            <div className="hero-sparkles">
                <Sparkles className="sparkle sparkle-1" />
                <Sparkles className="sparkle sparkle-2" />
                <Sparkles className="sparkle sparkle-3" />
            </div>

            <div className="hero-content">
                <div className="hero-grid">
                    <div className="hero-text">
                        <div className="welcome-banner">
                            <Heart />
                            <span>Welcome to MyLore</span>
                        </div>

                        <h1>
                            <span className="gradient-text">✨ Your Next Adventure</span>
                            <br />
                            <span>Starts Here</span>
                        </h1>

                        <p>
                            Step into a world where every story is uniquely yours. Choose your favorite genre,
                            add your personal touch, and let me craft an enchanting tale.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn-primary">
                                <BookOpen />
                                Start My Story
                            </button>
                            <button className="btn-secondary">How It Works</button>
                        </div>

                        <div className="hero-highlights">
                            <div><span className="dot dot-1" /> Personalized for you</div>
                            <div><span className="dot dot-2" /> Chapter by chapter</div>
                            <div><span className="dot dot-3" /> Endless possibilities</div>
                        </div>
                    </div>

                    <div className="hero-card">
                        <div>
                            <div className="card-header">
                                <BookOpen />
                                <h3>Ready to begin?</h3>
                            </div>
                            <p>"Once upon a time, in a world crafted just for you..."</p>
                            <div className="card-dots">
                                <span className="dot dot-1" />
                                <span className="dot dot-2" />
                                <span className="dot dot-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
