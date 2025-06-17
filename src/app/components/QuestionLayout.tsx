'use client'

import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline'

interface QuestionLayoutProps {
  questionNumber: number
  title: string
  children: React.ReactNode
  onBack?: () => void
  onHome?: () => void
}

export default function QuestionLayout({ 
  questionNumber, 
  title, 
  children, 
  onBack,
  onHome 
}: QuestionLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>ย้อนกลับ</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <button
                onClick={onHome}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <HomeIcon className="w-5 h-5" />
                <span>หน้าหลัก</span>
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              แบบทดสอบ Programmer
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg">
          {/* Question Header */}
          <div className="px-8 py-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">{questionNumber}</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {title}
                </h1>
              </div>
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            {children}
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <div className="flex items-center justify-between">
              <div className="flex space-x-3">
                <button
                  onClick={onBack}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  ย้อนกลับ
                </button>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={onHome}
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  กลับหน้าหลัก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}