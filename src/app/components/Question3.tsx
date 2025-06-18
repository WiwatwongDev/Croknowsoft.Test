// src/app/components/Question3.tsx

import React, { useState } from 'react';
import QuestionLayout from './QuestionLayout'
import { 
  CheckCircleIcon, 
  PlayIcon, 
  DocumentTextIcon, 
  TableCellsIcon,
  CodeBracketIcon,
  ChartBarIcon,
  LightBulbIcon,
  ArrowLeftIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

interface Question3Props {
  onBack?: () => void
  onHome?: () => void
}

interface SQLAnswer {
  id: string;
  title: string;
  description: string;
  query: string;
  result: string[][];
  difficulty: number;
  type: string;
}

const sqlAnswers: SQLAnswer[] = [
  {
    id: '3.1',
    title: 'Create Table UserMember',
    description: 'สร้าง Table ชื่อ "UserMember" พร้อม Field ต่างๆ',
    query: `-- ตรวจสอบและลบ Table หากมีอยู่แล้ว
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UserMember]') AND type in (N'U'))
BEGIN
    DROP TABLE [dbo].[UserMember]
END
GO

-- สร้าง Table UserMember
CREATE TABLE [dbo].[UserMember] (
    [UserID] [bigint] IDENTITY(1,1) NOT NULL,
    [Username] [nvarchar](50) NULL,
    [FirstName] [nvarchar](250) NULL,
    [LastName] [nvarchar](250) NULL,
    [StatusID] [bit] NULL,
    [CreatedDate] [datetime] NULL,
    [CreatedBy] [bigint] NULL,
    [UpdatedDate] [datetime] NULL,
    [UpdatedBy] [bigint] NULL,
    
    CONSTRAINT [PK_UserMember] PRIMARY KEY CLUSTERED ([UserID] ASC)
) ON [PRIMARY]
GO`,
    result: [['Status'], ['Table created successfully']],
    difficulty: 2,
    type: 'DDL'
  },
  {
    id: '3.2',
    title: 'แสดงรายการ 1 แถว',
    description: 'แสดงรายการ 1 แถวแรก',
    query: `SELECT 
    UserID AS ID,
    FirstName,
    LastName,
    Username + '@email.com' AS Email,
    StatusID
FROM UserMember
WHERE UserID = 1;`,
    result: [
      ['ID', 'FirstName', 'LastName', 'Email', 'StatusID'],
      ['1', 'กชพร', 'ถนอมจิตร', 'Admin@email.com', '1']
    ],
    difficulty: 1,
    type: 'DQL'
  },
  {
    id: '3.3',
    title: 'แสดงรายการที่มี StatusID = 1',
    description: 'แสดงรายการที่มี StatusID = 1',
    query: `SELECT 
    UserID AS ID,
    FirstName,
    LastName
FROM UserMember
WHERE StatusID = 1
ORDER BY UserID;`,
    result: [
      ['ID', 'FirstName', 'LastName'],
      ['1', 'กชพร', 'ถนอมจิตร'],
      ['2', 'วลีรัตน์', 'วงวิไล'],
      ['3', 'วลีรัตน์', 'ปิติจำเริญ'],
      ['5', 'กชพร', 'ถนอมจิตร']
    ],
    difficulty: 1,
    type: 'DQL'
  },
  {
    id: '3.4',
    title: 'นับจำนวนรายการทั้งหมด',
    description: 'นับจำนวน records ทั้งหมดใน table',
    query: `SELECT COUNT(*) AS Total
FROM UserMember;`,
    result: [
      ['Total'],
      ['5']
    ],
    difficulty: 1,
    type: 'DQL'
  },
  {
    id: '3.5',
    title: 'นับจำนวนรายการที่มี FirstName เหมือนกัน',
    description: 'GROUP BY FirstName และนับจำนวน',
    query: `SELECT 
    FirstName,
    COUNT(*) AS Count
FROM UserMember 
GROUP BY FirstName
ORDER BY FirstName;`,
    result: [
      ['FirstName', 'Count'],
      ['กชพร', '2'],
      ['นันทิชา', '1'],
      ['วลีรัตน์', '2']
    ],
    difficulty: 2,
    type: 'DQL'
  },
  {
    id: '3.6',
    title: 'เพิ่ม Column StatusName',
    description: 'ใช้ CASE WHEN เพื่อแปลง StatusID เป็น StatusName',
    query: `SELECT 
    UserID AS ID,
    FirstName,
    StatusID,
    CASE 
        WHEN StatusID = 1 THEN N'ใช้งาน'
        WHEN StatusID = 0 THEN N'ไม่ใช้งาน'
    END AS StatusName
FROM UserMember
ORDER BY UserID;`,
    result: [
      ['ID', 'FirstName', 'StatusID', 'StatusName'],
      ['1', 'กชพร', '1', 'ใช้งาน'],
      ['2', 'วลีรัตน์', '1', 'ใช้งาน'],
      ['3', 'วลีรัตน์', '1', 'ใช้งาน'],
      ['4', 'นันทิชา', '0', 'ไม่ใช้งาน'],
      ['5', 'กชพร', '1', 'ใช้งาน']
    ],
    difficulty: 2,
    type: 'DQL'
  },
  {
    id: '3.7',
    title: 'INNER JOIN ข้อมูล',
    description: 'JOIN UserMember และ UserContact แสดงเฉพาะคนที่มี contact',
    query: `SELECT 
    u.Username,
    c.ContactDetail AS Phone
FROM UserMember u
INNER JOIN UserContact c ON u.UserID = c.UserID
ORDER BY u.UserID;`,
    result: [
      ['Username', 'Phone'],
      ['Admin', '021111111'],
      ['Admin', 'contact@gmail.com'],
      ['User1', 'test@gmail.com'],
      ['User4', '0851111111']
    ],
    difficulty: 3,
    type: 'DQL'
  },
  {
    id: '3.8',
    title: 'LEFT JOIN แสดงเฉพาะ NULL',
    description: 'LEFT JOIN แสดงเฉพาะคนที่ไม่มี contact (NULL)',
    query: `SELECT 
    u.FirstName,
    c.ContactDetail AS Phone
FROM UserMember u
LEFT JOIN UserContact c ON u.UserID = c.UserID
WHERE c.ContactDetail IS NULL
ORDER BY u.UserID;`,
    result: [
      ['FirstName', 'Phone'],
      ['วลีรัตน์', 'NULL'],
      ['นันทิชา', 'NULL']
    ],
    difficulty: 3,
    type: 'DQL'
  }
];

const sampleData = {
  userMember: [
    ['UserID', 'Username', 'FirstName', 'LastName', 'StatusID'],
    ['1', 'Admin', 'กชพร', 'ถนอมจิตร', '1'],
    ['2', 'User1', 'วลีรัตน์', 'วงวิไล', '1'],
    ['3', 'User2', 'วลีรัตน์', 'ปิติจำเริญ', '1'],
    ['4', 'User3', 'นันทิชา', 'ปิติจำเริญ', '0'],
    ['5', 'User4', 'กชพร', 'ถนอมจิตร', '1']
  ],
  userContact: [
    ['UserID', 'ContactDetail'],
    ['1', '021111111'],
    ['1', 'contact@gmail.com'],
    ['2', 'test@gmail.com'],
    ['5', '0851111111']
  ]
};

export default function Question3Answers({ onBack, onHome }: Question3Props) {
  const [activeTab, setActiveTab] = useState<'answers' | 'data' | 'summary'>('answers');
  const [expandedAnswer, setExpandedAnswer] = useState<string | null>(null);

  const getDifficultyStars = (difficulty: number) => {
    return '⭐'.repeat(difficulty);
  };

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1: return 'text-green-600 bg-green-100';
      case 2: return 'text-yellow-600 bg-yellow-100';
      case 3: return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'DDL': return 'text-blue-600 bg-blue-100';
      case 'DQL': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderTable = (data: string[][], title?: string) => {
    if (!data || data.length === 0) return null;
    
    return (
      <div className="overflow-x-auto">
        {title && <p className="text-sm font-medium text-gray-700 mb-2">{title}</p>}
        <table className="min-w-full border border-gray-300 text-sm">
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
              <tr key={rowIndex} className="bg-white hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 text-gray-900 border-b border-gray-200">
                    {cell === 'NULL' ? <span className="text-gray-400 italic">NULL</span> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeftIcon className="w-5 h-5" />
                <span>ย้อนกลับ</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <HomeIcon className="w-5 h-5" />
                <span>หน้าหลัก</span>
              </button>
            </div>
            <div className="text-sm text-gray-500">แบบทดสอบ Programmer</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg">
          {/* Question Header */}
          <div className="px-8 py-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Database & SQL - คำตอบ</h1>
                <p className="text-gray-600">SQL Queries และผลลัพธ์การทำงาน</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('answers')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'answers'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <CodeBracketIcon className="w-4 h-4 inline mr-1" />
                คำตอบทั้งหมด
              </button>
              <button
                onClick={() => setActiveTab('data')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'data'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <TableCellsIcon className="w-4 h-4 inline mr-1" />
                ข้อมูลตัวอย่าง
              </button>
              <button
                onClick={() => setActiveTab('summary')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'summary'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <ChartBarIcon className="w-4 h-4 inline mr-1" />
                สรุปผล
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'answers' && (
              <div className="space-y-6">
                {sqlAnswers.map((answer) => (
                  <div key={answer.id} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-white px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            ข้อ {answer.id} {answer.title}
                          </h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(answer.difficulty)}`}>
                            {getDifficultyStars(answer.difficulty)}
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(answer.type)}`}>
                            {answer.type}
                          </span>
                        </div>
                        <button
                          onClick={() => setExpandedAnswer(expandedAnswer === answer.id ? null : answer.id)}
                          className="flex items-center space-x-1 px-3 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                        >
                          <PlayIcon className="w-3 h-3" />
                          <span>{expandedAnswer === answer.id ? 'ซ่อน' : 'แสดง'}</span>
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{answer.description}</p>
                    </div>

                    {expandedAnswer === answer.id && (
                      <div className="p-6 space-y-4">
                        {/* SQL Query */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <CodeBracketIcon className="w-4 h-4 mr-1" />
                            SQL Query
                          </h4>
                          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                            <code>{answer.query}</code>
                          </pre>
                        </div>

                        {/* Result */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <TableCellsIcon className="w-4 h-4 mr-1" />
                            ผลลัพธ์
                          </h4>
                          {renderTable(answer.result)}
                        </div>

                        {/* Success Badge */}
                        <div className="flex items-center justify-center py-3">
                          <div className="flex items-center space-x-2 text-green-600">
                            <CheckCircleIcon className="w-5 h-5" />
                            <span className="font-medium">ทำงานสำเร็จ</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'data' && (
              <div className="space-y-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">ข้อมูลตัวอย่างที่ใช้ในการทดสอบ</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Table: UserMember</h4>
                      {renderTable(sampleData.userMember)}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Table: UserContact</h4>
                      {renderTable(sampleData.userContact)}
                    </div>
                  </div>
                </div>

                {/* Schema Information */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">โครงสร้าง Database Schema</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-300 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3">UserMember Table</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">UserID</span>
                          <span className="text-blue-600">bigint IDENTITY(1,1) PK</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Username</span>
                          <span className="text-blue-600">nvarchar(50)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">FirstName</span>
                          <span className="text-blue-600">nvarchar(250)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">LastName</span>
                          <span className="text-blue-600">nvarchar(250)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">StatusID</span>
                          <span className="text-blue-600">bit</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-300 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3">UserContact Table</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">ContactID</span>
                          <span className="text-blue-600">bigint IDENTITY(1,1) PK</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">UserID</span>
                          <span className="text-blue-600">bigint FK</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">ContactDetail</span>
                          <span className="text-blue-600">nvarchar(100)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'summary' && (
              <div className="space-y-8">
                {/* Overall Summary */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    สรุปผลการทำแบบทดสอบ
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">8/8</div>
                      <div className="text-sm text-green-700">ข้อที่ทำได้</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-sm text-blue-700">เปอร์เซ็นต์</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">⭐⭐</div>
                      <div className="text-sm text-purple-700">ระดับเฉลี่ย</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">SQL</div>
                      <div className="text-sm text-orange-700">ทักษะหลัก</div>
                    </div>
                  </div>
                </div>

                {/* Skills Breakdown */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">การแยกตามประเภท SQL</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-blue-900">DDL (Data Definition Language)</h4>
                        <p className="text-sm text-blue-700">CREATE TABLE</p>
                      </div>
                      <span className="text-blue-600 font-bold">1 ข้อ</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-purple-900">DQL (Data Query Language)</h4>
                        <p className="text-sm text-purple-700">SELECT, WHERE, JOIN, GROUP BY</p>
                      </div>
                      <span className="text-purple-600 font-bold">7 ข้อ</span>
                    </div>
                  </div>
                </div>

                {/* Difficulty Analysis */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">การแยกตามระดับความยาก</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-green-900">ง่าย ⭐</h4>
                        <p className="text-sm text-green-700">SELECT, WHERE, COUNT</p>
                      </div>
                      <span className="text-green-600 font-bold">3 ข้อ</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-yellow-900">ปานกลาง ⭐⭐</h4>
                        <p className="text-sm text-yellow-700">CREATE TABLE, GROUP BY, CASE WHEN</p>
                      </div>
                      <span className="text-yellow-600 font-bold">3 ข้อ</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-red-900">ยาก ⭐⭐⭐</h4>
                        <p className="text-sm text-red-700">INNER JOIN, LEFT JOIN</p>
                      </div>
                      <span className="text-red-600 font-bold">2 ข้อ</span>
                    </div>
                  </div>
                </div>

                {/* Tips Section */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center">
                    <LightBulbIcon className="w-5 h-5 mr-2" />
                    เทคนิคที่ใช้ในการทำข้อสอบ
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">SQL Functions & Clauses</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• CREATE TABLE - สร้างโครงสร้างตาราง</li>
                        <li>• SELECT, WHERE - คิวรีและกรองข้อมูล</li>
                        <li>• COUNT(*), GROUP BY - นับและจัดกลุ่ม</li>
                        <li>• CASE WHEN - เงื่อนไขแบบมีทางเลือก</li>
                        <li>• INNER/LEFT JOIN - เชื่อมตาราง</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">Best Practices</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• ใช้ N prefix สำหรับ Unicode</li>
                        <li>• ตั้งชื่อ Alias ด้วย AS</li>
                        <li>• ใช้ ORDER BY ให้ผลลัพธ์เป็นระเบียบ</li>
                        <li>• จัดการ NULL ด้วย IS NULL</li>
                        <li>• ใส่ semicolon ท้าย statement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <div className="flex items-center justify-between">
              <div className="flex space-x-3">
                <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  ย้อนกลับ
                </button>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                  กลับหน้าหลัก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}