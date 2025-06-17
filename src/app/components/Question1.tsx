'use client'

import { useState } from 'react'
import QuestionLayout from './QuestionLayout'
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function Question1() {
  const [code, setCode] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const handleBack = () => {
    console.log('Go back to previous page')
  }

  const handleHome = () => {
    console.log('Go back to home page')
  }

  const handlePreview = () => {
    setShowPreview(!showPreview)
  }

  return (
    <QuestionLayout
      questionNumber={1}
      title="Frontend Web Application"
      onBack={handleBack}
      onHome={handleHome}
    >
      <div className="space-y-6">
        {/* Question Description */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">โจทย์</h3>
          <p className="text-blue-800 leading-relaxed">
            เมื่อทำการสร้าง Web Application (Frontend) จงเขียน Code สำหรับการแสดงผล 
            ให้ออกมาในรูปแบบ ดังรูป ตัวอย่าง สามารถใช้ Tag HTML, CSS, Bootstrap, Tailwind ฯลฯ ได้
          </p>
        </div>

        {/* Example Image Placeholder */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-600 text-xs">IMAGE</span>
            </div>
            <p className="text-gray-600">
              รูปตัวอย่าง Layout ที่ต้องการ
            </p>
            <p className="text-sm text-gray-500 mt-2">
              (ในการใช้งานจริง จะมีรูปตัวอย่าง layout ที่ต้องการให้เขียนโค้ด)
            </p>
          </div>
        </div>

        {/* Code Editor */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">คำตอบของคุณ</h3>
            <div className="flex space-x-2">
              <button
                onClick={handlePreview}
                className="flex items-center space-x-2 px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <EyeIcon className="w-4 h-4" />
                <span>{showPreview ? 'ซ่อน Preview' : 'แสดง Preview'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Code Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <CodeBracketIcon className="w-4 h-4 inline mr-1" />
                HTML/CSS Code
              </label>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={`<!-- เขียน HTML และ CSS ที่นี่ -->
                <!DOCTYPE html>
                <html lang="th">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>My Web App</title>
                    <style>
                        /* เขียน CSS ที่นี่ */
                    </style>
                </head>
                <body>
                    <!-- เขียน HTML ที่นี่ -->
                </body>
                </html>`}
                className="w-full h-96 font-mono text-sm p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Preview */}
            {showPreview && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <EyeIcon className="w-4 h-4 inline mr-1" />
                  Preview
                </label>
                <div className="h-96 border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    srcDoc={code || '<p style="padding: 20px; color: #666;">เขียนโค้ดเพื่อดู Preview</p>'}
                    className="w-full h-full"
                    title="Code Preview"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 เคล็ดลับ</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• สามารถใช้ HTML, CSS, Bootstrap, Tailwind CSS หรือ Framework อื่นๆ ได้</li>
            <li>• ควรเขียนโค้ดที่สะอาด อ่านง่าย และมี comments อธิบาย</li>
            <li>• ทดสอบการแสดงผลใน Preview ก่อนส่งคำตอบ</li>
            <li>• ให้ความสำคัญกับ Responsive Design</li>
          </ul>
        </div>

        {/* Additional Notes */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-2">หมายเหตุเพิ่มเติม</h4>
          <textarea
            placeholder="เขียนคำอธิบายเพิ่มเติมเกี่ยวกับโค้ดที่เขียน เช่น เหตุผลในการเลือกใช้ Framework นั้นๆ หรือแนวคิดในการออกแบบ..."
            className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
      </div>
    </QuestionLayout>
  )
}