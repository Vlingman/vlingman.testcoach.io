import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import atlasImage from '@/assets/atlas-stone.jpeg';
import deadliftImage from '@/assets/deadlift.jpeg';
import dumbbellImage from '@/assets/dumbbell-press.jpeg';

const services = [
  {
    title: 'Competition Prep',
    description: 'Complete preparation for your next strongman competition with periodized programming and event-specific training.',
    image: atlasImage,
    features: [
      'Custom periodized program',
      'Event technique coaching',
      'Peak week strategy',
      'Competition day game plan',
    ],
  },
  {
    title: 'Strength Building',
    description: 'Build raw strength and muscle with proven powerbuilding methods tailored to your goals.',
    image: deadliftImage,
    features: [
      'Progressive overload programming',
      'Accessory work selection',
      'Form and technique feedback',
      'Regular program adjustments',
    ],
  },
  {
    title: '1-on-1 Coaching',
    description: 'Personal attention and weekly check-ins to keep you accountable and progressing.',
    image: dumbbellImage,
    features: [
      'Weekly video reviews',
      'Direct messaging access',
      'Nutrition guidance',
      'Competition strategy',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary uppercase tracking-[0.3em] text-sm mb-4">
            What I Offer
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            TRAINING PROGRAMS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're a beginner looking to get stronger or a competitive athlete chasing titles, 
            I have a program designed for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(24_95%_53%/0.1)]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group/btn" asChild>
                  <a href="#pricing">
                    View Pricing
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
