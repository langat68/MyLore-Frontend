import { Sparkles, ArrowRight } from "lucide-react";
import "../styling/CallToAction.scss"

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="cta-background" />
            <div className="cta-sparkles">
                <Sparkles className="sparkle sparkle-1" />
                <Sparkles className="sparkle sparkle-2" />
                <Sparkles className="sparkle sparkle-3" />
                <Sparkles className="sparkle sparkle-4" />
            </div>

            <div className="cta-content">
                <h2 className="cta-title">🌈 Ready to Begin Your Lore?</h2>
                <p className="cta-description">
                    Don't wait for magic to find you—create it! Your personalized adventure is just one click away.
                </p>

                <div className="cta-buttons">
                    <button className="btn-primary">
                        <Sparkles />
                        Start My Magical Story
                        <ArrowRight />
                    </button>
                    <button className="btn-secondary">Explore Genres</button>
                </div>

                <p className="cta-quote">"The best stories are the ones we live, and the ones we create." ✨</p>
            </div>
        </section>
    );
};

export default CallToAction;
