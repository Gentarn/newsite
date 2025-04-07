"use client"

import { useState } from "react"
import { useActionState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Facebook, MapPin, Mail, Heart } from "lucide-react"
import { submitContactForm, type FormState } from "./actions"
import { ThankYouPopup } from "@/components/ui/thank-you-popup"

const initialState: FormState = {}

export default function Home() {
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const [showThankYou, setShowThankYou] = useState(false)

  // フォーム送信成功時にポップアップを表示
  if (state.success && !showThankYou) {
    setShowThankYou(true)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ヘッダー */}
      <header className="bg-white text-gray-800 px-4 py-6 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-gold font-serif text-3xl mr-2">O.f.</span>
            <span className="font-serif text-2xl">OPEN FACE LLC</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="font-serif hover:text-gold transition-colors">
              OUR SERVICE
            </a>
            <a href="#about" className="font-serif hover:text-gold transition-colors">
              ABOUT US
            </a>
            <a href="#contact" className="font-serif hover:text-gold transition-colors">
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative gradient-bg">
        <div className="container mx-auto px-4 py-8">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of_hero-0yfKP1DrjRrxJEIZEtWlnhAoFbESmT.png"
              alt="ソリューションイラスト - ビジネスパーソンと解決策"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-2xl text-center font-serif">ビジネス変革のためクラウド価値を最大化するパートナー</p>
          </div>
        </div>
      </section>

      {/* What's Open Face セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">What&apos;s Open Face</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-8">
              新型コロナの影響により、働き方や業務のあり方が変わってきた今日となりました。これに伴い、「モバイルワーク環境」「クラウドファースト」「モバイルファースト」とお客様お持ちの課題も変革してきました。中小企業においても、この時代に適応を図る動きがありますが、弊社は設立当初から「クラウドインテグレーター」を標榜し、お客様とともに解決の道筋とソリューションを提供してまいりました。
            </p>
            <p className="text-gray-700 leading-relaxed">
              これまでにさまざま業態の企業、業務系パッケージ導入、およびクラウドソーシングによるコンサルティングのノウハウを活かし、システム開発と業界課題を踏まえたビジネスモデルへの対応力の強化し、最適化とクラウド化を総合的にご提案いたします。
            </p>
          </div>
          <div className="text-center mt-12">
            <a href="#contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8">お問い合わせ</Button>
            </a>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of_hero-0yfKP1DrjRrxJEIZEtWlnhAoFbESmT.png"
                  alt="業務プロセス改善"
                  width={150}
                  height={150}
                  className="mx-auto mb-6 rounded-full"
                />
                <h3 className="font-serif font-bold text-xl mb-4">業務プロセス改善</h3>
                <p className="text-gray-700">
                  業務課程の分析・見直しによる改善、ITを活用する分野の選定など、お客様の業務改善をご支援いたします。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of_hero-0yfKP1DrjRrxJEIZEtWlnhAoFbESmT.png"
                  alt="ロードマップ/メニュー作成"
                  width={150}
                  height={150}
                  className="mx-auto mb-6 rounded-full"
                />
                <h3 className="font-serif font-bold text-xl mb-4">ロードマップ/メニュー作成</h3>
                <p className="text-gray-700">クラウド化の課題を整理し、段階的な移行計画を立案いたします。</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of_hero-0yfKP1DrjRrxJEIZEtWlnhAoFbESmT.png"
                  alt="クラウド移行サポート"
                  width={150}
                  height={150}
                  className="mx-auto mb-6 rounded-full"
                />
                <h3 className="font-serif font-bold text-xl mb-4">クラウド移行サポート</h3>
                <p className="text-gray-700">
                  クラウド移行における課題やリスクを分析し、最適な移行方法をご提案いたします。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of_hero-0yfKP1DrjRrxJEIZEtWlnhAoFbESmT.png"
                  alt="IA対策"
                  width={150}
                  height={150}
                  className="mx-auto mb-6 rounded-full"
                />
                <h3 className="font-serif font-bold text-xl mb-4">IA対策</h3>
                <p className="text-gray-700">
                  情報システムを活用した業務改善やデータ分析による効率化をご支援いたします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* チームセクション */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">OUR TEAM</h2>
          <div className="max-w-sm mx-auto text-center">
            <div className="mb-6">
              <Image
                src="https://sjc.microlink.io/VuUNXNW99oOeEjkm7iOsBZ8fnIdnDY44eXfs_e9uk7XxghtUYyGrACxz5UUArEzT3aJJ_lIBgOQsmUj2FYD3gA.jpeg"
                alt="MASANORI TAKEUCHI - Managing Director"
                width={200}
                height={200}
                className="rounded-full mx-auto shadow-lg"
              />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2">MASANORI TAKEUCHI</h3>
            <p className="text-gray-700 mb-6 font-serif italic">Managing Director</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* コンタクトセクション */}
      <section id="contact" className="teal-bg py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">LET&apos;S GET IN TOUCH</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-4">MEET US IN PERSON</h3>
              <p>東京都調布市飛田給1-24-1</p>
              <p>Tobitakyu Chofu-si Tokyo Japan</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-4">THE TRADITIONAL WAY</h3>
              <p>Contact below</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-4">LET&apos;S GET SOCIAL</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white hover:text-gray-200 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コンタクトフォーム */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <form action={formAction} className="space-y-8">
            <div>
              <Input name="name" placeholder="Name(氏名)" className="w-full border-gray-300 text-gray-800" />
              {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
            </div>
            <div>
              <Input name="email" type="email" placeholder="Email" className="w-full border-gray-300 text-gray-800" />
              {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Message（内容をご記入ください）"
                rows={6}
                className="w-full border-gray-300 text-gray-800"
              />
              {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>}
            </div>
            <div className="text-center">
              <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12">
                送信 - Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">Copyright © 2025 OpenFace LLC All rights reserved</p>
        </div>
      </footer>

      {/* Thank You ポップアップ */}
      {showThankYou && state.success && (
        <ThankYouPopup
          message={state.message || "お問い合わせありがとうございます。メッセージが送信されました。"}
          onClose={() => setShowThankYou(false)}
        />
      )}
    </div>
  )
}

