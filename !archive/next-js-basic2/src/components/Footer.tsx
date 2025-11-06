'use client'

import Link from 'next/link'
import { FaHome, FaInfoCircle, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Колонка з інформацією про сайт */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-indigo-500 pb-2">Next.js Learn</h3>
            <p className="text-indigo-200 mb-4">
              Сучасний веб-сайт створений з використанням Next.js, React та Tailwind CSS. Приклад для вивчення
              можливостей фреймворку.
            </p>
          </div>

          {/* Колонка з корисними посиланнями */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-indigo-500 pb-2">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-indigo-200 hover:text-white flex items-center">
                  <FaHome className="mr-2" /> Головна
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-indigo-200 hover:text-white flex items-center">
                  <FaInfoCircle className="mr-2" /> Продукти
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-indigo-200 hover:text-white flex items-center">
                  <FaInfoCircle className="mr-2" /> Блог
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка з контактами */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-indigo-500 pb-2">Контакти</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-indigo-200">
                <FaPhone className="mr-2" /> +38 (050) 123-45-67
              </li>
              <li className="flex items-center text-indigo-200">
                <FaEnvelope className="mr-2" /> info@nextjs-example.com
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a href="#" className="text-indigo-200 hover:text-white">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-indigo-200 hover:text-white">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-indigo-200 hover:text-white">
                  <FaInstagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Копірайт внизу */}
        <div className="border-t border-indigo-500 mt-8 pt-6 text-center text-indigo-300">
          <p>&copy; {currentYear} Next.js Learn. Всі права захищено.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
