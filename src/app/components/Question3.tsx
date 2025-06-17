'use client'

import { useState } from 'react'
import QuestionLayout from './QuestionLayout'
import { CircleStackIcon, PlayIcon, TableCellsIcon } from '@heroicons/react/24/outline'

interface SQLQuestion {
  id: string
  title: string
  description: string
  tableData?: string[][]
  expectedOutput?: string[][]
  placeholder: string
}

const sqlQuestions: SQLQuestion[] = [
  {
    id: '3.1',
    title: 'Create Table UserMember',
    description: 'จงเขียนคำสั่ง SQL สำหรับ Create Table ชื่อ "UserMember" ที่มี Field ต่อไปนี้:\n\n• ID (Primary Key, Auto Increment)\n• FirstName (VARCHAR 50)\n• LastName (VARCHAR 50)\n• Email (VARCHAR 100)\n• StatusID (INT)',
    placeholder: `-- เขียน SQL CREATE TABLE ที่นี่
CREATE TABLE UserMember (
    -- เขียน field definition ที่นี่
);`
  },
  {
    id: '3.2',
    title: 'แสดงรายการ 1 แถว',
    description: 'Output 1 แสดงรายการ 1 แถว ตามข้อมูลด้านล่าง',
    tableData: [
      ['ID', 'FirstName', 'LastName', 'Email', 'StatusID'],
      ['1', 'John', 'Doe', 'john@email.com', '1'],
      ['2', 'Jane', 'Smith', 'jane@email.com', '0'],
      ['3', 'Bob', 'Johnson', 'bob@email.com', '1'],
      ['4', 'Alice', 'Brown', 'alice@email.com', '1']
    ],
    expectedOutput: [
      ['ID', 'FirstName', 'LastName', 'Email', 'StatusID'],
      ['1', 'John', 'Doe', 'john@email.com', '1']
    ],
    placeholder: `-- เขียน SQL Query ที่นี่
SELECT * FROM UserMember WHERE...`
  },
  {
    id: '3.3',
    title: 'แสดงรายการที่มี StatusID = 1',
    description: 'Output 2 แสดงรายการที่มี StatusID = 1',
    expectedOutput: [
      ['ID', 'FirstName', 'LastName'],
      ['1', 'John', 'Doe'],
      ['3', 'Bob', 'Johnson'],
      ['4', 'Alice', 'Brown']
    ],
    placeholder: `-- เขียน SQL Query ที่นี่
SELECT ID, FirstName, LastName FROM UserMember WHERE...`
  },
  {
    id: '3.4',
    title: 'นับจำนวนรายการทั้งหมด',
    description: 'Output 3 นับจำนวนรายการทั้งหมด',
    expectedOutput: [
      ['Total'],
      ['4']
    ],
    placeholder: `-- เขียน SQL Query ที่นี่
SELECT COUNT(*) as Total FROM...`
  },
  {
    id: '3.5',
    title: 'นับจำนวนรายการที่มี FirstName เหมือนกัน',
    description: 'Table 4 นับจำนวน รายการที่มี FirstName เหมือนกัน',
    expectedOutput: [
      ['FirstName', 'Count'],
      ['John', '1'],
      ['Jane', '1'],
      ['Bob', '1'],
      ['Alice', '1']
    ],
    placeholder: `-- เขียน SQL Query ที่นี่
SELECT FirstName, COUNT(*) as Count FROM UserMember GROUP BY...`
  },
  {
    id: '3.6',
    title: 'เพิ่ม Column StatusName',
    description: 'Table 5 เพิ่ม Column StatusName โดย ตรวจสอบ Column StatusID = 1 แสดง "ใช้งาน" StatusID = 0 แสดง "ไม่ใช้งาน"',
    expectedOutput: [
      ['ID', 'FirstName', 'StatusID', 'StatusName'],
      ['1', 'John', '1', 'ใช้งาน'],
      ['2', 'Jane', '0', 'ไม่ใช้งาน'],
      ['3', 'Bob', '1', 'ใช้งาน'],
      ['4', 'Alice', '1', 'ใช้งาน']
    ],
    placeholder: `-- เขียน SQL Query ที่นี่
SELECT ID, FirstName, StatusID,
  CASE 
    WHEN StatusID = 1 THEN 'ใช้งาน'
    WHEN StatusID = 0 THEN 'ไม่ใช้งาน'
  END as StatusName
FROM UserMember`
  },
  {
    id: '3.7',
    title: 'JOIN ข้อมูล UserMember และ UserContact',
    description: 'จงเขียน Query JOIN ข้อมูล ให้ได้ผลลัพธ์ เหมือน Table ต่อไปนี้\n\nTable UserContact มีข้อมูล:\nUserID | Phone\n1 | 081-111-1111\n3 | 082-222-2222',
    expectedOutput: [
      ['FirstName', 'Phone'],
      ['John', '081-111-1111'],
      ['Bob', '082-222-2222']
    ],
    placeholder: `-- เขียน SQL JOIN Query ที่นี่
SELECT u.FirstName, c.Phone 
FROM UserMember u 
INNER JOIN UserContact c ON...`
  },
  {
    id: '3.8',
    title: 'JOIN แสดงข้อมูลทั้งหมด',
    description: 'จงเขียน Query JOIN หรือ ข้อมูล ให้ได้ผลลัพธ์ เหมือน Table ต่อไปนี้ (แสดงทุกคนแม้ไม่มีเบอร์โทร)',
    expectedOutput: [
      ['FirstName', 'Phone'],
      ['John', '081-111-1111'],
      ['Jane', 'NULL'],
      ['Bob', '082-222-2222'],
      ['Alice', 'NULL']
    ],
    placeholder: `-- เขียน SQL LEFT JOIN Query ที่นี่
SELECT u.FirstName, c.Phone 
FROM UserMember u 
LEFT JOIN UserContact c ON...`
  }
]

