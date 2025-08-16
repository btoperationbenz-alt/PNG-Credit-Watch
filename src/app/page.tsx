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
import Image from 'next/image';
import { Play } from 'lucide-react';

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
            Free Credit No Deposit in Papua New Guinea (2025)
          </h2>
          <p className="text-muted-foreground text-xl font-body">
            Discover elite no-deposit credit opportunities in Papua New Guinea.
          </p>
        </section>

        <section className="mb-12">
            <div className="relative rounded-xl overflow-hidden group w-full aspect-[16/6]">
                <Image
                    src="https://placehold.co/1200x400.png"
                    alt="Featured Offer"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="video game splash art"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"/>
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <h3 className="text-3xl md:text-4xl font-bold font-headline text-white drop-shadow-lg">Kina Bank</h3>
                    <p className="text-lg text-white/90 max-w-2xl mt-2 drop-shadow-lg">Get a personal loan with zero upfront deposit. Fast approval process.</p>
                     <div className="mt-4 flex flex-wrap gap-4 items-center">
                        <div className="inline-flex items-center justify-center rounded-full border-2 border-accent/80 bg-accent/30 text-white px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                            New Register Free K88
                        </div>
                        <div className="inline-flex items-center justify-center rounded-full border-2 border-primary/80 bg-primary/30 text-white px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                            Welcome Bonus 200%
                        </div>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow text-lg py-6 px-8">
                            <Play className="mr-2 h-5 w-5" />
                            Play
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {offers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
