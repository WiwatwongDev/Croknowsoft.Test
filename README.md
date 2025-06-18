# 📝 แบบทดสอบ Programmer - CroKnowSoft

> **คำตอบแบบทดสอบสำหรับตำแหน่ง Programmer**  
> สร้างด้วย Next.js 15, TypeScript, Tailwind CSS

## 🌟 Live Demo (ทดสอบได้ทันที)

**🚀 [https://croknowsoft-test-2x74.vercel.app](https://croknowsoft-test-2x74.vercel.app)**

*คลิกเพื่อทดสอบแบบทดสอบแบบ Interactive ได้ทันที - ทุก Function ทำงานได้จริง!*

---

## 🎯 สารบัญ

- [Live Demo](#-live-demo-ทดสอบได้ทันที)
- [ภาพรวมโปรเจ็ค](#ภาพรวมโปรเจ็ค)
- [รายละเอียดแต่ละข้อ](#รายละเอียดแต่ละข้อ)
- [การติดตั้งและรันโปรเจ็ค](#การติดตั้งและรันโปรเจ็ค)
- [โครงสร้างโปรเจ็ค](#โครงสร้างโปรเจ็ค)
- [เทคโนโลยีที่ใช้](#เทคโนโลยีที่ใช้)
- [คุณสมบัติเด่น](#คุณสมบัติเด่น)
- [ข้อมูลผู้สมัคร](#ข้อมูลผู้สมัคร)

---

## 🚀 ภาพรวมโปรเจ็ค

แบบทดสอบนี้ประกอบด้วย **5 ข้อหลัก** ที่แสดงความสามารถด้าน Programming ครอบคลุม:

| ข้อที่ | หัวข้อ | เทคโนโลยี | สถานะ |
|-------|--------|------------|-------|
| **1** | [Frontend Web Application](#-ข้อ-1-frontend-web-application) | Next.js + Tailwind CSS | ✅ สมบูรณ์ |
| **2** | [Programming Logic](#-ข้อ-2-programming-logic) | JavaScript/TypeScript | ✅ สมบูรณ์ |
| **3** | [Database & SQL](#-ข้อ-3-database--sql) | SQL Server + T-SQL | ✅ สมบูรณ์ |
| **4** | [Database Design (ER Diagram)](#-ข้อ-4-database-design-er-diagram) | ER Diagram + SQL | ✅ สมบูรณ์ |
| **5** | [Calculator Application](#-ข้อ-5-calculator-application) | React Components | ✅ สมบูรณ์ |

### 🌟 ไฮไลท์
- **🌐 Live Demo Available** - [ทดสอบได้ทันทีที่ croknowsoft-test-2x74.vercel.app](https://croknowsoft-test-2x74.vercel.app)
- **Interactive Web Application** - ทุกคำตอบทำงานได้จริง
- **Real-time Testing** - ทดสอบ function ได้ทันที
- **Complete Documentation** - คำอธิบายครบถ้วน
- **Professional UI/UX** - ออกแบบสวยงาม responsive
- **Best Practices** - เขียนโค้ดตามมาตรฐาน

---

## 📋 รายละเอียดแต่ละข้อ

### 🎨 ข้อ 1: Frontend Web Application

**โจทย์:** สร้าง Web Layout ตามรูปแบบที่กำหนด

**คำตอบ:**
- ✅ **Live Demo** - [ทดสอบได้ทันทีที่นี่](https://croknowsoft-test-2x74.vercel.app) - แสดงผลจริงใน browser
- ✅ **Responsive Design** - รองรับทุกหน้าจอ
- ✅ **Modern CSS** - Gradient, Animation, Hover Effects
- ✅ **Component Structure** - แยกเป็น React Components

**เทคโนโลจี:**
```typescript
// Next.js + TypeScript + Tailwind CSS
- Layout: CSS Grid, Flexbox
- Styling: Tailwind Utility Classes
- Animations: CSS Transitions & Transforms
- Responsive: Mobile-first approach
```

### 🧮 ข้อ 2: Programming Logic

**โจทย์:** เขียน Function สำหรับ:
1. ตรวจสอบ Input (null, empty, whitespace)
2. คำนวณอายุจากวัน-เดือน-ปี  
3. หาผลรวมเฉพาะตัวเลขจาก String Array

**คำตอบ:**
- ✅ **Working Functions** - [ทดสอบได้จริงใน UI](https://croknowsoft-test-2x74.vercel.app)
- ✅ **Error Handling** - จัดการ edge cases ครบถ้วน
- ✅ **Interactive Testing** - ระบบทดสอบ real-time
- ✅ **Code Explanation** - อธิบายอัลกอริทึม

**ตัวอย่างโค้ด:**
```javascript
// ข้อ 2.1 - ตรวจสอบ Input
function checkInput(input) {
    if (input === null || input === undefined) {
        return "กรุณาระบุข้อความ";
    }
    if (input === "" || input.trim() === "") {
        return "กรุณาระบุข้อความ";
    }
    return input;
}

// ข้อ 2.3 - หาผลรวมจาก Array
// Input: ["a","100","b","99","Hello","*", "20","1A","10+"]
// Output: 219 (100 + 99 + 20)
```

### 🗃️ ข้อ 3: Database & SQL

**โจทย์:** สร้าง Table และเขียน SQL Query ต่างๆ

**คำตอบ:**
- ✅ **8 SQL Queries** - ครบทุกข้อที่โจทย์กำหนด
- ✅ **CREATE TABLE** - โครงสร้าง UserMember สมบูรณ์
- ✅ **Advanced Queries** - JOIN, GROUP BY, CASE WHEN
- ✅ **Result Tables** - [ดูผลลัพธ์แต่ละ Query ได้ที่ Live Demo](https://croknowsoft-test-2x74.vercel.app)

**SQL Highlights:**
```sql
-- ข้อ 3.6 - เพิ่ม StatusName Column
SELECT UserID, FirstName, StatusID,
    CASE 
        WHEN StatusID = 1 THEN N'ใช้งาน'
        WHEN StatusID = 0 THEN N'ไม่ใช้งาน'
    END AS StatusName
FROM UserMember;

-- ข้อ 3.7 - INNER JOIN
SELECT u.Username, c.ContactDetail AS Phone
FROM UserMember u
INNER JOIN UserContact c ON u.UserID = c.UserID;
```

### 📊 ข้อ 4: Database Design (ER Diagram)

**โจทย์:** ออกแบบระบบลางานของพนักงาน

**คำตอบ:**
- ✅ **6 Tables** - Department, Employee, LeaveType, LeaveRequest, LeaveApproval, LeaveBalance
- ✅ **Complete ERD** - [ดู ER Diagram แบบ Interactive ได้ที่ Live Demo](https://croknowsoft-test-2x74.vercel.app)
- ✅ **Business Rules** - กฎเกณฑ์และ Constraints
- ✅ **SQL Scripts** - CREATE TABLE statements พร้อมใช้

**Database Schema:**
```sql
-- ตัวอย่าง Table Employee
CREATE TABLE Employee (
    EmployeeID      INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeCode    NVARCHAR(20) NOT NULL UNIQUE,
    FirstName       NVARCHAR(50) NOT NULL,
    LastName        NVARCHAR(50) NOT NULL,
    DepartmentID    INT NOT NULL,
    SupervisorID    INT NULL,
    
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID),
    FOREIGN KEY (SupervisorID) REFERENCES Employee(EmployeeID)
);
```

### 🔢 ข้อ 5: Calculator Application

**โจทย์:** สร้างโปรแกรมคำนวณอย่างง่าย

**คำตอบ:**
- ✅ **Working Calculator** - [ทดลองใช้เครื่องคิดเลขได้ที่ Live Demo](https://croknowsoft-test-2x74.vercel.app)
- ✅ **Complete Operations** - +, -, ×, ÷
- ✅ **UI Components** - ปุ่มกด, Display, Clear functions
- ✅ **Multiple Submission Options** - Source Code, GitHub, Live Demo

**Features:**
- 🧮 เครื่องคิดเลขที่ใช้งานได้จริง
- 🎨 UI สวยงาม responsive
- ⌨️ รองรับการกดปุ่ม
- 🔄 Clear และ Clear Entry
- 📱 Mobile-friendly design

---

## 🚀 การติดตั้งและรันโปรเจ็ค

### 🌐 ตัวเลือกการทดสอบ

#### 1. Live Demo (แนะนำ - ใช้ได้ทันที)
**🚀 [https://croknowsoft-test-2x74.vercel.app](https://croknowsoft-test-2x74.vercel.app)**

*เปิดใน browser ได้เลย - ไม่ต้องติดตั้งอะไร*

#### 2. รันในเครื่องตัวเอง

### ข้อกำหนดระบบ
- **Node.js** 18.0.0 หรือใหม่กว่า
- **npm, yarn, pnpm หรือ bun**

### วิธีการติดตั้ง

```bash
# 1. Clone หรือ Download โปรเจ็ค
git clone [repository-url]
cd programmer-test

# 2. ติดตั้ง Dependencies
npm install
# หรือ
yarn install

# 3. รันโปรเจ็ค
npm run dev
# หรือ
yarn dev

# 4. เปิด Browser ที่
http://localhost:3000
```

### สคริปต์ที่มี
```json
{
  "dev": "next dev --turbopack",    // รัน Development Server
  "build": "next build",            // Build สำหรับ Production
  "start": "next start",            // รัน Production Server
  "lint": "next lint"               // ตรวจสอบ Code Quality
}
```

---

## 📁 โครงสร้างโปรเจ็ค

```
programmer-test/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/          # React Components หลัก
│   │   │   ├── 📄 Question1.tsx    # ข้อ 1 - Frontend
│   │   │   ├── 📄 Question2.tsx    # ข้อ 2 - Programming Logic
│   │   │   ├── 📄 Question3.tsx    # ข้อ 3 - Database & SQL
│   │   │   ├── 📄 Question4.tsx    # ข้อ 4 - ER Diagram
│   │   │   ├── 📄 Question5.tsx    # ข้อ 5 - Calculator
│   │   │   └── 📄 QuestionLayout.tsx # Layout Component
│   │   ├── 📄 page.tsx             # หน้า Homepage
│   │   ├── 📄 layout.tsx           # Root Layout
│   │   └── 📄 globals.css          # Global Styles
│   └── 📁 public/                  # Static Assets
├── 📄 package.json                 # Dependencies
├── 📄 next.config.ts               # Next.js Config
├── 📄 tailwind.config.js           # Tailwind Config
├── 📄 tsconfig.json                # TypeScript Config
├── 📄 ProgrammerTest.docx          # โจทย์ต้นฉบับ
├── 📄 ระบบลางาน - Database Design.md # เอกสาร ER Diagram
└── 📄 README.md                    # ไฟล์นี้
```

---

## 🛠️ เทคโนโลยีที่ใช้

### Frontend Stack
| เทคโนโลยี | เวอร์ชัน | การใช้งาน |
|------------|----------|------------|
| **Next.js** | 15.3.3 | React Framework, SSR, Routing |
| **React** | 19.0.0 | UI Components, State Management |
| **TypeScript** | 5.0 | Type Safety, Better DX |
| **Tailwind CSS** | 4.0 | Utility-first CSS Framework |

### Development Tools
| Tool | เวอร์ชัน | การใช้งาน |
|------|----------|------------|
| **ESLint** | 9.0 | Code Linting |
| **PostCSS** | Latest | CSS Processing |
| **Turbopack** | Built-in | Fast Build Tool |

### Deployment & Hosting
| Platform | การใช้งาน |
|----------|------------|
| **Vercel** | Production Hosting, Auto Deploy |
| **GitHub** | Version Control, CI/CD |

### Additional Libraries
| Library | การใช้งาน |
|---------|------------|
| **@heroicons/react** | Beautiful Icons |
| **@headlessui/react** | Accessible UI Components |
| **lucide-react** | Additional Icons |
| **react-hook-form** | Form Management |

---

## ✨ คุณสมบัติเด่น

### 🌐 Live Demo Features
- **🚀 Instant Access** - [เปิดใช้งานได้ทันทีที่ croknowsoft-test-2x74.vercel.app](https://croknowsoft-test-2x74.vercel.app)
- **📱 Cross-Platform** - ทำงานได้ทุกอุปกรณ์ ทุก browser
- **⚡ Fast Loading** - โหลดเร็วด้วย Vercel CDN
- **🔄 Always Updated** - Auto-deploy จาก GitHub

### 🎨 User Experience
- **Interactive UI** - ทุกอย่างคลิกได้ ทดสอบได้
- **Responsive Design** - รองรับ Mobile, Tablet, Desktop
- **Modern Animations** - Smooth transitions และ hover effects
- **Dark/Light Theme** - รองรับ system preference

### 💻 Code Quality
- **TypeScript** - Type safety และ better intellisense
- **Component-based** - แยก logic เป็น reusable components
- **Clean Code** - ตั้งชื่อตัวแปรชัดเจน, มี comments
- **Best Practices** - ตาม React และ Next.js conventions

### 🚀 Performance
- **Next.js 15** - ใช้ features ล่าสุด
- **Turbopack** - Fast development builds
- **Optimized Components** - ไม่มี unnecessary re-renders
- **Lazy Loading** - โหลดเฉพาะส่วนที่ต้องการ

### 📱 Responsive Features
- **Mobile-first** - ออกแบบเริ่มจาก mobile ก่อน
- **Touch-friendly** - ปุ่มขนาดเหมาะสมสำหรับมือถือ
- **Adaptive Layout** - ปรับ layout ตามขนาดหน้าจอ
- **Cross-browser** - ทำงานได้ทุก browser สมัยใหม่

---

## 📞 ข้อมูลผู้สมัคร

**ตำแหน่งที่สมัคร:** Programmer  

### 🎯 Skills ที่แสดงในแบบทดสอบนี้

#### Frontend Development
- ✅ HTML5, CSS3, JavaScript/TypeScript
- ✅ React, Next.js Framework
- ✅ Tailwind CSS, Responsive Design
- ✅ Component Architecture

#### Backend & Database
- ✅ SQL Server, T-SQL
- ✅ Database Design, ER Diagram
- ✅ Complex Queries, JOINs
- ✅ Data Normalization

#### Programming Logic
- ✅ Algorithm Design
- ✅ Error Handling
- ✅ Input Validation
- ✅ Data Type Conversion

#### Software Engineering
- ✅ Clean Code Principles
- ✅ Component-based Architecture
- ✅ Documentation
- ✅ Version Control (Git)

#### Deployment & DevOps
- ✅ Vercel Deployment
- ✅ CI/CD Pipeline
- ✅ Production Optimization
- ✅ Performance Monitoring

---

## 🏆 สรุป

แบบทดสอบนี้แสดงให้เห็นถึง:

1. **ความสามารถด้าน Frontend** - สร้าง modern web application ด้วย Next.js
2. **ทักษะ Programming Logic** - แก้ปัญหาด้วยอัลกอริทึมที่มีประสิทธิภาพ
3. **ความเชี่ยวชาญ Database** - ออกแบบและเขียน SQL ระดับสูง
4. **การคิดเชิงระบบ** - ออกแบบ ER Diagram ที่ครบถ้วน
5. **ประสบการณ์จริง** - สร้าง application ที่ใช้งานได้จริง
6. **ทักษะ Deployment** - Deploy production app บน Vercel

### 🌟 พิเศษ: Live Demo
**🚀 ทดสอบได้ทันทีที่: [https://croknowsoft-test-2x74.vercel.app](https://croknowsoft-test-2x74.vercel.app)**

*ไม่ต้องติดตั้งอะไร - คลิกเข้าไปทดสอบได้เลย!*

**ขอบคุณที่ให้โอกาสในการทำแบบทดสอบนี้** 🙏

---

## 📋 Checklist สำหรับการส่งงาน

- [x] ✅ ครบทั้ง 5 ข้อตามโจทย์
- [x] ✅ โค้ดทำงานได้จริงไม่มี error
- [x] ✅ UI/UX สวยงาม professional
- [x] ✅ มี documentation ครบถ้วน
- [x] ✅ ทดสอบ responsive design แล้ว
- [x] ✅ ตรวจสอบ code quality แล้ว
- [x] ✅ **Deploy Live Demo สำเร็จแล้ว** 🌐
- [x] ✅ ทดสอบ Live Demo ใช้งานได้แล้ว
- [x] ✅ พร้อมส่งให้ HR ตรวจสอบ

**สถานะ: ✅ พร้อมส่ง + Live Demo Available**

---

*สร้างด้วย ❤️ โดยผู้สมัครตำแหน่ง Programmer*  
*CroKnowSoft Programming Assessment 2024*

**🌐 Live Demo: [https://croknowsoft-test-2x74.vercel.app](https://croknowsoft-test-2x74.vercel.app)**