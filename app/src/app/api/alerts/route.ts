import { alerts } from '@/data/alerts';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(alerts);
}