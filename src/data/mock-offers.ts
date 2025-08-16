import type { CreditOffer } from '@/lib/types';

export const offers: CreditOffer[] = [
  {
    id: '1',
    provider: 'i1kina.com',
    title: 'Personal Loan - No Deposit',
    description: "Experience the thrill of online gaming with i1kina.com! Your top destination in PNG for slots, jackpots, and endless entertainment. Join today and win big!",
    type: 'Personal Loan',
    promoLength: '3 Months',
    termsAndConditions: `1. Eligibility: This offer is available to new and existing Kina Bank customers who are residents of Papua New Guinea and are over 18 years of age.
2. Loan Amount: Minimum loan amount of PGK 1,000 and maximum of PGK 50,000.
3. Interest Rate: A fixed interest rate of 15% per annum applies for the duration of the loan.
4. No Deposit: No security deposit is required for this loan product.
5. Repayment: Repayments must be made monthly over a period of 12 to 36 months.
6. Fees: An establishment fee of PGK 150 applies. Late payment fees of PGK 50 per instance will be charged.
7. Credit Check: Applicants are subject to a credit history check. Approval is not guaranteed.
8. Offer Period: This promotion is valid for applications received before December 31, 2024.`,
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '15% p.a.',
    maxAmount: 'PGK 50,000',
    promoText: 'New Register Free K38',
    welcomeBonusText: 'Welcome Bonus 100%',
  },
  {
    id: '2',
    provider: 'BSP Financial Group',
    title: 'First-Time Credit Card',
    description: 'Your first credit card with no annual fee for the first year.',
    type: 'Credit Card',
    promoLength: '1 Year',
    termsAndConditions: `This offer is exclusively for first-time credit card holders with BSP.
- No annual fee for the first 12 months from the date of card activation.
- A standard annual fee of PGK 100 will apply from the second year onwards.
- Minimum credit limit is PGK 500. Maximum limit is subject to assessment.
- Cash advance fee is 3% of the transaction amount.
- Interest rate on purchases is 24% per annum.
- Applicants must provide proof of steady income.
- Offer cannot be used in conjunction with other promotions.`,
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '24% p.a.',
  },
  {
    id: '3',
    provider: 'Westpac PNG',
    title: 'SME Business Starter Loan',
    description: 'Kickstart your business with our special no-deposit loan for SMEs.',
    type: 'Business Loan',
    promoLength: '6 Months',
    termsAndConditions: `This loan is designed for Small and Medium Enterprises (SMEs) registered in Papua New Guinea.
1. Eligibility: Business must be registered with the Investment Promotion Authority (IPA) and have been operating for at least 6 months.
2. Loan Amount: Up to PGK 100,000.
3. Purpose: Loan must be used for business purposes only, such as inventory, equipment, or working capital.
4. Interest Rate: Introductory rate of 9% p.a. for the first 6 months. Standard business loan rates apply thereafter.
5. Security: While no cash deposit is required, a director's guarantee may be necessary.
6. Documentation: Applicants must submit a business plan, financial statements (if available), and company registration documents.`,
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '9% intro rate',
    maxAmount: 'PGK 100,000'
  },
    {
    id: '4',
    provider: 'ANZ Papua New Guinea',
    title: 'Student Cred-Start',
    description: 'A special low-interest loan for tertiary students. No deposit required.',
    type: 'Personal Loan',
    promoLength: '1 Year',
    termsAndConditions: `The ANZ Student Cred-Start loan is subject to the following terms.
- Applicant must be a full-time student at a recognized tertiary institution in PNG.
- Proof of enrollment is required.
- Loan can be used for educational expenses like fees, books, and laptops.
- Maximum loan amount is PGK 5,000.
- A favorable interest rate of 8% p.a. is applied.
- A parental or guardian guarantee is required for all applicants under 21.
- No repayments are required until 6 months after graduation. Interest will continue to accrue during the study period.`,
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '8% p.a.',
    maxAmount: 'PGK 5,000'
  },
  {
    id: '5',
    provider: 'Kina Bank',
    title: 'Gold Tier Visa Card',
    description: 'Premium credit card with travel benefits and no deposit for account holders.',
    type: 'Credit Card',
    promoLength: '1 Year',
    termsAndConditions: `The Kina Bank Gold Tier Visa Card is a premium offering.
- To be eligible, you must have a Kina Bank account with a minimum balance of PGK 10,000 or a monthly salary of PGK 5,000 credited to the account.
- The annual fee of PGK 250 is waived for the first year.
- Includes complimentary travel insurance for overseas trips up to 30 days.
- Earn 1 reward point for every PGK 5 spent.
- Access to select airport lounges in the Pacific region.
- Interest rate for purchases is 21% p.a.
- Foreign transaction fee is 2.5%.`,
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '21% p.a.',
  },
  {
    id: '6',
    provider: 'BSP Financial Group',
    title: 'Agri-Business Growth Fund',
    description: 'Funding for agricultural projects with flexible terms and no initial deposit.',
    type: 'Business Loan',
    promoLength: '3 Months',
    termsAndConditions: `The Agri-Business Growth Fund is a specialized BSP product.
- This fund is targeted at small to medium-scale agricultural enterprises.
- Projects must demonstrate potential for growth and sustainability.
- Loan amounts range from PGK 20,000 to PGK 200,000.
- No capital deposit needed, but assets purchased with the loan may be used as security.
- Repayment schedule is flexible and can be aligned with harvest or production cycles.
- A 3-month interest-only period is available at the start of the loan.
- Applicants must provide a detailed project proposal.`,
    logoUrl: 'https://placehold.co/600x400.png',
    maxAmount: 'PGK 200,000'
  },
];
