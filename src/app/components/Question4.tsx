'use client'

import { useState } from 'react'
import QuestionLayout from './QuestionLayout'
import { PresentationChartBarIcon, PhotoIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function Question4() {
  const [designApproach, setDesignApproach] = useState<'draw' | 'text'>('draw')
  const [erDescription, setErDescription] = useState('')
  const [tableDescriptions, setTableDescriptions] = useState('')

  const handleBack = () => {
    console.log('Go back to previous page')
  }

  const handleHome = () => {
    console.log('Go back to home page')
  }

  return (
    <QuestionLayout
      questionNumber={4}
      title="Database Design (ER Diagram)"
      onBack={handleBack}
      onHome={handleHome}
    >
      <div className="space-y-8">
        {/* Question Description */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-3">โจทย์</h3>
          <p className="text-orange-800 leading-relaxed">
            จงออกแบบ Table ระบบลางานของพนักงานในรูปแบบ ER Diagram 
            แสดงชื่อ Table, ชื่อ Column และ Type ของข้อมูล 
            โดยโยงเส้นเชื่อมต่อระหว่าง Table และอธิบาย
          </p>
        </div>

        {/* System Requirements */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">ความต้องการของระบบลางาน</h3>
          <div className="text-blue-800 space-y-2">
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

        {/* Design Approach Selection */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">เลือกวิธีการออกแบบ</h3>
          <div className="space-y-3">
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input 
                type="radio" 
                name="approach" 
                value="draw"
                checked={designApproach === 'draw'}
                onChange={(e) => setDesignApproach(e.target.value as 'draw')}
                className="w-4 h-4 text-orange-600 focus:ring-orange-500"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-900 flex items-center">
                  <PhotoIcon className="w-5 h-5 mr-2" />
                  วาด ER Diagram หรืออัพโหลดรูป
                </div>
                <div className="text-sm text-gray-500">วาด ER Diagram ด้วยมือหรือใช้เครื่องมือ แล้วอัพโหลดรูป</div>
              </div>
            </label>
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input 
                type="radio" 
                name="approach" 
                value="text"
                checked={designApproach === 'text'}
                onChange={(e) => setDesignApproach(e.target.value as 'text')}
                className="w-4 h-4 text-orange-600 focus:ring-orange-500"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-900 flex items-center">
                  <DocumentTextIcon className="w-5 h-5 mr-2" />
                  อธิบายด้วยข้อความ
                </div>
                <div className="text-sm text-gray-500">อธิบายโครงสร้าง Table และความสัมพันธ์ด้วยข้อความ</div>
              </div>
            </label>
          </div>
        </div>

        {/* Drawing/Upload Section */}
        {designApproach === 'draw' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <PhotoIcon className="w-5 h-5 mr-2" />
              อัพโหลด ER Diagram
            </h3>
            
            <div className="space-y-4">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
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
              <div className="border border-gray-300 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">หรือวาดที่นี่ (Simple Drawing)</h4>
                <div className="bg-gray-50 border border-gray-200 rounded h-96 flex items-center justify-center">
                  <p className="text-gray-500">พื้นที่สำหรับวาด ER Diagram</p>
                  <p className="text-sm text-gray-400 ml-2">(ในการใช้งานจริงจะมี Drawing Canvas)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Text Description Section */}
        {designApproach === 'text' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <DocumentTextIcon className="w-5 h-5 mr-2" />
              อธิบายโครงสร้างฐานข้อมูล
            </h3>
            
            <div className="space-y-6">
              {/* Table Structure */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  โครงสร้าง Tables และ Columns
                </label>
                <textarea
                  value={tableDescriptions}
                  onChange={(e) => setTableDescriptions(e.target.value)}
                  placeholder={`อธิบายโครงสร้าง Tables ตัวอย่าง:

Table: Employee
- EmployeeID (INT, Primary Key, Auto Increment)
- FirstName (VARCHAR(50), NOT NULL)
- LastName (VARCHAR(50), NOT NULL)
- DepartmentID (INT, Foreign Key -> Department.DepartmentID)
- Position (VARCHAR(100))
- StartDate (DATE)

Table: Department  
- DepartmentID (INT, Primary Key, Auto Increment)
- DepartmentName (VARCHAR(100), NOT NULL)
- ManagerID (INT, Foreign Key -> Employee.EmployeeID)

Table: LeaveType
- LeaveTypeID (INT, Primary Key, Auto Increment)
- LeaveTypeName (VARCHAR(50), NOT NULL)
- MaxDaysPerYear (INT)

Table: LeaveRequest
- RequestID (INT, Primary Key, Auto Increment)
- EmployeeID (INT, Foreign Key -> Employee.EmployeeID)
- LeaveTypeID (INT, Foreign Key -> LeaveType.LeaveTypeID)
- StartDate (DATE, NOT NULL)
- EndDate (DATE, NOT NULL)
- Reason (TEXT)
- RequestDate (DATETIME, DEFAULT CURRENT_TIMESTAMP)
- Status (ENUM('Pending', 'Approved', 'Rejected'), DEFAULT 'Pending')

Table: LeaveApproval
- ApprovalID (INT, Primary Key, Auto Increment)
- RequestID (INT, Foreign Key -> LeaveRequest.RequestID)
- ApproverID (INT, Foreign Key -> Employee.EmployeeID)
- ApprovalDate (DATETIME)
- Comments (TEXT)

Table: LeaveBalance
- BalanceID (INT, Primary Key, Auto Increment)
- EmployeeID (INT, Foreign Key -> Employee.EmployeeID)
- LeaveTypeID (INT, Foreign Key -> LeaveType.LeaveTypeID)
- Year (INT)
- RemainingDays (INT)
- UsedDays (INT)`}
                  className="w-full h-80 font-mono text-sm p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Relationships */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ความสัมพันธ์ระหว่าง Tables (Relationships)
                </label>
                <textarea
                  value={erDescription}
                  onChange={(e) => setErDescription(e.target.value)}
                  placeholder={`อธิบายความสัมพันธ์ระหว่าง Tables ตัวอย่าง:

1. Employee → Department (Many-to-One)
   - พนักงานหลายคนอยู่ในแผนกเดียวกันได้
   - Employee.DepartmentID เชื่อมกับ Department.DepartmentID

2. Department → Employee (One-to-One for Manager)
   - แผนกมีหัวหน้าแผนกได้ 1 คน
   - Department.ManagerID เชื่อมกับ Employee.EmployeeID

3. Employee → LeaveRequest (One-to-Many)
   - พนักงาน 1 คนสามารถมีคำขอลาได้หลายครั้ง
   - LeaveRequest.EmployeeID เชื่อมกับ Employee.EmployeeID

4. LeaveType → LeaveRequest (One-to-Many)
   - ประเภทการลา 1 ประเภทสามารถมีการขอลาได้หลายครั้ง
   - LeaveRequest.LeaveTypeID เชื่อมกับ LeaveType.LeaveTypeID

5. LeaveRequest → LeaveApproval (One-to-One)
   - คำขอลา 1 ครั้งมีการอนุมัติ 1 ครั้ง
   - LeaveApproval.RequestID เชื่อมกับ LeaveRequest.RequestID

6. Employee → LeaveApproval (One-to-Many as Approver)
   - พนักงาน 1 คน (ผู้บังคับบัญชา) สามารถอนุมัติได้หลายครั้ง
   - LeaveApproval.ApproverID เชื่อมกับ Employee.EmployeeID

7. Employee + LeaveType → LeaveBalance (Many-to-Many through Junction Table)
   - พนักงาน 1 คนมียอดวันลาคงเหลือของแต่ละประเภทการลา
   - LeaveBalance เป็น Junction Table เชื่อม Employee และ LeaveType`}
                  className="w-full h-60 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Additional Considerations */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">การพิจารณาเพิ่มเติม</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Rules และ Constraints
              </label>
              <textarea
                placeholder={`อธิบาย Business Rules เพิ่มเติม เช่น:

- พนักงานสามารถขอลาได้เมื่อมีวันลาคงเหลือเพียงพอ
- หัวหน้าแผนกต้องเป็นพนักงานในแผนกเดียวกัน
- วันที่เริ่มลาต้องไม่เป็นอดีต
- วันที่สิ้นสุดลาต้องมากกว่าหรือเท่ากับวันที่เริ่มลา
- พนักงานไม่สามารถอนุมัติการลาของตนเองได้
- ต้องมีการ backup และ audit trail สำหรับการเปลี่ยนแปลงข้อมูล`}
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                การปรับปรุงและขยายระบบในอนาคต
              </label>
              <textarea
                placeholder={`ความเป็นไปได้ในการขยายระบบ เช่น:

- เพิ่มการแจ้งเตือนทาง Email/SMS
- เพิ่ม Dashboard สำหรับ HR และผู้บริหาร  
- เพิ่มการจัดการ Shift และ Overtime
- เพิ่มการเชื่อมต่อกับระบบ Payroll
- เพิ่มการ Export รายงาน
- Mobile Application สำหรับพนักงาน`}
                className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 เคล็ดลับการออกแบบ ER Diagram</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
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