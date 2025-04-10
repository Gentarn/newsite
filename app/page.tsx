"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter as TwitterIcon, X as XIcon, Linkedin, Facebook, MapPin, Mail, Heart } from "lucide-react"
import { ContactForm } from "@/components/ui/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 w-full bg-white/95 text-gray-800 px-4 py-3 border-b z-50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="OPEN FACE LLC Logo"
              width={100}
              height={25}
              priority
            />
            <span className="font-montserrat text-2xl">OPEN FACE LLC</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="font-montserrat hover:text-gold transition-colors">
              OUR SERVICE
            </a>
            <a href="#about" className="font-montserrat hover:text-gold transition-colors">
              ABOUT US
            </a>
            <a href="#contact" className="font-montserrat hover:text-gold transition-colors">
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative gradient-bg pt-[72px]">
        <div className="container mx-auto px-4">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src="/images/HeroTop.png"
              alt="ソリューションイラスト - ビジネスパーソンと解決策"
              fill
              style={{ objectFit: "contain" }}
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="container mx-auto px-4">
            <p className="text-[32px] text-center font-vollkorn py-8">ビジネス変革でデータ価値を最大化させるパートナー</p>
          </div>
        </div>
      </section>

      {/* What's Open Face セクション */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[18px] font-sans font-bold mb-6">What&apos;s Open Face</h2>
            <p className="text-gray-700 leading-relaxed mb-12">
              新型コロナの影響により、働き方や業務のあり方が変わってきた今日となりました。これに伴い、「モバイルワーク環境」「クラウドファースト」「モバイルファースト」とお客様お持ちの課題も変革してきました。中小企業においても、この時代に適応を図る動きがありますが、弊社は設立当初から「クラウドインテグレーター」を標榜し、お客様とともに解決の道筋とソリューションを提供してまいりました。
            </p>
            <h2 className="text-[18px] font-sans font-bold mb-6">私達の強み</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-white shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Image
                  src="/images/BPM-p-500.jpeg"
                  alt="業務プロセス改善"
                  width={450}
                  height={450}
                  className="mx-auto mb-6 rounded-full"
                />
                <h3 className="font-serif font-bold text-xl mb-4">業務プロセス改善</h3>
                <p className="text-gray-700 text-left">
                  手作業やExcelを使った今までの業務、ITを導入すれば効率化できると思っていませんか？
                  クラウド化、リモートワーク化、データの可視化（=デジタル化）様々な目的を達成する第一歩は自社業務をIT導入に合わせた改善を行うところからです。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Image
                  src="/images/LowCode.jpeg"
                  alt="ローコード/ノーコード開発"
                  width={450}
                  height={450}
                  className="mx-auto mb-6 rounded-full"
                />
                <h3 className="font-serif font-bold text-xl mb-4">ローコード/ノーコード開発</h3>
                <p className="text-gray-700 text-left">
                  「ノーコード・ローコード開発」とは、プログラミングの知識がなくてもアプリを開発できる手法です。近年では、生成AIと連携することで、誰でも直感的にシステムを構築できる時代へと進化しています。
                  <br /><br />
                  当社では、目的やスキルに応じたツール選定から導入・開発・操作支援までをトータルでサポートいたします。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Image
                  src="/images/CloudMigration.jpeg"
                  alt="クラウド移行サポート"
                  width={450}
                  height={450}
                  className="mx-auto mb-6 rounded-full"
                />
                <h3 className="font-serif font-bold text-xl mb-4">クラウド移行サポート</h3>
                <p className="text-gray-700 text-left">
                  クラウド移行におけるハードウェアの移行は始まりに過ぎず、企業のプロセスを実現させるためには、最適なソリューションが必要です。弊社は中立な立場から、業界や業務、企業風土に合わせた最適な提案を行い、お客様をサポートいたします。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Image
                  src="/images/ITmanage.jpeg"
                  alt="IA対策"
                  width={450}
                  height={450}
                  className="mx-auto mb-6 rounded-full"
                />
                <h3 className="font-serif font-bold text-xl mb-4">AI利用サポート</h3>
                <p className="text-gray-700 text-left">
                  AIを活用した業務改善やデータ分析による効率化をご支援いたします。
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
                src="/images/Masanori.jpeg"
                alt="MASANORI TAKEUCHI - Managing Director"
                width={200}
                height={200}
                className="rounded-full mx-auto shadow-lg"
              />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2">MASANORI TAKEUCHI</h3>
            <p className="text-gray-700 mb-6 font-serif italic">Managing Director</p>
            <div className="flex justify-center space-x-4">
              <a href="https://x.com/matakeuchi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                <Image
                  src="/images/twitter.jpg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a href="https://www.linkedin.com/in/openfacellc/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
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
                  <Image
                    src="/images/twitter.jpg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
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
          <ContactForm />
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">Copyright © 2025 OpenFace LLC All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
