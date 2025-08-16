import type { CreditOffer } from '@/lib/types';

export const offers: CreditOffer[] = [
  {
    id: '1',
    provider: 'i1kina.com',
    title: 'i1kina.com',
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
    provider: 'soo88.club',
    title: 'soo88.club',
    description: 'soo88.club offers a premier online gaming experience in Papua New Guinea, with a wide array of exciting slots and live casino games. Join now for top-tier entertainment!',
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
    promoText: 'New Register Free K38',
    welcomeBonusText: 'Welcome Bonus 100%',
  },
  {
    id: '3',
    provider: 'i1pgk.com',
    title: 'i1pgk.com',
    description: 'i1pgk.com is your gateway to online gaming in PNG. Offering a wide range of slots, sports betting, and live dealer games for your entertainment.',
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
    maxAmount: 'PGK 100,000',
    promoText: 'New Register Free K38',
    welcomeBonusText: 'Welcome Bonus 100%',
  },
    {
    id: '4',
    provider: 'i1bsp.com',
    title: 'i1bsp.com',
    description: 'Dive into the world of i1bsp.com, a leading online gaming platform in PNG with top-notch slots and sports betting.',
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
    maxAmount: 'PGK 5,000',
    promoText: 'New Register Free K38',
    welcomeBonusText: 'Welcome Bonus 100%',
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
  {
    id: '7',
    provider: 'Westpac PNG',
    title: 'Easy-Start Personal Loan',
    description: 'Get a quick and easy personal loan with competitive rates. No deposit needed.',
    type: 'Personal Loan',
    promoLength: 'Any',
    termsAndConditions: 'Standard Westpac personal loan terms apply. Subject to credit check.',
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '18% p.a.',
    maxAmount: 'PGK 30,000'
  },
  {
    id: '8',
    provider: 'Kina Bank',
    title: 'Kina Everyday MasterCard',
    description: 'A simple and convenient credit card for your daily needs. No deposit required.',
    type: 'Credit Card',
    promoLength: '1 Year',
    termsAndConditions: 'No annual fee for the first year. Standard interest rates apply.',
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '22% p.a.'
  },
  {
    id: '9',
    provider: 'MiBank',
    title: 'Micro-Business Booster',
    description: 'Specialized funding to help your small business grow and succeed.',
    type: 'Business Loan',
    promoLength: '6 Months',
    termsAndConditions: 'Designed for micro-enterprises. Simplified application process.',
    logoUrl: 'https://placehold.co/600x400.png',
    maxAmount: 'PGK 15,000'
  },
  {
    id: '10',
    provider: 'ANZ Papua New Guinea',
    title: 'Home Improvement Loan',
    description: 'Finance your home renovations with our flexible loan options. No deposit required.',
    type: 'Personal Loan',
    promoLength: 'Any',
    termsAndConditions: 'Loan must be used for residential property improvements. Subject to approval.',
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '16.5% p.a.',
    maxAmount: 'PGK 75,000'
  },
  {
    id: '11',
    provider: 'BSP Financial Group',
    title: 'Standard Visa Debit Card',
    description: 'Access your funds easily with our standard Visa debit card. No annual fees.',
    type: 'Credit Card',
    promoLength: 'Any',
    termsAndConditions: 'Attached to a BSP transaction account. Transaction fees apply.',
    logoUrl: 'https://placehold.co/600x400.png'
  },
  {
    id: '12',
    provider: 'Kina Bank',
    title: 'SME Asset Finance',
    description: 'Finance your business vehicles or equipment with our asset finance solution.',
    type: 'Business Loan',
    promoLength: 'Any',
    termsAndConditions: 'The financed asset serves as security. Terms up to 5 years.',
    logoUrl: 'https://placehold.co/600x400.png'
  },
  {
    id: '13',
    provider: 'Westpac PNG',
    title: 'Car Loan Special',
    description: 'Drive away with your new car sooner with our competitive car loan.',
    type: 'Personal Loan',
    promoLength: '3 Months',
    termsAndConditions: 'Special introductory rate for the first 3 months. For new and used vehicles.',
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '14% p.a. intro'
  },
  {
    id: '14',
    provider: 'ANZ Papua New Guinea',
    title: 'Platinum Rewards Card',
    description: 'Earn rewards faster with our premium platinum credit card.',
    type: 'Credit Card',
    promoLength: '1 Year',
    termsAndConditions: 'Higher credit limit and rewards points. Annual fee applies.',
    logoUrl: 'https://placehold.co/600x400.png',
    interestRate: '20% p.a.'
  },
  {
    id: '15',
    provider: 'Women\'s Micro Bank',
    title: 'Meri-Biz Loan',
    description: 'Empowering women entrepreneurs with accessible business financing.',
    type: 'Business Loan',
    promoLength: 'Any',
    termsAndConditions: 'Exclusively for female-owned businesses. Favorable terms.',
    logoUrl: 'https://placehold.co/600x400.png',
    maxAmount: 'PGK 20,000'
  },
];
