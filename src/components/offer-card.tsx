'use client';

import Image from 'next/image';
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
import { Bookmark, Clock, Eye, Percent, Gem } from 'lucide-react';
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
  typeIcon: TypeIcon = Gem,
}: OfferCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/40 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 border-2 border-transparent bg-card/80 backdrop-blur-sm">
      <CardHeader className="flex-row items-start gap-4 bg-card/50 p-4">
        <div className="p-2 bg-background rounded-lg border border-border">
            <Image
            src={offer.logoUrl}
            alt={`${offer.provider} logo`}
            width={48}
            height={48}
            className="rounded-md object-contain aspect-square"
            data-ai-hint="fantasy guild crest"
            />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl font-bold font-headline">{offer.title}</CardTitle>
          <CardDescription className="text-muted-foreground">{offer.provider}</CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onSaveToggle}
          aria-label={isSaved ? 'Unsave offer' : 'Save offer'}
          className="hover:bg-accent/20"
        >
          <Bookmark className={cn('h-6 w-6 transition-all', isSaved ? 'fill-primary text-primary' : 'text-muted-foreground hover:text-primary')} />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-0 space-y-4">
        <p className="text-sm text-muted-foreground h-10">{offer.description}</p>
        <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1.5 pl-2 border-accent/30 bg-accent/10 text-accent-foreground">
                <TypeIcon className="h-3.5 w-3.5" />
                {offer.type}
            </Badge>
            <Badge variant="secondary" className="gap-1.5 pl-2 border-accent/30 bg-accent/10 text-accent-foreground">
                <Clock className="h-3.5 w-3.5" />
                {offer.promoLength}
            </Badge>
            {offer.interestRate && (
                <Badge variant="secondary" className="gap-1.5 pl-2 border-accent/30 bg-accent/10 text-accent-foreground">
                    <Percent className="h-3.5 w-3.5" />
                    {offer.interestRate}
                </Badge>
            )}
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-card/20">
        <Button onClick={onViewDetails} className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
          <Eye className="mr-2 h-4 w-4" />
          View Details & Summarize
        </Button>
      </CardFooter>
    </Card>
  );
}
