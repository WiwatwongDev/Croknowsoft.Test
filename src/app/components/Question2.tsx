// src/app/components/Question2.tsx

'use client'

import { useState } from 'react'
import QuestionLayout from './QuestionLayout'
import { CodeBracketIcon, PlayIcon, CheckCircleIcon, CpuChipIcon, LightBulbIcon } from '@heroicons/react/24/outline'

interface Question2Props {
  onBack?: () => void
  onHome?: () => void
}

// Working implementations
const checkInput = (input: any): string => {
  if (input === null || input === undefined) {
    return "กรุณาระบุข้อความ"
  }
  if (input === "" || String(input).trim() === "") {
    return "กรุณาระบุข้อความ"
  }
  return String(input)
}

const CalAge = (dateString: string): number => {
  try {
    const parts = dateString.split('-')
    const day = parseInt(parts[0])
    const month = parseInt(parts[1])
    const year = parseInt(parts[2])
    
    const birthDate = new Date(year, month - 1, day)
    const today = new Date()
    
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    
    return age
  } catch (error) {
    return 0
  }
}

const SumTotal = (inputArray: string[]): number => {
  let sum = 0
  
  for (let i = 0; i < inputArray.length; i++) {
    const value = inputArray[i]
    const numValue = parseFloat(value)
    
    if (!isNaN(numValue) && isFinite(numValue)) {
      if (value.toString().trim() === numValue.toString()) {
        sum += numValue
      }
    }
  }
  
  return sum
}

