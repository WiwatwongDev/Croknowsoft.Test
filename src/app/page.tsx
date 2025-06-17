'use client'

import { useState } from 'react'
import { ChevronRightIcon, CodeBracketIcon, CpuChipIcon, CircleStackIcon, PresentationChartBarIcon, CalculatorIcon } from '@heroicons/react/24/outline'

interface TestQuestion {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const testQuestions: TestQuestion[] = [
  {
    id: 1,
    title: 'Frontend Web Application',
    description: 'สร้าง Web Application (Frontend) ด้วย HTML, CSS, Bootstrap, Tailwind',
    icon: <CodeBracketIcon className="w-8 h-8" />,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Programming Logic',
    description: 'เขียนฟังก์ชั่นตรวจสอบ input, คำนวณอายุ, และหาผลรวมจาก array',
    icon: <CpuChipIcon className="w-8 h-8" />,
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: 'Database & SQL',
    description: 'สร้าง Table, เขียน SQL Query, JOIN ข้อมูล',
    icon: <CircleStackIcon className="w-8 h-8" />,
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Database Design (ER Diagram)',
    description: 'ออกแบบ ER Diagram สำหรับระบบลางานของพนักงาน',
    icon: <PresentationChartBarIcon className="w-8 h-8" />,
    color: 'bg-orange-500'
  },
  {
    id: 5,
    title: 'Calculator Application',
    description: 'เขียนโปรแกรมคำนวณอย่างง่าย',
    icon: <CalculatorIcon className="w-8 h-8" />,
    color: 'bg-red-500'
  }
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'home' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5'>('home')

  const handleQuestionClick = (questionId: number) => {
    // Navigate to question page
    switch (questionId) {
      case 1: setCurrentPage('q1'); break
      case 2: setCurrentPage('q2'); break
      case 3: setCurrentPage('q3'); break
      case 4: setCurrentPage('q4'); break
      case 5: setCurrentPage('q5'); break
    }
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
  }

  // Import question components (in real app, these would be separate files)
  const Question1 = () => <div>Question 1 Component would be imported here</div>
  const Question2 = () => <div>Question 2 Component would be imported here</div> 
  const Question3 = () => <div>Question 3 Component would be imported here</div>
  const Question4 = () => <div>Question 4 Component would be imported here</div>
  const Question5 = () => <div>Question 5 Component would be imported here</div>

  // Render different pages based on current page
  if (currentPage === 'q1') {
    return <Question1 />
  }
  if (currentPage === 'q2') {
    return <Question2 />
  }
  if (currentPage === 'q3') {
    return <Question3 />
  }
  if (currentPage === 'q4') {
    return <Question4 />
  }
  if (currentPage === 'q5') {
    return <Question5 />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CT</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">แบบทดสอบ Programmer</h1>
              <p className="text-gray-600">CroKnowSoft - Programming Assessment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Test Questions Menu */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testQuestions.map((question) => (
              <div
                key={question.id}
                onClick={() => handleQuestionClick(question.id)}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 cursor-pointer hover:border-blue-300 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`${question.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4`}>
                  {question.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  ข้อ {question.id}. {question.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {question.description}
                </p>
                
                {/* Arrow */}
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  <span>คำตอบ</span>
                  <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}
