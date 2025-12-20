import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Program Only',
    price: '149',
    period: '/month',
    description: 'Custom programming delivered monthly with adjustments based on your feedback.',
    features: [
      'Personalized training program',
      'Monthly program updates',
      'Exercise demonstration videos',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Full Coaching',
    price: '299',
    period: '/month',
    description: 'Complete coaching experience with weekly check-ins and direct communication.',
    features: [
      'Everything in Program Only',
      'Weekly video form reviews',
      'Direct messaging access',
      'Nutrition guidance',
      'Competition prep support',
      'Priority response time',
    ],
    cta: 'Apply Now',
    popular: true,
  },
  {
    name: 'Competition Elite',
    price: '449',
    period: '/month',
    description: 'Premium coaching for serious competitors with comprehensive support.',
    features: [
      'Everything in Full Coaching',
      'Bi-weekly video calls',
      'Event-specific programming',
      'Meet day coaching (virtual)',
      'Recovery & mobility protocols',
      'Supplement recommendations',
    ],
    cta: 'Apply Now',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Pricing
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            INVEST IN YOUR STRENGTH
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include an initial consultation 
            to ensure we're the right fit.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-lg p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'border-primary shadow-[0_0_40px_hsl(24_95%_53%/0.2)] scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-display uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? 'default' : 'outline'}
                className="w-full"
                asChild
              >
                <a href="#cta">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          All prices in USD. 3-month minimum commitment recommended for best results.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
