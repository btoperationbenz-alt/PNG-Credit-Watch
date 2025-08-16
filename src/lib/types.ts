export type CreditOffer = {
  id: string;
  provider: string;
  title: string;
  description: string;
  type: 'Personal Loan' | 'Credit Card' | 'Business Loan';
  promoLength: string;
  termsAndConditions: string;
  logoUrl: string;
  interestRate?: string;
  maxAmount?: string;
};
