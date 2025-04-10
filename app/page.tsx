import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-6">Webサイトへようこそ</h1>
              <p className="text-xl text-gray-600 mb-8">
                革新的なソリューションで、あなたのビジネスの成長をサポートします。
              </p>
              <Link
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/placeholder.svg"
                alt="Hero image"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">サービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Webデザイン",
                description: "モダンで使いやすいウェブサイトを制作します。",
                icon: "🎨",
              },
              {
                title: "アプリ開発",
                description: "ニーズに合わせたカスタムアプリケーションを開発します。",
                icon: "💻",
              },
              {
                title: "コンサルティング",
                description: "デジタル戦略の策定から実施までサポートします。",
                icon: "📊",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">お問い合わせ</h2>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">会社情報</h3>
              <p>〒123-4567</p>
              <p>東京都渋谷区...</p>
              <p>TEL: 03-1234-5678</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-400">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-blue-400">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">SNS</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-blue-400">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