export default function Question3() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})

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

  const testQuery = (questionId: string) => {
    const query = answers[questionId]
    if (!query.trim()) {
      alert('กรุณาเขียน SQL Query ก่อนทดสอบ')
      return
    }
    
    alert(`กำลังทดสอบ SQL Query สำหรับข้อ ${questionId}`)
  }

  const renderTable = (data: string[][], title: string) => {
    if (!data || data.length === 0) return null
    
    return (
      <div className="mt-3">
        <p className="text-sm font-medium text-gray-700 mb-2">{title}</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                {data[0].map((header, index) => (
                  <th key={index} className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase border-b border-gray-300">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-3 py-2 text-sm text-gray-900 border-b border-gray-200">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <QuestionLayout
      questionNumber={3}
      title="Database & SQL"
      onBack={handleBack}
      onHome={handleHome}
    >
      <div className="space-y-8">
        {/* Question Description */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">โจทย์</h3>
          <p className="text-purple-800 leading-relaxed">
            Database - จงเขียนคำสั่ง SQL สำหรับข้อสอบต่อไปนี้
          </p>
        </div>

        {/* Sample Data Display */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <TableCellsIcon className="w-5 h-5 mr-2" />
            ข้อมูลตัวอย่าง Table UserMember
          </h4>
          {renderTable([
            ['ID', 'FirstName', 'LastName', 'Email', 'StatusID'],
            ['1', 'John', 'Doe', 'john@email.com', '1'],
            ['2', 'Jane', 'Smith', 'jane@email.com', '0'],
            ['3', 'Bob', 'Johnson', 'bob@email.com', '1'],
            ['4', 'Alice', 'Brown', 'alice@email.com', '1']
          ], 'Table UserMember')}
          
          <div className="mt-4">
            {renderTable([
              ['UserID', 'Phone'],
              ['1', '081-111-1111'],
              ['3', '082-222-2222']
            ], 'Table UserContact')}
          </div>
        </div>

        {/* SQL Questions */}
        {sqlQuestions.map((sqlQ, index) => (
          <div key={sqlQ.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                ข้อ {sqlQ.id} {sqlQ.title}
              </h3>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Description */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">โจทย์</h4>
                <pre className="text-purple-800 text-sm whitespace-pre-line font-sans">
                  {sqlQ.description}
                </pre>
              </div>

              {/* Expected Output */}
              {sqlQ.expectedOutput && renderTable(sqlQ.expectedOutput, 'ผลลัพธ์ที่ต้องการ')}

              {/* SQL Editor */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <CircleStackIcon className="w-4 h-4 inline mr-1" />
                    SQL Query ของคุณ
                  </label>
                  <button
                    onClick={() => testQuery(sqlQ.id)}
                    className="flex items-center space-x-1 px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                  >
                    <PlayIcon className="w-3 h-3" />
                    <span>ทดสอบ</span>
                  </button>
                </div>
                <textarea
                  value={answers[sqlQ.id] || ''}
                  onChange={(e) => handleAnswerChange(sqlQ.id, e.target.value)}
                  placeholder={sqlQ.placeholder}
                  className="w-full h-32 font-mono text-sm p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  หมายเหตุเพิ่มเติม (ถ้ามี)
                </label>
                <textarea
                  placeholder="อธิบายแนวคิดการเขียน SQL หรือสาเหตุที่เลือกใช้คำสั่งนั้น..."
                  className="w-full h-16 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 เคล็ดลับ</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• ใช้ INNER JOIN เมื่อต้องการข้อมูลที่มีทั้งสองตาราง</li>
            <li>• ใช้ LEFT JOIN เมื่อต้องการข้อมูลทั้งหมดจากตารางซ้าย</li>
            <li>• ใช้ CASE WHEN สำหรับการสร้าง conditional columns</li>
            <li>• ใช้ GROUP BY กับ COUNT() สำหรับการนับข้อมูล</li>
            <li>• ตรวจสอบ syntax ให้ถูกต้อง และใส่ semicolon ที่ท้าย statement</li>
          </ul>
        </div>
      </div>
    </QuestionLayout>
  )
}