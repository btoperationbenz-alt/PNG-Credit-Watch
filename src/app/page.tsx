'use client';

import * as React from 'react';
import {
  Shield,
  Swords,
  Gamepad2,
  Scroll,
  Search,
  Bookmark,
} from 'lucide-react';
import type { CreditOffer } from '@/lib/types';
import { offers as allOffers } from '@/data/mock-offers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import OfferCard from '@/components/offer-card';
import OfferDetailsModal from '@/components/offer-details-modal';
import SavedOffersSheet from '@/components/saved-offers-sheet';

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

const offerTypeIcons: Record<CreditOffer['type'], React.ElementType> = {
  'Personal Loan': Shield,
  'Credit Card': Swords,
  'Business Loan': Gamepad2,
};

const offerTypes = ['Personal Loan', 'Credit Card', 'Business Loan'];
const promoLengths = ['Any', '1 Month', '3 Months', '6 Months', '1 Year'];

export default function PngCreditWatchPage() {
  const [offers, setOffers] = React.useState<CreditOffer[]>(allOffers);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedType, setSelectedType] = React.useState('All');
  const [selectedPromoLength, setSelectedPromoLength] = React.useState('Any');

  const [savedOfferIds, setSavedOfferIds] = React.useState<Set<string>>(new Set());
  const [selectedOffer, setSelectedOffer] = React.useState<CreditOffer | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  React.useEffect(() => {
    const filtered = allOffers.filter(offer => {
      const matchesSearch =
        offer.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'All' || offer.type === selectedType;
      const matchesPromo =
        selectedPromoLength === 'Any' || offer.promoLength === selectedPromoLength;
      return matchesSearch && matchesType && matchesPromo;
    });
    setOffers(filtered);
  }, [searchTerm, selectedType, selectedPromoLength]);

  const handleSaveToggle = (offerId: string) => {
    setSavedOfferIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(offerId)) {
        newSet.delete(offerId);
      } else {
        newSet.add(offerId);
      }
      return newSet;
    });
  };

  const handleViewDetails = (offer: CreditOffer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };
  
  const savedOffers = allOffers.filter(offer => savedOfferIds.has(offer.id));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/40">
       <header className="sticky top-0 z-40 w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <TreasureChestIcon className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="text-3xl font-bold font-headline tracking-wider text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">
              PNG Credit Quest
            </h1>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsSheetOpen(true)}
            className="relative bg-card/50 border-accent/50 hover:bg-accent/20 hover:border-accent"
          >
            <Bookmark className="mr-2 h-4 w-4" />
            Saved Loot
            {savedOfferIds.size > 0 && (
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold animate-bounce">
                {savedOfferIds.size}
              </span>
            )}
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <section className="text-center space-y-4 mb-12">
          <h2 className="text-5xl font-headline font-bold tracking-widest uppercase">
            Claim Your <span className="text-primary drop-shadow-[0_0_5px_hsl(var(--primary))]">Free Credit</span>
          </h2>
          <p className="text-muted-foreground text-xl font-body">
            Explore legendary no-deposit credit offers in Papua New Guinea.
          </p>
        </section>

        <div className="p-4 md:p-6 rounded-lg border-2 border-dashed border-primary/30 bg-card/50 mb-8 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
                <Scroll className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold font-headline">Filter Your Quest</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search provider or title..."
                        className="pl-10 bg-input border-border focus:border-primary focus:ring-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="bg-input border-border focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Quest Types</SelectItem>
                        {offerTypes.map(type => (
                            <SelectItem key={type} value={type}>
                                {type}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select value={selectedPromoLength} onValueChange={setSelectedPromoLength}>
                    <SelectTrigger className="bg-input border-border focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Filter by duration" />
                    </SelectTrigger>
                    <SelectContent>
                        {promoLengths.map(length => (
                            <SelectItem key={length} value={length}>
                                {length === 'Any' ? 'Any Duration' : length}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>

        {offers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map(offer => (
              <OfferCard
                key={offer.id}
                offer={offer}
                isSaved={savedOfferIds.has(offer.id)}
                onSaveToggle={() => handleSaveToggle(offer.id)}
                onViewDetails={() => handleViewDetails(offer)}
                typeIcon={offerTypeIcons[offer.type]}
              />
            ))}
          </div>
        ) : (
            <div className="text-center py-16 border-2 border-dashed border-muted/50 rounded-lg bg-card/30">
                <p className="text-muted-foreground text-lg font-headline">No Quests Match Your Filters</p>
                <p className="text-sm text-muted-foreground">Adjust your search parameters and try again, adventurer.</p>
            </div>
        )}
      </main>
      
      <footer className="py-6 md:px-8 md:py-0 border-t border-primary/20">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              Forged by the Player. Powered by the Engine.
            </p>
          </div>
      </footer>

      {selectedOffer && (
        <OfferDetailsModal
          offer={selectedOffer}
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      )}

      <SavedOffersSheet
        savedOffers={savedOffers}
        isOpen={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        onRemove={handleSaveToggle}
      />
    </div>
  );
}
