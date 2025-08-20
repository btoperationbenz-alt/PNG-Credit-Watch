import { Building, Users, TrendingUp, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">About PNG Free Credit</h1>
          <p className="text-lg text-muted-foreground mb-6">
            We are dedicated to simplifying Papua New Guinea's financial landscape. Our mission is to empower individuals and businesses by providing clear, accessible, and up-to-date information on credit opportunities.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 text-primary rounded-full">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Purely PNG: The New Wave of Gaming</h3>
                <p className="text-muted-foreground">We exclusively feature the latest online games developed in Papua New Guinea. Dive into a unique and authentic gaming adventure with fresh titles you won't find anywhere else.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 text-primary rounded-full">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">To be the most trusted platform for financial product comparison in PNG.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 text-primary rounded-full">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Our Team</h3>
                <p className="text-muted-foreground">A group of passionate financial experts and technologists committed to your success.</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 text-primary rounded-full">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Our Vision</h3>
                <p className="text-muted-foreground">To foster financial literacy and inclusion across Papua New Guinea.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-80 md:h-full w-full rounded-lg overflow-hidden">
           <Image 
            src="https://res.cloudinary.com/ddoewyjwc/image/upload/v1755691571/raw_sbprhq.png"
            alt="About PNG Free Credit"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            data-ai-hint="corporate team meeting"
          />
        </div>
      </div>
    </div>
  );
}
