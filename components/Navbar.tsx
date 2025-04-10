'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <Link href="/" className="text-xl font-bold">
            Your Company
          </Link>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="メニュー"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ホーム
            </Link>
            <Link href="#services" className="hover:text-blue-600 transition-colors">
              サービス
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                サービス
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}