import { robots } from '@/data/robots';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(robots);
}