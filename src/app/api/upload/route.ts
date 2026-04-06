import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // 1. Generate a unique file name
    const fileExt = file.name.split('.').pop() || 'png';
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

    // 2. Convert to ArrayBuffer for Supabase
    const bytes = await file.arrayBuffer();

    // 3. Upload exactly the file buffer to the 'logos' bucket
    const { data: uploadData, error: uploadError } = await supabase
      .storage
      .from('logos') // The name of your Supabase Storage Bucket
      .upload(fileName, bytes, {
        contentType: file.type || 'image/png',
        upsert: false,
      });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    // 4. Retrieve the public URL for the newly uploaded logo
    const { data: publicUrlData } = supabase
      .storage
      .from('logos')
      .getPublicUrl(fileName);

    return NextResponse.json({
      success: true,
      url: publicUrlData.publicUrl
    });
  } catch (error: any) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: error.message || 'Server Error' }, { status: 500 });
  }
}