export default function Question2({ onBack, onHome }: Question2Props) {
  const [selectedQuestion, setSelectedQuestion] = useState<'2.1' | '2.2' | '2.3'>('2.1')
  
  // Test states for each question
  const [testInput21, setTestInput21] = useState('')
  const [result21, setResult21] = useState<string>('')
  
  const [testInput22, setTestInput22] = useState('01-12-2000')
  const [result22, setResult22] = useState<string>('')
  
  const [result23, setResult23] = useState<string>('')
  const [analysis23, setAnalysis23] = useState<string[]>([])

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      console.log('Go back to previous page')
    }
  }

  const handleHome = () => {
    if (onHome) {
      onHome()
    } else {
      console.log('Go back to home page')
    }
  }

  // Test functions
  const testQuestion21 = () => {
    const result = checkInput(testInput21 === 'null' ? null : testInput21)
    setResult21(result)
  }

  const testQuestion22 = () => {
    const age = CalAge(testInput22)
    setResult22(`${age} ปี`)
  }

  const testQuestion23 = () => {
    const inputArray = ["a","100","b","99","Hello","*", "20","1A","10+"]
    const result = SumTotal(inputArray)
    setResult23(`${result}`)
    
    const analysis = inputArray.map(item => {
      const numValue = parseFloat(item)
      const isValid = !isNaN(numValue) && isFinite(numValue) && 
                     item.toString().trim() === numValue.toString()
      return `"${item}" → ${isValid ? `${numValue} ✓` : 'ไม่ใช่ตัวเลข ✗'}`
    })
    setAnalysis23(analysis)
  }

  const codeExamples = {
    '2.1': `function checkInput(input) {
    // ตรวจสอบค่า null และ undefined
    if (input === null || input === undefined) {
        return "กรุณาระบุข้อความ";
    }
    
    // ตรวจสอบค่าว่าง (empty string หรือ whitespace)
    if (input === "" || input.trim() === "") {
        return "กรุณาระบุข้อความ";
    }
    
    // ถ้ามีค่า ให้แสดงข้อความจากตัวแปร Input
    return input;
}`,
    '2.2': `function CalAge(dateString) {
    try {
        // แยกวัน-เดือน-ปี จาก format "DD-MM-YYYY"
        const parts = dateString.split('-');
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        
        // สร้าง Date object (เดือนใน JS เริ่มจาก 0)
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        
        // คำนวณอายุ
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        // ถ้ายังไม่ถึงวันเกิดในปีนี้ ให้ลบอายุ 1 ปี
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    } catch (error) {
        return 0; // กรณี input ไม่ถูกต้อง
    }
}`,
    '2.3': `function SumTotal(inputArray) {
    let sum = 0;
    
    for (let i = 0; i < inputArray.length; i++) {
        const value = inputArray[i];
        
        // ตรวจสอบว่าเป็นตัวเลขที่ถูกต้องหรือไม่
        const numValue = parseFloat(value);
        
        // ถ้าเป็นตัวเลขที่ถูกต้องและไม่ใช่ NaN
        if (!isNaN(numValue) && isFinite(numValue)) {
            // ตรวจสอบเพิ่มเติมว่า string นั้นเป็นตัวเลขล้วนๆ
            if (value.toString().trim() === numValue.toString()) {
                sum += numValue;
            }
        }
    }
    
    return sum;
}`
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

        {/* Answer Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">🎯 คำตอบที่สมบูรณ์</h3>
          <p className="text-blue-800 leading-relaxed">
            แสดงคำตอบสำเร็จรูปทั้ง 3 ข้อ พร้อมระบบทดสอบที่ทำงานได้จริง
          </p>
        </div>

        {/* Question Navigator */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <CpuChipIcon className="w-5 h-5 mr-2" />
            เลือกดูคำตอบแต่ละข้อ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: '2.1', title: 'ตรวจสอบ Input', color: 'bg-blue-500', desc: 'ตรวจสอบค่าว่าง, null, undefined' },
              { id: '2.2', title: 'คำนวณอายุ (CalAge)', color: 'bg-green-500', desc: 'คำนวณจากวัน-เดือน-ปี' },
              { id: '2.3', title: 'หาผลรวม (SumTotal)', color: 'bg-purple-500', desc: 'รวมเฉพาะตัวเลขใน String Array' }
            ].map((q) => (
              <button
                key={q.id}
                onClick={() => setSelectedQuestion(q.id as '2.1' | '2.2' | '2.3')}
                className={`p-4 rounded-lg text-white font-medium transition-all text-left ${
                  selectedQuestion === q.id ? q.color : 'bg-gray-400'
                } hover:opacity-90 transform hover:scale-105`}
              >
                <div className="font-semibold">ข้อ {q.id}: {q.title}</div>
                <div className="text-sm opacity-90 mt-1">{q.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Question 2.1 - Check Input */}
        {selectedQuestion === '2.1' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Code */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                ข้อ 2.1 - คำตอบ
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{codeExamples['2.1']}</code>
              </pre>
            </div>

            {/* Testing */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <PlayIcon className="w-5 h-5 mr-2" />
                ทดสอบการทำงาน
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ป้อนค่าทดสอบ:
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={testInput21}
                      onChange={(e) => setTestInput21(e.target.value)}
                      placeholder="พิมพ์ข้อความ หรือ 'null' เพื่อทดสอบ"
                      className="flex-1 px-3 py-2 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                    />
                    <button
                      onClick={testQuestion21}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      ทดสอบ
                    </button>
                  </div>
                </div>

                {result21 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">ผลลัพธ์:</h4>
                    <code className="text-green-700 bg-white px-3 py-1 rounded">"{result21}"</code>
                  </div>
                )}

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">กรณีทดสอบ:</h4>
                  <div className="space-y-2 text-sm text-yellow-700">
                    <div className="flex justify-between">
                      <span>Empty string (""):</span>
                      <button 
                        onClick={() => { setTestInput21(''); testQuestion21() }}
                        className="text-blue-600 hover:underline"
                      >
                        ทดสอบ
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <span>Null value:</span>
                      <button 
                        onClick={() => { setTestInput21('null'); testQuestion21() }}
                        className="text-blue-600 hover:underline"
                      >
                        ทดสอบ
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <span>Whitespace ("   "):</span>
                      <button 
                        onClick={() => { setTestInput21('   '); testQuestion21() }}
                        className="text-blue-600 hover:underline"
                      >
                        ทดสอบ
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <span>Valid text ("Hello"):</span>
                      <button 
                        onClick={() => { setTestInput21('Hello'); testQuestion21() }}
                        className="text-blue-600 hover:underline"
                      >
                        ทดสอบ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Question 2.2 - Calculate Age */}
        {selectedQuestion === '2.2' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Code */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                ข้อ 2.2 - คำตอบ
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{codeExamples['2.2']}</code>
              </pre>
            </div>

            {/* Testing */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <PlayIcon className="w-5 h-5 mr-2" />
                ทดสอบการทำงาน
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    วันเกิด (DD-MM-YYYY):
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={testInput22}
                      onChange={(e) => setTestInput22(e.target.value)}
                      placeholder="01-12-2000"
                      className="flex-1 px-3 py-2 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-500 font-medium"
                    />
                    <button
                      onClick={testQuestion22}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      คำนวณ
                    </button>
                  </div>
                </div>

                {result22 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">อายุปัจจุบัน:</h4>
                    <code className="text-green-700 bg-white px-3 py-1 rounded text-lg">{result22}</code>
                  </div>
                )}

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">ตัวอย่างวันเกิด:</h4>
                  <div className="space-y-2 text-sm text-yellow-700">
                    <div className="flex justify-between">
                      <span>1 ธันวาคม 2000:</span>
                      <button 
                        onClick={() => { setTestInput22('01-12-2000'); testQuestion22() }}
                        className="text-blue-600 hover:underline"
                      >
                        ทดสอบ
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <span>15 มิถุนายน 1990:</span>
                      <button 
                        onClick={() => { setTestInput22('15-06-1990'); testQuestion22() }}
                        className="text-blue-600 hover:underline"
                      >
                        ทดสอบ
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <span>31 ธันวาคม 1995:</span>
                      <button 
                        onClick={() => { setTestInput22('31-12-1995'); testQuestion22() }}
                        className="text-blue-600 hover:underline"
                      >
                        ทดสอบ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Question 2.3 - Sum Total */}
        {selectedQuestion === '2.3' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Code */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                ข้อ 2.3 - คำตอบ
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{codeExamples['2.3']}</code>
              </pre>
              
              <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">โจทย์ที่กำหนด:</h4>
                <code className="text-purple-600 text-sm">
                  String[] InputArray = ["a","100","b","99","Hello","*", "20","1A","10+"];
                </code>
              </div>
            </div>

            {/* Testing */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <PlayIcon className="w-5 h-5 mr-2" />
                ทดสอบการทำงาน
              </h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <button
                    onClick={testQuestion23}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
                  >
                    คำนวณผลรวม
                  </button>
                </div>

                {result23 && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">ผลรวมเฉพาะตัวเลข:</h4>
                    <code className="text-purple-700 bg-white px-4 py-2 rounded text-xl font-bold">{result23}</code>
                    <p className="text-sm text-purple-600 mt-2">100 + 99 + 20 = 219</p>
                  </div>
                )}

                {analysis23.length > 0 && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">การวิเคราะห์แต่ละตัว:</h4>
                    <div className="space-y-1 text-sm font-mono">
                      {analysis23.map((item, index) => (
                        <div key={index} className={`p-2 rounded ${
                          item.includes('✓') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Explanation */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
            <LightBulbIcon className="w-5 h-5 mr-2" />
            คำอธิบายแนวคิดการแก้ปัญหา
          </h3>
          {selectedQuestion === '2.1' && (
            <div className="text-blue-800 space-y-3">
              <p><strong>การตรวจสอบ Input อย่างครอบคลุม:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm bg-white p-4 rounded">
                <li><strong>null/undefined:</strong> ตรวจสอบก่อนเสมอเพื่อป้องกัน Runtime Error</li>
                <li><strong>Empty string:</strong> ตรวจสอบ "" (string ว่าง)</li>
                <li><strong>Whitespace:</strong> ใช้ trim() เอาช่องว่างออก แล้วเช็คว่าเหลืออะไรไหม</li>
                <li><strong>Valid input:</strong> ส่งคืนค่าเดิมเมื่อผ่านการตรวจสอบทั้งหมด</li>
              </ul>
            </div>
          )}
          {selectedQuestion === '2.2' && (
            <div className="text-blue-800 space-y-3">
              <p><strong>การคำนวณอายุที่แม่นยำ:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm bg-white p-4 rounded">
                <li><strong>Parse date:</strong> แยก DD-MM-YYYY ด้วย split('-')</li>
                <li><strong>Date object:</strong> สร้าง Date โดยระวังเดือนใน JS เริ่มจาก 0</li>
                <li><strong>Basic calculation:</strong> ปีปัจจุบัน - ปีเกิด</li>
                <li><strong>Birthday adjustment:</strong> ลบ 1 ถ้ายังไม่ถึงวันเกิดในปีนี้</li>
                <li><strong>Error handling:</strong> คืนค่า 0 เมื่อ input ผิดพลาด</li>
              </ul>
            </div>
          )}
          {selectedQuestion === '2.3' && (
            <div className="text-blue-800 space-y-3">
              <p><strong>การกรองและรวมตัวเลขจาก Array:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm bg-white p-4 rounded">
                <li><strong>Loop through array:</strong> วนลูปทุกตัวใน array</li>
                <li><strong>Parse to number:</strong> ใช้ parseFloat() แปลงเป็นตัวเลข</li>
                <li><strong>Validation:</strong> เช็ค isNaN() และ isFinite() เพื่อความแม่นยำ</li>
                <li><strong>String purity:</strong> ตรวจสอบว่า string เป็นตัวเลขล้วน (ไม่มีตัวอักษรผสม)</li>
                <li><strong>Accumulation:</strong> รวมเฉพาะตัวเลขที่ผ่านการตรวจสอบ</li>
              </ul>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-4">📝 สรุปคำตอบทั้ง 3 ข้อ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-orange-800">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-blue-600 mb-2">ข้อ 2.1 - checkInput</h4>
              <p className="text-sm">ตรวจสอบ input ครอบคลุม null, undefined, empty string และ whitespace</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-green-600 mb-2">ข้อ 2.2 - CalAge</h4>
              <p className="text-sm">คำนวณอายุจากวันเกิด format DD-MM-YYYY อย่างแม่นยำ</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-purple-600 mb-2">ข้อ 2.3 - SumTotal</h4>
              <p className="text-sm">หาผลรวมเฉพาะตัวเลขที่ถูกต้องจาก string array</p>
            </div>
          </div>
        </div>

        {/* Technical Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">🔧 เทคนิคที่ใช้</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• <strong>Error Handling:</strong> try-catch และการตรวจสอบ input ครอบคลุม</li>
            <li>• <strong>Type Checking:</strong> ตรวจสอบประเภทข้อมูลอย่างรัดกุม</li>
            <li>• <strong>String Manipulation:</strong> split(), trim(), toString() ใช้อย่างถูกต้อง</li>
            <li>• <strong>Date Calculation:</strong> จัดการ Date object และ timezone</li>
            <li>• <strong>Number Validation:</strong> parseFloat(), isNaN(), isFinite() เพื่อความแม่นยำ</li>
          </ul>
        </div>
      </div>
    </QuestionLayout>
  )
}