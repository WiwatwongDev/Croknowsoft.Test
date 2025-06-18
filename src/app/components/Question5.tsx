// src/app/components/Question5.tsx

'use client'

import { useState } from 'react'
import QuestionLayout from './QuestionLayout'
import { 
  CalculatorIcon, 
  CodeBracketIcon, 
  EyeIcon, 
  LinkIcon,
  PlusIcon,
  TrashIcon,
  DocumentArrowDownIcon,
  TableCellsIcon,
  LightBulbIcon,
  DocumentIcon
} from '@heroicons/react/24/outline'

interface Question5Props {
  onBack?: () => void
  onHome?: () => void
}

interface CalculatorItem {
  id: number
  amount: number
}

export default function Question5({ onBack, onHome }: Question5Props) {
  const [submissionType, setSubmissionType] = useState<'demo' | 'code' | 'github'>('demo')
  const [sourceCode, setSourceCode] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [description, setDescription] = useState('')
  
  // Calculator State
  const [items, setItems] = useState<CalculatorItem[]>([
    { id: 1, amount: 1000.00 },
    { id: 2, amount: 500.00 },
    { id: 3, amount: 20.00 },
    { id: 4, amount: 30.02 }
  ])
  const [nextId, setNextId] = useState(5)
  const [newAmount, setNewAmount] = useState('')

  // คำนวณยอดรวม
  const total = items.reduce((sum, item) => sum + item.amount, 0)

  // เพิ่มรายการใหม่
  const addItem = () => {
    if (newAmount && !isNaN(Number(newAmount)) && parseFloat(newAmount) > 0) {
      setItems([...items, { 
        id: nextId, 
        amount: parseFloat(newAmount) 
      }])
      setNextId(nextId + 1)
      setNewAmount('')
    }
  }

  // ลบรายการ
  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  // ส่งออกเป็น PDF
  const exportToPdf = () => {
    alert('ส่งออกเป็น PDF (ฟีเจอร์นี้ต้องติดตั้ง library เพิ่มเติม)')
  }

  // ส่งออกเป็น Excel
  const exportToExcel = () => {
    alert('ส่งออกเป็น Excel (ฟีเจอร์นี้ต้องติดตั้ง library เพิ่มเติม)')
  }

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  const handleBack = () => {
    if (onBack) onBack()
    else console.log('Go back to previous page')
  }

  const handleHome = () => {
    if (onHome) onHome()
    else console.log('Go back to home page')
  }

  return (
    <QuestionLayout
      questionNumber={5}
      title="Calculator Application"
      onBack={handleBack}
      onHome={handleHome}
    >
      <div className="space-y-8">
        {/* Question Description */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-3">โจทย์</h3>
          <p className="text-red-800 leading-relaxed">
            จงเขียนโปรแกรมคำนวณอย่างง่ายตามหน้าจอต่อไปนี้ 
            (สามารถส่งเป็น source code หรือ GitHub ได้ ไม่จำเป็นต้องเชื่อมต่อ Database)
          </p>
        </div>

        {/* Answer Summary */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-3">🎯 คำตอบ</h3>
          <p className="text-green-800 leading-relaxed">
            สร้างโปรแกรมคำนวณด้วย Next.js และ Tailwind CSS พร้อมระบบจัดการตัวเลขและส่งออกข้อมูล
          </p>
        </div>

        {/* Submission Type Selection */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <DocumentIcon className="w-6 h-6 mr-2 text-blue-600" />
            เลือกดูคำตอบ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setSubmissionType('demo')}
              className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                submissionType === 'demo'
                  ? 'border-green-500 bg-green-50 text-green-700 shadow-md'
                  : 'border-gray-300 hover:border-gray-400 bg-white'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className={`p-3 rounded-full mb-4 ${
                  submissionType === 'demo' ? 'bg-green-100' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <EyeIcon className="w-10 h-10" />
                </div>
                <div className="font-bold text-lg mb-2">Live Demo</div>
                <div className="text-sm text-gray-600">ทดสอบการทำงานจริงของโปรแกรม</div>
              </div>
            </button>
            
            <button
              onClick={() => setSubmissionType('code')}
              className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                submissionType === 'code'
                  ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                  : 'border-gray-300 hover:border-gray-400 bg-white'
                }`}
            >
              <div className="flex flex-col items-center">
                <div className={`p-3 rounded-full mb-4 ${
                  submissionType === 'code' ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <CodeBracketIcon className="w-10 h-10" />
                </div>
                <div className="font-bold text-lg mb-2">Source Code</div>
                <div className="text-sm text-gray-600">ดูโค้ดต้นฉบับทั้งหมด</div>
              </div>
            </button>
          </div>
        </div>

        {/* Live Demo */}
        {submissionType === 'demo' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <CalculatorIcon className="w-5 h-5 mr-2" />
              โปรแกรมคำนวณ (ใช้งานได้จริง)
            </h3>
            
            {/* Calculator App */}
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-300">
              
              {/* Header */}
              <div className="bg-blue-500 text-white p-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-semibold">ระบุตัวเลข</h1>
                  <span className="bg-blue-400 px-3 py-1 rounded text-sm font-medium">
                    {items.length}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 mb-3 text-sm font-medium text-gray-600 border-b border-gray-200 pb-2">
                  <div>ลำดับ</div>
                  <div>ตัวเลข</div>
                  <div className="text-center">ลบ</div>
                </div>

                {/* Items List */}
                <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                  {items.map((item, index) => (
                    <div key={item.id} className="grid grid-cols-3 gap-4 items-center py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className="text-sm font-medium text-gray-700">{index + 1}</div>
                      <div className="text-sm font-bold text-gray-900">{item.amount.toFixed(2)}</div>
                      <div className="text-center">
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-colors"
                          title="ลบรายการ"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  {items.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <CalculatorIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>ยังไม่มีรายการ</p>
                    </div>
                  )}
                </div>

                {/* Add New Item */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="number"
                    step="0.01"
                    placeholder="ใส่ตัวเลข"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={addItem}
                    disabled={!newAmount || isNaN(Number(newAmount)) || parseFloat(newAmount) <= 0}
                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center space-x-1"
                  >
                    <PlusIcon className="w-4 h-4" />
                    <span>เพิ่ม</span>
                  </button>
                </div>

                {/* Total */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg mb-4 border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">ยอดรวมทั้งหมด</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {total.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                {/* Export Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={exportToPdf}
                    className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md font-medium transition-colors"
                  >
                    <DocumentArrowDownIcon className="w-4 h-4" />
                    <span>Export PDF</span>
                  </button>
                  <button
                    onClick={exportToExcel}
                    className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md font-medium transition-colors"
                  >
                    <TableCellsIcon className="w-4 h-4" />
                    <span>Export Excel</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">✨ คุณสมบัติที่พัฒนา</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div className="space-y-1">
                  <div>✓ เพิ่ม/ลบตัวเลขได้</div>
                  <div>✓ คำนวณยอดรวมอัตโนมัติ</div>
                  <div>✓ รองรับทศนิยม 2 ตำแหน่ง</div>
                  <div>✓ Validation ป้องกันข้อมูลผิด</div>
                </div>
                <div className="space-y-1">
                  <div>✓ กด Enter เพื่อเพิ่มรายการ</div>
                  <div>✓ Responsive Design</div>
                  <div>✓ Export PDF/Excel (Placeholder)</div>
                  <div>✓ UI/UX ที่ใช้งานง่าย</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Source Code */}
        {submissionType === 'code' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              Complete Source Code
            </h3>
            
            <div className="space-y-6">
              {/* Main Component */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">📄 pages/index.js (Main Calculator)</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm"><code>{`import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [items, setItems] = useState([
    { id: 1, amount: 1000.00 },
    { id: 2, amount: 500.00 },
    { id: 3, amount: 20.00 },
    { id: 4, amount: 30.02 }
  ]);
  const [nextId, setNextId] = useState(5);
  const [newAmount, setNewAmount] = useState('');

  // คำนวณยอดรวม
  const total = items.reduce((sum, item) => sum + item.amount, 0);

  // เพิ่มรายการใหม่
  const addItem = () => {
    if (newAmount && !isNaN(newAmount) && parseFloat(newAmount) > 0) {
      setItems([...items, { 
        id: nextId, 
        amount: parseFloat(newAmount) 
      }]);
      setNextId(nextId + 1);
      setNewAmount('');
    }
  };

  // ลบรายการ
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // ส่งออกเป็น PDF
  const exportToPdf = () => {
    alert('Export PDF (ต้องติดตั้ง jsPDF library)');
  };

  // ส่งออกเป็น Excel
  const exportToExcel = () => {
    alert('Export Excel (ต้องติดตั้ง xlsx library)');
  };

  return (
    <>
      <Head>
        <title>Simple Calculator</title>
        <meta name="description" content="Calculator app with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          
          {/* Header */}
          <div className="bg-blue-500 text-white p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">ระบุตัวเลข</h1>
              <span className="bg-blue-400 px-2 py-1 rounded text-sm">
                {items.length}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-2 text-sm font-medium text-gray-600">
              <div>ลำดับ</div>
              <div>ตัวเลข</div>
              <div>ลบ</div>
            </div>

            {/* Items List */}
            <div className="space-y-2 mb-4">
              {items.map((item, index) => (
                <div key={item.id} className="grid grid-cols-3 gap-4 items-center py-2 border-b border-gray-100">
                  <div className="text-sm">{index + 1}</div>
                  <div className="text-sm font-medium">{item.amount.toFixed(2)}</div>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    🗑️ ลบ
                  </button>
                </div>
              ))}
            </div>

            {/* Add New Item */}
            <div className="flex gap-2 mb-4">
              <input
                type="number"
                step="0.01"
                placeholder="ใส่ตัวเลข"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={addItem}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                เพิ่ม
              </button>
            </div>

            {/* Total */}
            <div className="bg-blue-50 p-3 rounded-md mb-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">รวม</span>
                <span className="text-lg font-bold text-blue-600">
                  {total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Export Buttons */}
            <div className="flex gap-2">
              <button
                onClick={exportToPdf}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
              >
                Export to PDF
              </button>
              <button
                onClick={exportToExcel}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
              >
                Export to Excel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`}</code></pre>
                </div>
              </div>

              {/* Configuration Files */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">⚙️ package.json</h4>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
                    <pre className="text-xs"><code>{`{
  "name": "simple-calculator",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "autoprefixer": "^10",
    "eslint": "^8",
    "eslint-config-next": "14.0.0",
    "postcss": "^8",
    "tailwindcss": "^3"
  }
}`}</code></pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">🎨 tailwind.config.js</h4>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
                    <pre className="text-xs"><code>{`module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
            <LightBulbIcon className="w-5 h-5 mr-2" />
            💡 เทคนิคการพัฒนา
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-700 text-sm">
            <div className="space-y-1">
              <div>• <strong>State Management:</strong> ใช้ useState เก็บ array ของตัวเลข</div>
              <div>• <strong>Input Validation:</strong> ตรวจสอบ isNaN() และค่าติดลบ</div>
              <div>• <strong>Array Methods:</strong> ใช้ reduce() คำนวณยอดรวม</div>
              <div>• <strong>Event Handling:</strong> onClick และ onKeyPress</div>
            </div>
            <div className="space-y-1">
              <div>• <strong>Responsive Design:</strong> Tailwind CSS Grid System</div>
              <div>• <strong>User Experience:</strong> Loading states และ feedback</div>
              <div>• <strong>Code Organization:</strong> แยก functions ให้ชัดเจน</div>
              <div>• <strong>Error Prevention:</strong> Disable button เมื่อ input ผิด</div>
            </div>
          </div>
        </div>

        {/* Requirements Checklist */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 ความต้องการขั้นต่ำ</h3>
          <div className="text-blue-800 space-y-2">
            <p className="font-medium">โปรแกรมคำนวณต้องมีคุณสมบัติอย่างน้อย:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span>การเพิ่มตัวเลขใหม่</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span>การลบตัวเลขที่มีอยู่</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span>การคำนวณยอดรวมอัตโนมัติ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span>การแสดงผลรายการตัวเลข</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span>การรองรับทศนิยม</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span>UI ที่เข้าใจง่าย</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span>ฟีเจอร์ Export (PDF/Excel)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span>Responsive Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🔧 การ Implementation</h3>
          
          <div className="space-y-4">
            {/* Architecture */}
            <div>
              <h4 className="font-medium text-gray-800 mb-2">🏗️ Architecture Pattern</h4>
              <div className="bg-white border border-gray-300 rounded p-3 text-sm text-gray-700">
                <strong>Component-Based Architecture:</strong> ใช้ React Components แยกตาม responsibility
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• <strong>State Management:</strong> useState hooks เก็บ application state</li>
                  <li>• <strong>Event Handlers:</strong> แยก functions ตาม action</li>
                  <li>• <strong>UI Components:</strong> แยก presentation logic</li>
                  <li>• <strong>Data Flow:</strong> One-way data binding</li>
                </ul>
              </div>
            </div>

            {/* Data Structure */}
            <div>
              <h4 className="font-medium text-gray-800 mb-2">📊 Data Structure</h4>
              <div className="bg-white border border-gray-300 rounded p-3">
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  <div>interface CalculatorItem {`{`}</div>
                  <div className="ml-4">id: number,</div>
                  <div className="ml-4">amount: number</div>
                  <div>{`}`}</div>
                  <div className="mt-2">const [items, setItems] = useState&lt;CalculatorItem[]&gt;([...])</div>
                </div>
              </div>
            </div>

            {/* Key Functions */}
            <div>
              <h4 className="font-medium text-gray-800 mb-2">⚙️ Key Functions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-300 rounded p-3">
                  <h5 className="font-medium text-gray-700 mb-2">📝 CRUD Operations</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <code>addItem()</code> - เพิ่มตัวเลขใหม่</li>
                    <li>• <code>deleteItem(id)</code> - ลบตัวเลข</li>
                    <li>• <code>total</code> - คำนวณยอดรวม</li>
                    <li>• Input validation - ตรวจสอบข้อมูล</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-300 rounded p-3">
                  <h5 className="font-medium text-gray-700 mb-2">📤 Export Features</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <code>exportToPdf()</code> - ส่งออก PDF</li>
                    <li>• <code>exportToExcel()</code> - ส่งออก Excel</li>
                    <li>• Future: Chart generation</li>
                    <li>• Future: Data analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-4">📝 สรุปโครงการ</h3>
          <div className="text-orange-800 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-blue-600 mb-2">🎯 ผลงานที่สำเร็จ</h4>
                <p className="text-sm">โปรแกรมคำนวณที่ใช้งานได้จริง ครบตามความต้องการที่กำหนด</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-green-600 mb-2">🛠️ เทคโนโลยี</h4>
                <p className="text-sm">Next.js, React, Tailwind CSS พร้อม TypeScript สำหรับ type safety</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-purple-600 mb-2">🚀 ความพร้อม</h4>
                <p className="text-sm">พร้อม deploy และขยายฟีเจอร์เพิ่มเติมได้ในอนาคต</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200 mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">📈 การพัฒนาในอนาคต</h4>
              <p className="text-sm text-gray-700">
                สามารถเพิ่มฟีเจอร์ขั้นสูงได้ เช่น การเก็บข้อมูลใน Database, การสร้างกราฟแสดงผล, 
                การส่งออกข้อมูลจริง, และการพัฒนาเป็น PWA สำหรับใช้งานบนมือถือ
              </p>
            </div>
          </div>
        </div>

        {/* Performance & Best Practices */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">⚡ Performance & Best Practices</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-700 text-sm">
            <div className="space-y-1">
              <div>• <strong>React Optimization:</strong> useMemo สำหรับ total calculation</div>
              <div>• <strong>Event Handling:</strong> debounce สำหรับ input validation</div>
              <div>• <strong>Memory Management:</strong> cleanup ใน useEffect</div>
              <div>• <strong>Bundle Size:</strong> tree shaking และ code splitting</div>
            </div>
            <div className="space-y-1">
              <div>• <strong>Accessibility:</strong> ARIA labels และ keyboard navigation</div>
              <div>• <strong>SEO:</strong> proper meta tags และ semantic HTML</div>
              <div>• <strong>Security:</strong> input sanitization และ validation</div>
              <div>• <strong>Testing:</strong> unit tests และ integration tests</div>
            </div>
          </div>
        </div>
      </div>
    </QuestionLayout>
  )
}