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

const TreasureChestIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="8" width="20" height="12" rx="2" />
      <path d="M2 8h20" />
      <path d="M12 14v-4" />
      <path d="M12 8a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4" />
      <path d="M12 8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4" />
    </svg>
  );

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
          <SheetTitle className="text-2xl font-headline text-primary">Your Loot</SheetTitle>
          <SheetDescription>
            Review and compare your saved quest rewards.
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
                      data-ai-hint="fantasy guild crest"
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
              <TreasureChestIcon className="h-16 w-16 mb-4 text-muted-foreground/50" />
              <p className="font-semibold font-headline">Your inventory is empty.</p>
              <p className="text-sm">Click the bookmark icon on an offer to save it as loot.</p>
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
