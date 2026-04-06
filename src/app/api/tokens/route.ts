import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Helper to validate Ethereum addresses
const isValidAddress = (address: string) => /^0x[a-fA-F0-9]{40}$/.test(address);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { address, chainId, name, symbol, logo } = body;

    // 1. Validate inputs
    if (!address || !chainId || !name || !symbol || !logo) {
      return NextResponse.json(
        { error: 'Missing required fields: address, chainId, name, symbol, logo' },
        { status: 400 }
      );
    }

    if (!isValidAddress(address)) {
      return NextResponse.json(
        { error: 'Invalid token address format' },
        { status: 400 }
      );
    }

    // Removing numeric check for chainId because the UI/user schema sends it as string "5042002"

    // 2. Add to Supabase
    // Assumes you have a table called 'tokens' with columns: address, chainId, logo
    const { data, error } = await supabase
      .from('tokens')
      .insert([
        { 
          address: address.toLowerCase(), // Normalize addresses to lowercase
          chainId: chainId,
          name,
          symbol,
          logo 
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to insert token into database', details: error.message },
        { status: 500 }
      );
    }

    // 3. Return success
    return NextResponse.json({
      success: true,
      message: 'Token added successfully',
      data: data ? data[0] : null,
    });

  } catch (err: any) {
    console.error('API Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('tokens')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch tokens from database', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data,
    });
  } catch (err: any) {
    console.error('API Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
