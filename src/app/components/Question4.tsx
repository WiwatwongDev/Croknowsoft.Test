// src/app/components/Question4.tsx

'use client'

import { useState } from 'react'
import QuestionLayout from './QuestionLayout'
import { 
  TableCellsIcon, 
  LinkIcon,
  DocumentTextIcon,
  PhotoIcon 
} from '@heroicons/react/24/outline'

interface Question4Props {
  onBack?: () => void
  onHome?: () => void
}

interface TableInfo {
  name: string
  purpose: string
  columns: { name: string; type: string; key?: string; description: string }[]
}

const databaseTables: TableInfo[] = [
{
name: 'Department',
purpose: 'เก็บข้อมูลแผนกต่างๆ ในองค์กร',
columns: [
{ name: 'DepartmentID', type: 'INT IDENTITY(1,1)', key: 'PK', description: 'รหัสแผนก (Primary Key)' },
{ name: 'DepartmentCode', type: 'NVARCHAR(10)', description: 'รหัสแผนก (ย่อ)' },
{ name: 'DepartmentName', type: 'NVARCHAR(100)', description: 'ชื่อแผนก' },
{ name: 'ManagerID', type: 'INT', key: 'FK', description: 'รหัสหัวหน้าแผนก' },
{ name: 'Location', type: 'NVARCHAR(100)', description: 'ที่ตั้งแผนก' },
{ name: 'IsActive', type: 'BIT', description: 'สถานะการใช้งาน' }
]
},
{
name: 'Employee',
purpose: 'เก็บข้อมูลพนักงานทั้งหมดในระบบ',
columns: [
{ name: 'EmployeeID', type: 'INT IDENTITY(1,1)', key: 'PK', description: 'รหัสพนักงาน (Primary Key)' },
{ name: 'EmployeeCode', type: 'NVARCHAR(20)', description: 'รหัสพนักงาน (Unique)' },
{ name: 'FirstName', type: 'NVARCHAR(50)', description: 'ชื่อ' },
{ name: 'LastName', type: 'NVARCHAR(50)', description: 'นามสกุล' },
{ name: 'Email', type: 'NVARCHAR(100)', description: 'อีเมล' },
{ name: 'DepartmentID', type: 'INT', key: 'FK', description: 'รหัสแผนก' },
{ name: 'Position', type: 'NVARCHAR(100)', description: 'ตำแหน่ง' },
{ name: 'SupervisorID', type: 'INT', key: 'FK', description: 'รหัสหัวหน้างาน' },
{ name: 'HireDate', type: 'DATE', description: 'วันเริ่มงาน' }
]
},
{
name: 'LeaveType',
purpose: 'เก็บประเภทการลาต่างๆ และกฎเกณฑ์',
columns: [
{ name: 'LeaveTypeID', type: 'INT IDENTITY(1,1)', key: 'PK', description: 'รหัสประเภทการลา' },
{ name: 'LeaveTypeCode', type: 'NVARCHAR(10)', description: 'รหัสประเภทการลา (ย่อ)' },
{ name: 'LeaveTypeName', type: 'NVARCHAR(100)', description: 'ชื่อประเภทการลา' },
{ name: 'MaxDaysPerYear', type: 'INT', description: 'จำนวนวันสูงสุดต่อปี' },
{ name: 'MaxDaysPerRequest', type: 'INT', description: 'จำนวนวันสูงสุดต่อครั้ง' },
{ name: 'RequireDocument', type: 'BIT', description: 'ต้องมีเอกสารหรือไม่' }
]
},
{
name: 'LeaveRequest',
purpose: 'เก็บคำขอลาของพนักงาน',
columns: [
{ name: 'RequestID', type: 'INT IDENTITY(1,1)', key: 'PK', description: 'รหัสคำขอลา' },
{ name: 'RequestNumber', type: 'NVARCHAR(20)', description: 'เลขที่คำขอลา' },
{ name: 'EmployeeID', type: 'INT', key: 'FK', description: 'รหัสพนักงานผู้ขอลา' },
{ name: 'LeaveTypeID', type: 'INT', key: 'FK', description: 'รหัสประเภทการลา' },
{ name: 'StartDate', type: 'DATE', description: 'วันที่เริ่มลา' },
{ name: 'EndDate', type: 'DATE', description: 'วันที่สิ้นสุดการลา' },
{ name: 'TotalDays', type: 'DECIMAL(3,1)', description: 'จำนวนวันลารวม' },
{ name: 'Reason', type: 'NVARCHAR(500)', description: 'เหตุผลการลา' },
{ name: 'Status', type: 'NVARCHAR(20)', description: 'สถานะคำขอ' }
]
},
{
name: 'LeaveApproval',
purpose: 'เก็บการอนุมัติคำขอลาแต่ละขั้นตอน',
columns: [
{ name: 'ApprovalID', type: 'INT IDENTITY(1,1)', key: 'PK', description: 'รหัสการอนุมัติ' },
{ name: 'RequestID', type: 'INT', key: 'FK', description: 'รหัสคำขอลา' },
{ name: 'ApprovalLevel', type: 'INT', description: 'ขั้นตอนการอนุมัติ' },
{ name: 'ApproverID', type: 'INT', key: 'FK', description: 'รหัสผู้อนุมัติ' },
{ name: 'ApprovalStatus', type: 'NVARCHAR(20)', description: 'สถานะการอนุมัติ' },
{ name: 'ApprovalDate', type: 'DATETIME2', description: 'วันที่อนุมัติ' },
{ name: 'Comments', type: 'NVARCHAR(1000)', description: 'หมายเหตุ' }
]
},
{
name: 'LeaveBalance',
purpose: 'เก็บยอดวันลาคงเหลือของพนักงานแต่ละประเภท',
columns: [
{ name: 'BalanceID', type: 'INT IDENTITY(1,1)', key: 'PK', description: 'รหัสยอดวันลา' },
{ name: 'EmployeeID', type: 'INT', key: 'FK', description: 'รหัสพนักงาน' },
{ name: 'LeaveTypeID', type: 'INT', key: 'FK', description: 'รหัสประเภทการลา' },
{ name: 'Year', type: 'INT', description: 'ปี' },
{ name: 'EntitledDays', type: 'DECIMAL(4,1)', description: 'วันลาที่มีสิทธิ์' },
{ name: 'UsedDays', type: 'DECIMAL(4,1)', description: 'วันลาที่ใช้แล้ว' },
{ name: 'RemainingDays', type: 'AS (EntitledDays - UsedDays)', description: 'วันลาคงเหลือ (Computed)' }
]
}
]

