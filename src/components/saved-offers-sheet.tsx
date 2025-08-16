'use client';

import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import type { CreditOffer } from '@/lib/types';
import { Trash2, Briefcase } from 'lucide-react';

interface SavedOffersSheetProps {
  savedOffers: CreditOffer[];
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onRemove: (offerId: string) => void;
}

export default function SavedOffersSheet({
  savedOffers,
  isOpen,
  onOpenChange,
  onRemove,
}: SavedOffersSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col bg-card/95 backdrop-blur-sm border-primary/20">
        <SheetHeader>
          <SheetTitle className="text-2xl font-headline text-primary">Your Portfolio</SheetTitle>
          <SheetDescription>
            Review and compare your saved credit offers.
          </SheetDescription>
        </SheetHeader>
        <Separator className="bg-border/50" />
        <div className="flex-1 min-h-0">
          {savedOffers.length > 0 ? (
            <ScrollArea className="h-full pr-4">
              <div className="space-y-4 py-4">
                {savedOffers.map(offer => (
                  <div key={offer.id} className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Image
                      src={offer.logoUrl}
                      alt={`${offer.provider} logo`}
                      width={40}
                      height={40}
                      className="rounded-md border object-contain aspect-square mt-1 bg-background"
                      data-ai-hint="corporate logo"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold font-headline">{offer.title}</h4>
                      <p className="text-sm text-muted-foreground">{offer.provider}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-muted-foreground hover:text-destructive shrink-0 hover:bg-destructive/10"
                      onClick={() => onRemove(offer.id)}
                      aria-label={`Remove ${offer.title} from portfolio`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <Briefcase className="h-16 w-16 mb-4 text-muted-foreground/50" />
              <p className="font-semibold font-headline">Your portfolio is empty.</p>
              <p className="text-sm">Click the bookmark icon on an offer to add it to your portfolio.</p>
            </div>
          )}
        </div>
        <SheetFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="w-full">
                Close
            </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
