import { tasks } from '@/data/tasks';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(tasks);
}