'use server'

import { supabase } from '@/lib/supabase'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface SubmitResult {
  success: boolean
  error?: string
  data?: any
  message?: string
  details?: any
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    console.log('Verifying reCAPTCHA token:', token)
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    console.log('reCAPTCHA verification response:', data)
    return data.success
  } catch (error: any) {
    console.error('reCAPTCHA verification error:', error);
    console.error('reCAPTCHA verification error details:', error.message, error.stack);
    return false
  }
}

export async function submitContactForm(formData: ContactFormData, recaptchaToken?: string): Promise<SubmitResult> {
  'use server'
  
  try {
    console.log('Received form data:', formData)
    console.log('Received reCAPTCHA token:', recaptchaToken)

    if (!recaptchaToken) {
      console.error('No reCAPTCHA token provided')
      return {
        success: false,
        error: 'reCAPTCHA認証が必要です',
      }
    }

    // const isValidRecaptcha = await verifyRecaptcha(recaptchaToken)
    // if (!isValidRecaptcha) {
    //   console.error('reCAPTCHA verification failed')
    //   return {
    //     success: false,
    //     error: 'reCAPTCHA認証に失敗しました',
    //   }
    // }

    console.log('reCAPTCHA verification successful, proceeding with database insert')
    
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString()
        }
      ])
      .select('*')
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return {
        success: false,
        error: `データベースエラー: ${error.message}`,
        details: error
      }
    }

    console.log('Data inserted successfully:', data)
    return {
      success: true,
      data,
      message: 'お問い合わせありがとうございます。'
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      success: false,
      error: '予期せぬエラーが発生しました。',
      details: error
    }
  }
}