interface Relationship {
from: string
to: string
type: string
description: string
foreignKey: string
example: string
}

const relationships: Relationship[] = [
{
from: 'Department',
to: 'Employee',
type: 'One-to-Many (1:M)',
description: 'แผนกหนึ่งมีพนักงานได้หลายคน',
foreignKey: 'Employee.DepartmentID → Department.DepartmentID',
example: 'แผนก IT มีพนักงาน 10 คน'
},
{
from: 'Department',
to: 'Employee (Manager)',
type: 'One-to-One (1:1)',
description: 'แผนกมีหัวหน้าแผนกหนึ่งคน',
foreignKey: 'Department.ManagerID → Employee.EmployeeID',
example: 'หัวหน้าแผนก IT คือ นาย ก'
},
{
from: 'Employee',
to: 'Employee (Supervisor)',
type: 'One-to-Many (1:M) Self-Reference',
description: 'พนักงานหนึ่งคนเป็นหัวหน้าของพนักงานหลายคน',
foreignKey: 'Employee.SupervisorID → Employee.EmployeeID',
example: 'หัวหน้าทีมมีลูกน้อง 5 คน'
},
{
from: 'Employee',
to: 'LeaveRequest',
type: 'One-to-Many (1:M)',
description: 'พนักงานหนึ่งคนมีคำขอลาได้หลายครั้ง',
foreignKey: 'LeaveRequest.EmployeeID → Employee.EmployeeID',
example: 'พนักงานคนหนึ่งขอลา 5 ครั้งในปี'
},
{
from: 'LeaveType',
to: 'LeaveRequest',
type: 'One-to-Many (1:M)',
description: 'ประเภทการลาหนึ่งประเภทใช้ในคำขอหลายครั้ง',
foreignKey: 'LeaveRequest.LeaveTypeID → LeaveType.LeaveTypeID',
example: 'การลาป่วยมีคำขอ 100 ครั้งในเดือน'
},
{
from: 'LeaveRequest',
to: 'LeaveApproval',
type: 'One-to-Many (1:M)',
description: 'คำขอลาหนึ่งครั้งมีการอนุมัติหลายขั้นตอน',
foreignKey: 'LeaveApproval.RequestID → LeaveRequest.RequestID',
example: 'คำขอลาผ่านการอนุมัติ 3 ขั้นตอน'
},
{
from: 'Employee + LeaveType',
to: 'LeaveBalance',
type: 'Many-to-Many (M:M)',
description: 'พนักงานแต่ละคนมียอดวันลาแต่ละประเภท',
foreignKey: 'LeaveBalance.EmployeeID, LeaveBalance.LeaveTypeID',
example: 'พนักงาน A มีวันลาป่วย 10 วัน, ลากิจ 6 วัน'
}
]

