
'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  User,
  CreditCard,
  Building2,
  Filter,
  Search,
  Bookmark,
  Download,
} from 'lucide-react';
import type { CreditOffer } from '@/lib/types';
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
  const [allOffers, setAllOffers] = React.useState<CreditOffer[]>([]);
  const [offers, setOffers] = React.useState<CreditOffer[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedType, setSelectedType] = React.useState('All');
  const [selectedPromoLength, setSelectedPromoLength] = React.useState('Any');

  const [savedOfferIds, setSavedOfferIds] = React.useState<Set<string>>(new Set());
  const [selectedOffer, setSelectedOffer] = React.useState<CreditOffer | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  
  React.useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('/api/offers');
        const data = await response.json();
        setAllOffers(data);
        setOffers(data);
      } catch (error) {
        console.error('Failed to fetch offers:', error);
      }
    };
    fetchOffers();
  }, []);


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
  }, [searchTerm, selectedType, selectedPromoLength, allOffers]);

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
            Download the latest PNG Online Casino APK 2025 for Android. Play slots, roulette, baccarat and more with secure and original APK. Best choice for Papua New Guinea players!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="https://123.889ifun.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                <Download className="mr-2 h-5 w-5" />
                918KAYA Download Now
              </Button>
            </Link>
            <Link href="https://mgh5.megah5.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                  <Download className="mr-2 h-5 w-5" />
                  MEGAH5 Download Now
                </Button>
            </Link>
            <Link href="https://vpower34.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                <Download className="mr-2 h-5 w-5" />
                VPOWER Download Now
              </Button>
            </Link>
            <Link href="https://cr.go888king.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                <Download className="mr-2 h-5 w-5" />
                888KING Download Now
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <div className="relative rounded-xl overflow-hidden group w-full bg-card">
            <div className="block md:hidden">
              <Image
                src="https://res.cloudinary.com/ddoewyjwc/image/upload/v1755693944/image_2025-08-14_15-01-25_bugg3m.png"
                alt="Featured Offer"
                width={600}
                height={400}
                className="object-contain w-full h-auto"
                data-ai-hint="video game splash art"
              />
            </div>
            <div className="hidden md:block md:relative md:aspect-[21/9]">
                <Image
                    src="https://res.cloudinary.com/ddoewyjwc/image/upload/v1755693944/image_2025-08-14_15-01-25_bugg3m.png"
                    alt="Featured Offer"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="video game splash art"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="relative p-4 md:absolute md:inset-0 md:p-8 flex flex-col justify-end bg-card md:bg-transparent">
              <h3 className="text-xl md:text-4xl font-bold font-headline text-foreground md:text-white md:drop-shadow-lg">
                wintru.bet
              </h3>
              <p className="text-xs md:text-base text-muted-foreground md:text-white/90 max-w-2xl mt-1 md:mt-2 md:drop-shadow-lg">
                Wintru.bet brings Papua New Guinea the ultimate gaming
                thrill—slots, sports & rewards. Get welcome bonuses, daily
                prizes & climb VIP ranks. Play now, fun awaits!
              </p>
              <div className="mt-4 flex flex-wrap gap-2 items-center">
                <div className="inline-flex items-center justify-center rounded-full border border-accent/80 bg-accent/30 text-white px-2 py-1 text-[10px] font-semibold backdrop-blur-sm">
                  New Register Free K88
                </div>
                <div className="inline-flex items-center justify-center rounded-full border border-primary/80 bg-primary/30 text-white px-2 py-1 text-[10px] font-semibold backdrop-blur-sm">
                  Welcome Bonus 200%
                </div>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow h-auto py-3 px-6 text-sm"
                >
                  <Play className="mr-1 h-5 w-5" />
                  Play
                </Button>
              </div>
            </div>
          </div>
        </section>

        {offers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
