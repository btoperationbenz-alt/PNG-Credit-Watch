
import { NextResponse } from 'next/server';
import { offers } from '@/data/mock-offers';

export async function GET() {
  return NextResponse.json(offers);
}
