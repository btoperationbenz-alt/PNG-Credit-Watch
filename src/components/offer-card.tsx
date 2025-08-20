'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { CreditOffer } from '@/lib/types';
import { Bookmark, Clock, Percent, Gamepad2, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OfferCardProps {
  offer: CreditOffer;
  isSaved: boolean;
  onSaveToggle: () => void;
  onViewDetails: () => void;
  typeIcon?: React.ElementType;
}

export default function OfferCard({
  offer,
  isSaved,
  onSaveToggle,
  onViewDetails,
  typeIcon: TypeIcon = Gamepad2,
}: OfferCardProps) {
  const PlayButton = () => (
    <Button 
      onClick={!offer.playUrl ? onViewDetails : undefined}
      className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow text-base py-6 md:text-sm"
    >
      <Play className="mr-2 h-5 w-5" />
      Play
    </Button>
  );

  return (
    <Card className="flex flex-col group overflow-hidden transition-all duration-300 bg-card/80 backdrop-blur-sm rounded-xl hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 w-full cursor-pointer" onClick={onViewDetails}>
            <Image
                src={offer.logoUrl}
                alt={offer.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint="video game fantasy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
             <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                onSaveToggle();
              }}
              aria-label={isSaved ? 'Unsave offer' : 'Save offer'}
              className="absolute top-2 right-2 hover:bg-accent/20 z-10"
            >
              <Bookmark className={cn('h-6 w-6 transition-all', isSaved ? 'fill-primary text-primary' : 'text-white/80 hover:text-primary')} />
            </Button>
        </div>
      <CardContent className="flex-1 p-6 -mt-12 z-10">
         <CardTitle className="text-2xl font-bold font-headline mb-2">{offer.title}</CardTitle>
        <p className="text-sm text-muted-foreground h-12">{offer.description}</p>
        <div className="mt-4 flex flex-row flex-wrap gap-2">
           <div className="inline-flex items-center justify-center rounded-full border border-accent/50 bg-accent/20 text-white px-3 py-1 text-xs font-semibold">
                {offer.promoText || 'New Register Free K88'}
            </div>
            <div className="inline-flex items-center justify-center rounded-full border border-primary/50 bg-primary/20 text-white px-3 py-1 text-xs font-semibold">
                {offer.welcomeBonusText || 'Welcome Bonus 200%'}
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {offer.playUrl ? (
          <Link href={offer.playUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <PlayButton />
          </Link>
        ) : (
          <PlayButton />
        )}
      </CardFooter>
    </Card>
  );
}
