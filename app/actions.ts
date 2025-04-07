"use server"

import { z } from "zod"

// フォームデータのバリデーションスキーマ
const formSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  message: z.string().min(1, { message: "メッセージを入力してください" }),
})

export type FormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // フォームデータの検証
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  // バリデーションエラーがある場合
  if (!validatedFields.success) {
    return {
      success: false,
      message: "フォームの入力内容に問題があります",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    // ここでメール送信のロジックを実装
    // 実際の環境では、SendGrid、Nodemailer、またはVercelのSendgrid Integrationなどを使用

    // メール送信のシミュレーション（実際の実装では置き換える）
    console.log(`送信先: info@open-face.net`)
    console.log(`送信者: ${name} (${email})`)
    console.log(`メッセージ: ${message}`)

    // 実際のメール送信処理はここに実装
    // 例: await sendEmail({ to: 'info@open-face.net', from: email, subject: `お問い合わせ: ${name}`, text: message })

    // 成功レスポンス
    return {
      success: true,
      message: "お問い合わせありがとうございます。メッセージが送信されました。",
    }
  } catch (error) {
    // エラーレスポンス
    return {
      success: false,
      message: "メッセージの送信中にエラーが発生しました。後でもう一度お試しください。",
    }
  }
}