export default function Question4({ onBack, onHome }: Question4Props) {
  const [selectedTable, setSelectedTable] = useState<string>('')
  const [showRelationships, setShowRelationships] = useState(false)
  const [designApproach, setDesignApproach] = useState<'text' | 'draw'>('text')

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

  return (
    <QuestionLayout
      questionNumber={4}
      title="Database Design (ER Diagram)"
      onBack={handleBack}
      onHome={handleHome}
    >
      <div className="space-y-8">
        {/* Technology Used */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">🛠️ เทคโนโลยีที่ใช้</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-900/50 border border-blue-700 rounded-lg p-3 text-center">
              <div className="text-blue-300 font-semibold">SQL Server</div>
              <div className="text-blue-400 text-sm">Database Engine</div>
            </div>
            <div className="bg-green-900/50 border border-green-700 rounded-lg p-3 text-center">
              <div className="text-green-300 font-semibold">T-SQL</div>
              <div className="text-green-400 text-sm">Query Language</div>
            </div>
            <div className="bg-purple-900/50 border border-purple-700 rounded-lg p-3 text-center">
              <div className="text-purple-300 font-semibold">SSMS</div>
              <div className="text-purple-400 text-sm">Management Tool</div>
            </div>
            <div className="bg-yellow-900/50 border border-yellow-700 rounded-lg p-3 text-center">
              <div className="text-yellow-300 font-semibold">ER Diagram</div>
              <div className="text-yellow-400 text-sm">Design Method</div>
            </div>
          </div>
        </div>

        {/* Question Description */}
        <div className="bg-orange-900/30 border border-orange-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-200 mb-3">โจทย์</h3>
          <p className="text-orange-100 leading-relaxed">
            จงออกแบบ Table ระบบลางานของพนักงานในรูปแบบ ER Diagram 
            แสดงชื่อ Table, ชื่อ Column และ Type ของข้อมูล 
            โดยโยงเส้นเชื่อมต่อระหว่าง Table และอธิบาย
          </p>
        </div>

        {/* System Requirements */}
        <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-200 mb-3">ความต้องการของระบบลางาน</h3>
          <div className="text-blue-100 space-y-2">
            <p className="font-medium">ระบบต้องสามารถจัดการข้อมูลต่อไปนี้:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>ข้อมูลพนักงาน (รหัสพนักงาน, ชื่อ, นามสกุล, แผนก, ตำแหน่ง, วันเริ่มงาน)</li>
              <li>ข้อมูลแผนก (รหัสแผนก, ชื่อแผนก, หัวหน้าแผนก)</li>
              <li>ประเภทการลา (รหัสประเภท, ชื่อประเภท, จำนวนวันที่ได้ต่อปี)</li>
              <li>คำขอลา (รหัสคำขอ, พนักงานที่ขอลา, ประเภทการลา, วันที่เริ่ม, วันที่สิ้นสุด, เหตุผล)</li>
              <li>การอนุมัติ (รหัสการอนุมัติ, คำขอลา, ผู้อนุมัติ, สถานะ, วันที่อนุมัติ, หมายเหตุ)</li>
              <li>ยอดวันลาคงเหลือของพนักงาน</li>
            </ul>
          </div>
        </div>

        {/* Answer Header */}
        <div className="bg-green-900/30 border border-green-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-green-200">🎯 คำตอบ</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setDesignApproach('text')}
                className={`px-3 py-1 rounded-lg text-sm ${
                  designApproach === 'text'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Text View
              </button>
              <button
                onClick={() => setDesignApproach('draw')}
                className={`px-3 py-1 rounded-lg text-sm ${
                  designApproach === 'draw'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Draw View
              </button>
            </div>
          </div>
          <p className="text-green-100 leading-relaxed">
            ออกแบบฐานข้อมูลระบบลางานด้วย SQL Server รวม 6 Tables หลัก 
            พร้อม Relationships และ Business Rules ที่ครบถ้วน
          </p>
        </div>

        {/* Database Tables Overview */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-100 flex items-center">
              <TableCellsIcon className="w-5 h-5 mr-2" />
              โครงสร้าง Tables ({databaseTables.length} Tables)
            </h3>
            <button
              onClick={() => setShowRelationships(!showRelationships)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              {showRelationships ? 'ซ่อน Relationships' : 'แสดง Relationships'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {databaseTables.map((table, index) => (
              <div 
                key={table.name}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedTable === table.name 
                    ? 'border-orange-500 bg-orange-900/30' 
                    : 'border-gray-700 hover:border-gray-600 bg-gray-800'
                }`}
                onClick={() => setSelectedTable(selectedTable === table.name ? '' : table.name)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-100">{table.name}</h4>
                  <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                    Table {index + 1}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{table.purpose}</p>
                
                <div className="space-y-2">
                  {table.columns.slice(0, selectedTable === table.name ? table.columns.length : 3).map((column) => (
                    <div key={column.name} className="flex items-center text-sm">
                      <span className={`w-8 h-6 flex items-center justify-center text-xs font-mono rounded mr-2 ${
                        column.key === 'PK' ? 'bg-yellow-900/50 text-yellow-300' :
                        column.key === 'FK' ? 'bg-blue-900/50 text-blue-300' :
                        'bg-gray-700 text-gray-400'
                      }`}>
                        {column.key || ''}
                      </span>
                      <span className="font-mono text-gray-200 min-w-32">{column.name}</span>
                      <span className="text-gray-400 text-xs ml-2">{column.type}</span>
                    </div>
                  ))}
                  {selectedTable !== table.name && table.columns.length > 3 && (
                    <div className="text-xs text-gray-500 mt-2">
                      ... และอีก {table.columns.length - 3} columns
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Relationships Section */}
        {showRelationships && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
              <LinkIcon className="w-5 h-5 mr-2" />
              ความสัมพันธ์ระหว่าง Tables ({relationships.length} Relationships)
            </h3>
            
            <div className="space-y-4">
              {relationships.map((rel, index) => (
                <div key={index} className="border border-gray-700 rounded-lg p-4 hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-100">{rel.from}</span>
                      <span className="text-gray-400">→</span>
                      <span className="font-medium text-gray-100">{rel.to}</span>
                    </div>
                    <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">
                      {rel.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{rel.description}</p>
                  <div className="text-xs text-gray-400 space-y-1">
                    <div><strong>Foreign Key:</strong> {rel.foreignKey}</div>
                    <div><strong>ตัวอย่าง:</strong> {rel.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SQL Scripts */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">📝 SQL Scripts ตัวอย่าง</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-200 mb-2">ตัวอย่าง CREATE TABLE:</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`CREATE TABLE Employee (
EmployeeID      INT IDENTITY(1,1) PRIMARY KEY,
EmployeeCode    NVARCHAR(20) NOT NULL UNIQUE,
FirstName       NVARCHAR(50) NOT NULL,
LastName        NVARCHAR(50) NOT NULL,
Email           NVARCHAR(100) UNIQUE,
DepartmentID    INT NOT NULL,
Position        NVARCHAR(100) NOT NULL,
SupervisorID    INT NULL,
HireDate        DATE NOT NULL,
IsActive        BIT NOT NULL DEFAULT 1,

FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID),
FOREIGN KEY (SupervisorID) REFERENCES Employee(EmployeeID)
);`}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* Database Diagram (Text) */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">🔄 ER Diagram (Text Format)</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre className="text-blue-300">{`                    ┌─────────────┐
          │ Department  │
          │ (แผนก)      │
          └──────┬──────┘
                 │ 1:M
    ┌────────────┴────────────┐
    │                         │
    ▼                         │ 1:1 (Manager)
┌─────────────┐                     │
│  Employee   │◄────────────────────┘
│ (พนักงาน)    │
└──────┬──────┘
 │ │ │
 │ │ └─── 1:M (Supervisor - Self Reference)
 │ │
 │ └───── 1:M ──┐
 │              │
 │ 1:M          ▼
 │        ┌─────────────┐
 │        │LeaveRequest │
 │        │(คำขอลา)     │
 │        └──────┬──────┘
 │               │ 1:M
 │               ▼
 │        ┌─────────────┐      ┌─────────────┐
 │        │LeaveApproval│      │  LeaveType  │
 │        │(การอนุมัติ)  │      │(ประเภทการลา) │
 │        └─────────────┘      └──────┬──────┘
 │                                    │
 │ M:M (through LeaveBalance)         │ 1:M
 │                                    │
 └────────┐                           │
          ▼                           ▼
  ┌─────────────┐              ┌─────────────┐
  │LeaveBalance │              │LeaveRequest │
  │(วันลาคงเหลือ) │              │             │
  └─────────────┘              └─────────────┘`}</pre>
          </div>
        </div>

        {/* Business Rules */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">การพิจารณาเพิ่มเติม</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-200 mb-3 text-blue-300">🔒 Data Integrity Rules</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  พนักงานต้องอยู่ในแผนกที่มีอยู่จริง
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  หัวหน้าแผนกต้องเป็นพนักงานในระบบ
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  วันที่สิ้นสุดลาต้องมากกว่าหรือเท่ากับวันที่เริ่มลา
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  จำนวนวันลาต้องมากกว่า 0
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  ปีของยอดวันลาต้องอยู่ในช่วงที่กำหนด
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-200 mb-3 text-green-300">⚙️ Business Logic Rules</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  พนักงานไม่สามารถอนุมัติการลาของตนเอง
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  ต้องมีวันลาคงเหลือเพียงพอก่อนการขอลา
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  การลาบางประเภทต้องมีเอกสารประกอบ
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  การลาฉุกเฉินสามารถข้ามขั้นตอนได้
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  วันลาคงเหลือสามารถยกยอดได้ (ตามประเภท)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Text Description Section */}
        {designApproach === 'text' && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
              <DocumentTextIcon className="w-5 h-5 mr-2" />
              อธิบายโครงสร้างฐานข้อมูล
            </h3>
            
            <div className="space-y-6">
              {/* Table Structure */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  โครงสร้าง Tables และ Columns
                </label>
                <textarea
                  defaultValue={`Table: Department (แผนก)
- DepartmentID (INT, Primary Key, Auto Increment)
- DepartmentCode (NVARCHAR(10), NOT NULL, UNIQUE)  
- DepartmentName (NVARCHAR(100), NOT NULL)
- ManagerID (INT, Foreign Key -> Employee.EmployeeID)
- Location (NVARCHAR(100), ที่ตั้งแผนก)
- IsActive (BIT, สถานะการใช้งาน)

Table: Employee (พนักงาน)
- EmployeeID (INT, Primary Key, Auto Increment)
- EmployeeCode (NVARCHAR(20), NOT NULL, UNIQUE)
- FirstName (NVARCHAR(50), NOT NULL)
- LastName (NVARCHAR(50), NOT NULL)
- Email (NVARCHAR(100), UNIQUE)
- DepartmentID (INT, Foreign Key -> Department.DepartmentID)
- Position (NVARCHAR(100), ตำแหน่ง)
- SupervisorID (INT, Foreign Key -> Employee.EmployeeID)
- HireDate (DATE, วันเริ่มงาน)
- IsActive (BIT, สถานะการทำงาน)

Table: LeaveType (ประเภทการลา)
- LeaveTypeID (INT, Primary Key, Auto Increment)
- LeaveTypeCode (NVARCHAR(10), NOT NULL, UNIQUE)
- LeaveTypeName (NVARCHAR(100), NOT NULL)
- MaxDaysPerYear (INT, จำนวนวันสูงสุดต่อปี)
- MaxDaysPerRequest (INT, จำนวนวันสูงสุดต่อครั้ง)
- RequireDocument (BIT, ต้องมีเอกสารหรือไม่)
- IsActive (BIT, สถานะการใช้งาน)

Table: LeaveRequest (คำขอลา)
- RequestID (INT, Primary Key, Auto Increment)
- RequestNumber (NVARCHAR(20), เลขที่คำขอ)
- EmployeeID (INT, Foreign Key -> Employee.EmployeeID)
- LeaveTypeID (INT, Foreign Key -> LeaveType.LeaveTypeID)
- StartDate (DATE, วันที่เริ่มลา)
- EndDate (DATE, วันที่สิ้นสุดการลา)
- TotalDays (DECIMAL(3,1), จำนวนวันลารวม)
- Reason (NVARCHAR(500), เหตุผลการลา)
- Status (NVARCHAR(20), สถานะคำขอ)

Table: LeaveApproval (การอนุมัติ)
- ApprovalID (INT, Primary Key, Auto Increment)
- RequestID (INT, Foreign Key -> LeaveRequest.RequestID)
- ApprovalLevel (INT, ขั้นตอนการอนุมัติ)
- ApproverID (INT, Foreign Key -> Employee.EmployeeID)
- ApprovalStatus (NVARCHAR(20), สถานะการอนุมัติ)
- ApprovalDate (DATETIME2, วันที่อนุมัติ)
- Comments (NVARCHAR(1000), หมายเหตุ)

Table: LeaveBalance (ยอดวันลาคงเหลือ)
- BalanceID (INT, Primary Key, Auto Increment)
- EmployeeID (INT, Foreign Key -> Employee.EmployeeID)
- LeaveTypeID (INT, Foreign Key -> LeaveType.LeaveTypeID)
- Year (INT, ปี)
- EntitledDays (DECIMAL(4,1), วันลาที่มีสิทธิ์)
- UsedDays (DECIMAL(4,1), วันลาที่ใช้แล้ว)
- RemainingDays (Computed Column, วันลาคงเหลือ)`}
                  className="w-full h-80 font-mono text-sm p-4 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  readOnly
                />
              </div>

              {/* Relationships */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  ความสัมพันธ์ระหว่าง Tables (Relationships)
                </label>
                <textarea
                  defaultValue={`1. Department → Employee (One-to-Many)
- แผนกหนึ่งมีพนักงานได้หลายคน
- Employee.DepartmentID เชื่อมกับ Department.DepartmentID
- ตัวอย่าง: แผนก IT มีพนักงาน 15 คน

2. Department → Employee (One-to-One for Manager)
- แผนกมีหัวหน้าแผนกได้หนึ่งคน
- Department.ManagerID เชื่อมกับ Employee.EmployeeID
- ตัวอย่าง: หัวหน้าแผนก IT คือ นาย สมชาย

3. Employee → Employee (One-to-Many, Self Reference)
- พนักงานหนึ่งคนเป็นหัวหน้าของพนักงานหลายคน
- Employee.SupervisorID เชื่อมกับ Employee.EmployeeID
- ตัวอย่าง: หัวหน้าทีมมีลูกน้อง 5 คน

4. Employee → LeaveRequest (One-to-Many)
- พนักงานหนึ่งคนสามารถมีคำขอลาได้หลายครั้ง
- LeaveRequest.EmployeeID เชื่อมกับ Employee.EmployeeID
- ตัวอย่าง: พนักงานคนหนึ่งขอลา 8 ครั้งในปี

5. LeaveType → LeaveRequest (One-to-Many)
- ประเภทการลาหนึ่งประเภทสามารถมีการขอลาได้หลายครั้ง
- LeaveRequest.LeaveTypeID เชื่อมกับ LeaveType.LeaveTypeID
- ตัวอย่าง: การลาป่วยมีคำขอ 200 ครั้งในเดือน

6. LeaveRequest → LeaveApproval (One-to-Many)
- คำขอลาหนึ่งครั้งมีการอนุมัติหลายขั้นตอน
- LeaveApproval.RequestID เชื่อมกับ LeaveRequest.RequestID
- ตัวอย่าง: คำขอลาผ่านการอนุมัติ 3 ขั้นตอน

7. Employee → LeaveApproval (One-to-Many as Approver)
- พนักงานหนึ่งคน (ผู้บังคับบัญชา) สามารถอนุมัติได้หลายครั้ง
- LeaveApproval.ApproverID เชื่อมกับ Employee.EmployeeID
- ตัวอย่าง: หัวหน้าแผนกอนุมัติ 50 คำขอในเดือน

8. Employee + LeaveType → LeaveBalance (Many-to-Many)
- พนักงานแต่ละคนมียอดวันลาคงเหลือของแต่ละประเภท
- LeaveBalance เป็น Junction Table เชื่อม Employee และ LeaveType
- ตัวอย่าง: พนักงาน A มีวันลาป่วย 10 วัน, ลากิจ 6 วัน`}
                  className="w-full h-60 p-4 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  readOnly
                />
              </div>
            </div>
          </div>
        )}

        {/* Drawing/Upload Section */}
        {designApproach === 'draw' && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
              <PhotoIcon className="w-5 h-5 mr-2" />
              อัพโหลด ER Diagram
            </h3>
            
            <div className="space-y-4">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-600 transition-colors">
                <PhotoIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">คลิกเพื่ออัพโหลดรูป ER Diagram</p>
                <p className="text-sm text-gray-500">รองรับไฟล์ JPG, PNG, PDF (ขนาดไม่เกิน 10MB)</p>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      alert(`อัพโหลดไฟล์: ${e.target.files[0].name}`)
                    }
                  }}
                />
                <button
                  onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement | null)?.click()}
                  className="mt-3 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  เลือกไฟล์
                </button>
              </div>

              {/* Drawing Canvas Placeholder */}
              <div className="border border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-200 mb-2">หรือวาดที่นี่ (Simple Drawing)</h4>
                <div className="bg-gray-900 text-gray-100 border border-gray-800 rounded h-96 flex items-center justify-center">
                  <p className="text-gray-500">พื้นที่สำหรับวาด ER Diagram</p>
                  <p className="text-sm text-gray-400 ml-2">(ในการใช้งานจริงจะมี Drawing Canvas)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Considerations */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">การพิจารณาเพิ่มเติม</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                การปรับปรุงและขยายระบบในอนาคต
              </label>
              <div className="bg-blue-900/50 border border-blue-700 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-blue-300 mb-2">📈 Performance Optimization</h5>
                    <ul className="text-blue-200 space-y-1">
                      <li>• Indexing บน Foreign Keys</li>
                      <li>• Partitioning Historical Data</li>
                      <li>• Query Optimization</li>
                      <li>• Database Archiving</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-300 mb-2">🚀 Feature Enhancement</h5>
                    <ul className="text-blue-200 space-y-1">
                      <li>• Email/SMS Notifications</li>
                      <li>• HR Dashboard & Analytics</li>
                      <li>• Mobile Application</li>
                      <li>• Payroll Integration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-300 mb-2">🔒 Security & Compliance</h5>
                    <ul className="text-blue-200 space-y-1">
                      <li>• Role-based Access Control</li>
                      <li>• Audit Trail Enhancement</li>
                      <li>• Data Encryption</li>
                      <li>• Backup & Recovery</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-300 mb-2">⚡ Scalability</h5>
                    <ul className="text-blue-200 space-y-1">
                      <li>• Load Balancing</li>
                      <li>• Database Replication</li>
                      <li>• Microservices Architecture</li>
                      <li>• Cloud Migration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-200 mb-2">💡 เคล็ดลับการออกแบบ ER Diagram</h4>
          <ul className="text-yellow-100 text-sm space-y-1">
            <li>• ระบุ Primary Key และ Foreign Key ให้ชัดเจน</li>
            <li>• เลือก Data Type ที่เหมาะสมกับข้อมูล</li>
            <li>• คำนึงถึง Normalization เพื่อลด Data Redundancy</li>
            <li>• วางแผน Index สำหรับ Query ที่ใช้บ่อย</li>
            <li>• พิจารณา Performance และ Scalability</li>
            <li>• ออกแบบให้รองรับการเปลี่ยนแปลง Business Logic ในอนาคต</li>
          </ul>
        </div>
      </div>
    </QuestionLayout>
  )
}