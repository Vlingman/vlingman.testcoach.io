import { Gift, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Referrals = () => {
  return (
    <section id="referrals" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="font-display text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Referral Program
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              SHARE THE STRENGTH
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {/* Referral Card */}
          <div className="bg-card rounded-lg p-8 md:p-12 border border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Earn Free Training
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Know someone who would benefit from coaching? Refer them to me, and when they 
                  sign up, you'll both receive a month of free coaching. It's my way of thanking 
                  you for spreading the word.
                </p>
                <Button asChild>
                  <a href="#cta">
                    Refer a Friend
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Benefits */}
              <div className="bg-secondary/50 rounded-lg p-6">
                <h4 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  How It Works
                </h4>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="font-display text-xl font-bold text-primary">01</span>
                    <div>
                      <p className="font-semibold text-foreground">Share Your Link</p>
                      <p className="text-sm text-muted-foreground">Send your unique referral link to friends</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-display text-xl font-bold text-primary">02</span>
                    <div>
                      <p className="font-semibold text-foreground">They Sign Up</p>
                      <p className="text-sm text-muted-foreground">Your friend joins any coaching program</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-display text-xl font-bold text-primary">03</span>
                    <div>
                      <p className="font-semibold text-foreground">You Both Win</p>
                      <p className="text-sm text-muted-foreground">1 free month for you, 1 free month for them</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
