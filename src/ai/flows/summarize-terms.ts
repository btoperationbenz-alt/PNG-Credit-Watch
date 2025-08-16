// Summarize Terms Flow
'use server';
/**
 * @fileOverview Summarizes the terms and conditions of a credit offer into plain language.
 *
 * - summarizeTerms - A function that summarizes the terms and conditions.
 * - SummarizeTermsInput - The input type for the summarizeTerms function.
 * - SummarizeTermsOutput - The return type for the summarizeTerms function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTermsInputSchema = z.object({
  termsAndConditions: z
    .string()
    .describe('The full text of the terms and conditions of a credit offer.'),
});
export type SummarizeTermsInput = z.infer<typeof SummarizeTermsInputSchema>;

const SummarizeTermsOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A plain language summary of the key terms and conditions, including any restrictions or important details.'
    ),
});
export type SummarizeTermsOutput = z.infer<typeof SummarizeTermsOutputSchema>;

export async function summarizeTerms(input: SummarizeTermsInput): Promise<SummarizeTermsOutput> {
  return summarizeTermsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTermsPrompt',
  input: {schema: SummarizeTermsInputSchema},
  output: {schema: SummarizeTermsOutputSchema},
  prompt: `You are an AI assistant that summarizes legal terms and conditions into plain, easy-to-understand language.

  Here are the terms and conditions: {{{termsAndConditions}}}

  Please provide a concise summary of the key terms, including any restrictions, fees, or other important details a user should be aware of.  The summary should be written in a way that is easy for a non-expert to understand.
  `,
});

const summarizeTermsFlow = ai.defineFlow(
  {
    name: 'summarizeTermsFlow',
    inputSchema: SummarizeTermsInputSchema,
    outputSchema: SummarizeTermsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
