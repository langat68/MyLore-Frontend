import { BookOpen, Heart, Headphones, Save } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            icon: BookOpen,
            title: "Pick Your Genre",
            description: "Choose from magical fantasy, thrilling sci-fi, heartwarming romance...",
            colorClass: "icon-magical"
        },
        {
            icon: Heart,
            title: "Personalize Your Story",
            description: "Add your name, choose themes, and make it yours.",
            colorClass: "icon-warm"
        },
        {
            icon: Headphones,
            title: "Listen & Immerse",
            description: "Enjoy your story chapter by chapter, beautifully narrated.",
            colorClass: "icon-accent"
        },
        {
            icon: Save,
            title: "Save & Share",
            description: "Keep and share your favorite stories with others.",
            colorClass: "icon-primary"
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works-section">
            <div className="how-it-works-content">
                <h2 className="section-title">How the Magic Works</h2>
                <p className="section-subtitle">
                    Creating your perfect story is as easy as 1, 2, 3, 4!
                </p>

                <div className="steps-grid">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="step-card">
                                {index < steps.length - 1 && (
                                    <div className="connector-line" />
                                )}
                                <div className="step-box">
                                    <div className="step-number">{index + 1}</div>
                                    <div className="step-icon-wrapper">
                                        <div className={`step-icon ${step.colorClass}`}>
                                            <Icon />
                                        </div>
                                    </div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <p className="section-quote">
                    "Every great story begins with a single step into the unknown..." ✨
                </p>
            </div>
        </section>
    );
};

export default HowItWorks;
