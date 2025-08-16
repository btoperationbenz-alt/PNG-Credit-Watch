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
import { Bookmark, Clock, Eye, Percent, PiggyBank as DefaultIcon } from 'lucide-react';
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
  typeIcon: TypeIcon = DefaultIcon,
}: OfferCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex-row items-start gap-4 bg-card p-4">
        <Image
          src={offer.logoUrl}
          alt={`${offer.provider} logo`}
          width={60}
          height={60}
          className="rounded-lg border object-contain aspect-square"
          data-ai-hint="company logo"
        />
        <div className="flex-1">
          <CardTitle className="text-xl font-bold font-headline">{offer.title}</CardTitle>
          <CardDescription>{offer.provider}</CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onSaveToggle}
          aria-label={isSaved ? 'Unsave offer' : 'Save offer'}
        >
          <Bookmark className={cn('h-6 w-6', isSaved ? 'fill-primary text-primary' : 'text-muted-foreground')} />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-0 space-y-3">
        <p className="text-sm text-muted-foreground">{offer.description}</p>
        <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1.5 pl-2">
                <TypeIcon className="h-3.5 w-3.5" />
                {offer.type}
            </Badge>
            <Badge variant="secondary" className="gap-1.5 pl-2">
                <Clock className="h-3.5 w-3.5" />
                {offer.promoLength}
            </Badge>
            {offer.interestRate && (
                <Badge variant="secondary" className="gap-1.5 pl-2">
                    <Percent className="h-3.5 w-3.5" />
                    {offer.interestRate}
                </Badge>
            )}
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button onClick={onViewDetails} className="w-full bg-primary hover:bg-primary/90">
          <Eye className="mr-2 h-4 w-4" />
          View Details & Summarize
        </Button>
      </CardFooter>
    </Card>
  );
}
