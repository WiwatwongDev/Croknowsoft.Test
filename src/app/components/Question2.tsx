'use client'

import { useState } from 'react'
import QuestionLayout from './QuestionLayout'
import { CodeBracketIcon, PlayIcon } from '@heroicons/react/24/outline'

interface SubQuestion {
  id: string
  title: string
  description: string
  example?: string
  placeholder: string
}

const subQuestions: SubQuestion[] = [
  {
    id: '2.1',
    title: 'ตรวจสอบค่า Input',
    description: 'จงเขียนคำสั่งตรวจสอบ ค่า input เพื่อตรวจสอบตามเงื่อนไขต่อไปนี้:\n- ถ้าเป็นค่าว่าง ให้แสดงข้อความว่า "กรุณาระบุข้อความ"\n- ถ้ามีค่า ให้แสดงข้อความจากตัวแปร Input\n- ถ้าเป็น null ให้แสดงข้อความ ว่า "กรุณาระบุข้อความ"',
    placeholder: `// JavaScript Example
function checkInput(input) {
    // เขียนโค้ดตรวจสอบ input ที่นี่
}

// หรือภาษาอื่นๆ ที่ถนัด`
  },
  {
    id: '2.2',
    title: 'ฟังก์ชั่น CalAge',
    description: 'จงเขียน ฟังก์ชั่น "CalAge" คำนวณ อายุ ปัจจุบัน โดย รับค่าเป็น วัน-เดือน-ปี',
    example: 'Int Age = CalAge("01-12-2000");',
    placeholder: `// JavaScript Example
function CalAge(dateString) {
    // เขียนโค้ดคำนวณอายุที่นี่
    // Input format: "DD-MM-YYYY"
    // Return: อายุเป็นตัวเลข
}

// หรือภาษาอื่นๆ ที่ถนัด`
  },
  {
    id: '2.3',
    title: 'ฟังก์ชั่น SumTotal',
    description: 'จงเขียน ฟังก์ชั่น "SumTotal" สำหรับหาผลรวมจาก string Array โดยหาผลรวมเฉพาะค่าที่เป็น Number เท่านั้น',
    example: 'String[] InputArray = ["a","100","b","99","Hello","*", "20","1A","10+"];\nInt Result = SumTotal(InputArray);',
    placeholder: `// JavaScript Example
function SumTotal(inputArray) {
    // เขียนโค้ดหาผลรวมที่นี่
    // ผลรวมเฉพาะตัวเลขที่ถูกต้อง
    // จากตัวอย่าง: 100 + 99 + 20 = 219
}

// หรือภาษาอื่นๆ ที่ถนัด`
  }
]

export default function Question2() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleBack = () => {
    console.log('Go back to previous page')
  }

  const handleHome = () => {
    console.log('Go back to home page')
  }

  const testCode = (questionId: string) => {
    const code = answers[questionId]
    if (!code.trim()) {
      alert('กรุณาเขียนโค้ดก่อนทดสอบ')
      return
    }
    
    // Simple code testing (in real app, would use proper code execution)
    alert(`กำลังทดสอบโค้ดสำหรับข้อ ${questionId}`)
  }

  return (
    <QuestionLayout
      questionNumber={2}
      title="Programming Logic"
      onBack={handleBack}
      onHome={handleHome}
    >
      <div className="space-y-8">
        {/* Question Description */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-3">โจทย์</h3>
          <p className="text-green-800 leading-relaxed">
            จงเขียน คำสั่งสำหรับการแสดงผลตามโจทย์ต่อไปนี้ 
            (สามารถใช้ภาษาที่ตนเองถนัดได้ หรือเขียนเป็น Flow Chart ได้)
          </p>
        </div>

        {/* Language Selection */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3">เลือกภาษาโปรแกรมมิ่ง</h4>
          <div className="flex flex-wrap gap-2">
            {['javascript', 'python', 'java', 'csharp', 'php', 'other'].map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedLanguage === lang
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {lang === 'javascript' ? 'JavaScript' : 
                 lang === 'python' ? 'Python' :
                 lang === 'java' ? 'Java' :
                 lang === 'csharp' ? 'C#' :
                 lang === 'php' ? 'PHP' : 'อื่นๆ'}
              </button>
            ))}
          </div>
        </div>

        {/* Sub Questions */}
        {subQuestions.map((subQ, index) => (
          <div key={subQ.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                ข้อ {subQ.id} {subQ.title}
              </h3>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Description */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">โจทย์</h4>
                <pre className="text-blue-800 text-sm whitespace-pre-line font-sans">
                  {subQ.description}
                </pre>
                {subQ.example && (
                  <div className="mt-3 p-3 bg-white border border-blue-300 rounded">
                    <p className="text-blue-900 font-medium text-sm mb-1">ตัวอย่าง:</p>
                    <code className="text-blue-800 text-sm">{subQ.example}</code>
                  </div>
                )}
              </div>

              {/* Code Editor */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <CodeBracketIcon className="w-4 h-4 inline mr-1" />
                    คำตอบของคุณ
                  </label>
                  <button
                    onClick={() => testCode(subQ.id)}
                    className="flex items-center space-x-1 px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    <PlayIcon className="w-3 h-3" />
                    <span>ทดสอบ</span>
                  </button>
                </div>
                <textarea
                  value={answers[subQ.id] || ''}
                  onChange={(e) => handleAnswerChange(subQ.id, e.target.value)}
                  placeholder={subQ.placeholder}
                  className="w-full h-48 font-mono text-sm p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Additional Notes for this sub-question */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  หมายเหตุเพิ่มเติม (ถ้ามี)
                </label>
                <textarea
                  placeholder="อธิบายแนวคิดหรือวิธีการแก้ปัญหา..."
                  className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 เคล็ดลับ</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• สามารถเขียนด้วยภาษาโปรแกรมมิ่งที่ถนัด หรือเขียนเป็น Pseudocode ก็ได้</li>
            <li>• ควรมี Error Handling และตรวจสอบ Input ให้ครบถ้วน</li>
            <li>• เขียน Comments อธิบายขั้นตอนการทำงาน</li>
            <li>• ทดสอบกับข้อมูลหลากหลายกรณี (Edge Cases)</li>
          </ul>
        </div>

        {/* Test Cases Reference */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3">กรณีทดสอบสำหรับอ้างอิง</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-gray-700 mb-2">ข้อ 2.1 - ตรวจสอบ Input</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• Input: "" → "กรุณาระบุข้อความ"</li>
                <li>• Input: null → "กรุณาระบุข้อความ"</li>
                <li>• Input: "Hello" → "Hello"</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-2">ข้อ 2.2 - CalAge</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• "01-12-2000" → 24 ปี</li>
                <li>• "15-06-1990" → 35 ปี</li>
                <li>• วันที่ปัจจุบัน → 0 ปี</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-2">ข้อ 2.3 - SumTotal</h5>
              <ul className="text-gray-600 space-y-1">
                <li>• ["100","99","20"] → 219</li>
                <li>• ["a","1A","10+"] → 0</li>
                <li>• ["50","abc","25"] → 75</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </QuestionLayout>
  )
}