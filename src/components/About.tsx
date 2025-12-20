import { Trophy, Medal, Target, Dumbbell } from 'lucide-react';
import aboutImage from '@/assets/victory-pose.jpeg';
import podiumImage from '@/assets/podium.jpeg';

const accomplishments = [
  { icon: Trophy, title: '1st Place', description: 'Swedish National Championships' },
  { icon: Medal, title: 'Top 10', description: 'Official Strongman Games 2025' },
  { icon: Target, title: 'Multiple Wins', description: 'Regional & International Events' },
  { icon: Dumbbell, title: '5+ Years', description: 'Competitive Experience' },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary uppercase tracking-[0.3em] text-sm mb-4">
            About Me
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            COMPETITION-TESTED COACHING
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={aboutImage}
                alt="Victory celebration at strongman competition"
                className="w-full h-[500px] object-cover object-top rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 hidden md:block">
              <img
                src={podiumImage}
                alt="First place on podium"
                className="w-full h-full object-cover rounded-lg border-4 border-background shadow-xl"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-lg hidden md:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              From Athlete to Coach
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a competitive strongman athlete, I've experienced firsthand what it takes to 
                stand on the podium. From grueling training cycles to the pressure of competition 
                day, I understand the physical and mental demands of the sport.
              </p>
              <p>
                My approach combines proven training methodologies with individualized programming. 
                Whether you're preparing for your first competition or chasing a national title, 
                I'll help you build the strength, technique, and mindset to succeed.
              </p>
              <p>
                I believe in sustainable progress, smart training, and building athletes who 
                perform when it matters most.
              </p>
            </div>

            {/* Accomplishments Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {accomplishments.map((item, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-primary mb-2" />
                  <p className="font-display font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
