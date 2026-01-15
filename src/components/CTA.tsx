import { Calendar, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import groupImage from '@/assets/competition-group.jpeg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const CTA = () => {
  const {
    ref: contentRef,
    isVisible: contentVisible
  } = useScrollAnimation();
  const parallaxOffset = useParallax(0.3);

  return (
    <section id="cta" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img 
          src={groupImage} 
          alt="Strongman competition podium with athletes" 
          className="w-full h-[120%] object-cover object-center" 
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div 
          ref={contentRef} 
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <p className="font-display text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">
            Ready to Start?
          </p>
          <h2 className="font-display text-2xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            LET'S BUILD YOUR
            <span className="block text-primary">STRONGEST SELF</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 text-center px-2">
            Take the first step toward your strength goals. Fill out my athlete questionnaire or book a free 30-minute consultation.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} 
            style={{ transitionDelay: '200ms' }}
          >
            <Button variant="hero" size="xl" asChild className="hover-lift group">
              <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/tEyy1wjvDCQ73Dee8">
                <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:scale-110" />
                Athlete Questionnaire
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="hover-lift group">
              <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/Kdiu6SZuNsnhBLdb6">
                <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:scale-110" />
                Book Free Consultation
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className={`flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} 
            style={{ transitionDelay: '400ms' }}
          >
            <span className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              No commitment
            </span>
            <span className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              30-minute call
            </span>
            <span className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              100% free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
