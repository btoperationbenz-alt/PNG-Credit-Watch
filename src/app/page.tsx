'use client';

import * as React from 'react';
import {
  User,
  CreditCard,
  Building2,
  Filter,
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

const offerTypeIcons: Record<CreditOffer['type'], React.ElementType> = {
  'Personal Loan': User,
  'Credit Card': CreditCard,
  'Business Loan': Building2,
};

const offerTypes = ['Personal Loan', 'Credit Card', 'Business Loan'];
const promoLengths = ['Any', '1 Month', '3 Months', '6 Months', '1 Year'];

export default function PngCreditProPage() {
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
      <div className="container py-8">
        <section className="text-center space-y-4 mb-12">
          <h2 className="text-5xl font-headline font-bold tracking-wider uppercase">
            Unlock Your Financial Advantage
          </h2>
          <p className="text-muted-foreground text-xl font-body">
            Discover elite no-deposit credit opportunities in Papua New Guinea.
          </p>
        </section>

        <div className="p-4 md:p-6 rounded-lg border border-border bg-card/50 mb-8 shadow-md">
            <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold font-headline">Refine Your Search</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search by provider or title..."
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
                        <SelectItem value="All">All Offer Types</SelectItem>
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
                 <Button
                    variant="outline"
                    onClick={() => setIsSheetOpen(true)}
                    className="relative bg-card/50 border-accent/50 hover:bg-accent/20 hover:border-accent"
                  >
                    <Bookmark className="mr-2 h-4 w-4" />
                    Saved Offers
                    {savedOfferIds.size > 0 && (
                      <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold animate-pulse">
                        {savedOfferIds.size}
                      </span>
                    )}
                  </Button>
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
            <div className="text-center py-16 border border-dashed border-muted/50 rounded-lg bg-card/30">
                <p className="text-muted-foreground text-lg font-headline">No Offers Match Your Criteria</p>
                <p className="text-sm text-muted-foreground">Adjust your search parameters and try again.</p>
            </div>
        )}
      </div>

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
