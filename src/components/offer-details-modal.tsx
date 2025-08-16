'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import type { CreditOffer } from '@/lib/types';
import { summarizeTerms } from '@/ai/flows/summarize-terms';
import { Loader, Sparkles, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface OfferDetailsModalProps {
  offer: CreditOffer;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function OfferDetailsModal({ offer, isOpen, onOpenChange }: OfferDetailsModalProps) {
  const [summary, setSummary] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await summarizeTerms({ termsAndConditions: offer.termsAndConditions });
      setSummary(result.summary);
    } catch (error) {
      console.error('Failed to summarize terms:', error);
      toast({
        variant: "destructive",
        title: "Summarization Failed",
        description: "Could not generate summary. Please try again later.",
      })
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    // Reset state when modal is closed or offer changes
    if (!isOpen) {
      setSummary(null);
      setIsLoading(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">{offer.title}</DialogTitle>
          <DialogDescription>
            Provided by {offer.provider}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh]">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Terms & Conditions</h3>
            <ScrollArea className="h-96 rounded-md border p-4 text-sm whitespace-pre-wrap font-mono">
              {offer.termsAndConditions}
            </ScrollArea>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">Plain Language Summary</h3>
                <Button onClick={handleSummarize} disabled={isLoading} size="sm">
                    {isLoading ? (
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    {isLoading ? 'Summarizing...' : 'Generate Summary'}
                </Button>
            </div>
            <ScrollArea className="h-96 rounded-md border p-4">
              {isLoading && (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
              )}
              {summary && (
                 <Alert>
                    <Sparkles className="h-4 w-4" />
                    <AlertTitle>AI-Generated Summary</AlertTitle>
                    <AlertDescription>
                        <p className="text-sm text-foreground">{summary}</p>
                        <Separator className="my-2" />
                        <p className="text-xs text-muted-foreground">This is an AI-generated summary. Please review the full terms and conditions for complete details.</p>
                    </AlertDescription>
                </Alert>
              )}
              {!isLoading && !summary && (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <p className="text-muted-foreground">Click "Generate Summary" to get an easy-to-understand overview of the terms using AI.</p>
                </div>
              )}
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
