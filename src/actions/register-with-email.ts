'use server'

import { createClient } from '@/utils/supabase/server'

export async function registerWithEmail({ email }: { email: string }) {
  const supabase = await createClient()

  console.log(email)

  const response = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: process.env.NEXT_PUBLIC_CURRENT_ORIGIN,
    },
  })

  console.log(response)

  return JSON.stringify(response)
}
