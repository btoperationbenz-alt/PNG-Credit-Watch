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
import { Trash2 } from 'lucide-react';

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
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-headline">Saved Offers</SheetTitle>
          <SheetDescription>
            Review and compare your saved credit deals.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex-1 min-h-0">
          {savedOffers.length > 0 ? (
            <ScrollArea className="h-full pr-4">
              <div className="space-y-4">
                {savedOffers.map(offer => (
                  <div key={offer.id} className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted">
                    <Image
                      src={offer.logoUrl}
                      alt={`${offer.provider} logo`}
                      width={40}
                      height={40}
                      className="rounded-md border object-contain aspect-square mt-1"
                      data-ai-hint="company logo"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{offer.title}</h4>
                      <p className="text-sm text-muted-foreground">{offer.provider}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-muted-foreground hover:text-destructive shrink-0"
                      onClick={() => onRemove(offer.id)}
                      aria-label={`Remove ${offer.title} from saved`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <p className="font-semibold">No saved offers yet.</p>
              <p className="text-sm">Click the bookmark icon on an offer to save it here.</p>
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
