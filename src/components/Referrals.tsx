import { Quote, Star } from 'lucide-react';
import competitionImage from '@/assets/competition-group.jpeg';
import heroImage from '@/assets/hero-celebration.jpeg';

const testimonials = [
  {
    name: 'Marcus L.',
    title: 'Competitive Strongman',
    quote: 'Since working with this coach, I\'ve added 30kg to my deadlift and finally broke into the podium at nationals. The programming is intelligent and the support is unmatched.',
    achievement: 'National Podium Finish',
    rating: 5,
  },
  {
    name: 'Erik S.',
    title: 'U105 Competitor',
    quote: 'The attention to detail in competition prep is incredible. From peaking to water cutting, everything was planned perfectly. I hit PRs on every event at my last competition.',
    achievement: 'Competition PR Sweep',
    rating: 5,
  },
  {
    name: 'Johan K.',
    title: 'First-Time Competitor',
    quote: 'I came in knowing nothing about competitive strongman. The coaching transformed me from a gym lifter to a confident competitor. Won my first novice competition!',
    achievement: '1st Place Novice',
    rating: 5,
  },
];

const Referrals = () => {
  return (
    <section id="referrals" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Athlete Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            WHAT ATHLETES SAY
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real athletes. Here's what my clients have achieved through dedicated coaching.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Achievement Badge */}
              <div className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                {testimonial.achievement}
              </div>

              {/* Author */}
              <div>
                <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={competitionImage}
              alt="Athletes at competition"
              className="w-full h-64 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-display text-lg font-bold text-foreground">Competition Ready</p>
              <p className="text-sm text-muted-foreground">Training champions together</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={heroImage}
              alt="Victory celebration"
              className="w-full h-64 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-display text-lg font-bold text-foreground">Proven Results</p>
              <p className="text-sm text-muted-foreground">Podium finishes that speak for themselves</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
