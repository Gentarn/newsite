'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
import { ContactFormData, submitContactForm } from '@/app/actions'
import { Button } from './button'
import { Input } from './input'
import { Textarea } from './textarea'
import { useToast } from './use-toast'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('reCAPTCHA token:', recaptchaToken)
      
      if (!recaptchaToken) {
        toast({
          title: 'エラー',
          description: 'reCAPTCHA認証を完了してください。',
          variant: 'destructive',
        })
        return
      }

      setIsSubmitting(true)
      console.log('Submitting form data:', data)
      const result = await submitContactForm(data, recaptchaToken)
      console.log('Submit result:', result)

      if (result?.success) {
        toast({
          title: '送信完了',
          description: '送信されました！',
        })
        reset()
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
        }
        setRecaptchaToken(null)
        setIsSubmitted(true)
      } else {
        toast({
          title: 'エラー',
          description: result?.error || '送信に失敗しました。もう一度お試しください。',
          variant: 'destructive',
        })
        if (result?.details) {
          console.error('Form submission error details:', result.details)
        }
      }
    } catch (error) {
      console.error('Unexpected error during form submission:', error)
      toast({
        title: 'エラー',
        description: '予期せぬエラーが発生しました。もう一度お試しください。',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          {...register('name', { required: '名前は必須です' })}
          placeholder="お名前"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <Input
          {...register('email', {
            required: 'メールアドレスは必須です',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '有効なメールアドレスを入力してください',
            },
          })}
          type="email"
          placeholder="メールアドレス"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Textarea
          {...register('message', { required: 'メッセージは必須です' })}
          placeholder="メッセージ"
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => {
            console.log('reCAPTCHA onChange:', token)
            setRecaptchaToken(token)
          }}
        />
      </div>

      <Button type="submit" disabled={isSubmitting || isSubmitted} className="w-full">
        {isSubmitting ? '送信中...' : isSubmitted ? '送信されました！' : '送信する'}
      </Button>
    </form>
  )
}