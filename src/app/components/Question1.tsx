'use client'

import QuestionLayout from './QuestionLayout'

interface Question1Props {
  onBack?: () => void
  onHome?: () => void
}

export default function Question1({ onBack, onHome }: Question1Props) {
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

        {/* Answer Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-3">🎯 คำตอบ</h3>
          <p className="text-green-800 leading-relaxed">
            ใช้ Next.js และ Tailwind CSS ในการสร้าง Web Layout ตามรูปแบบที่กำหนด
          </p>
        </div>

        {/* Live Demo */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📱 ผลงานที่สร้าง</h3>
          
          {/* Embed the actual component */}
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <Question1Layout />
          </div>
        </div>

        {/* Technology Used */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🛠️ เทคโนโลยีที่ใช้</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 text-center">
              <div className="text-blue-600 font-semibold">Next.js</div>
              <div className="text-blue-500 text-sm">React Framework</div>
            </div>
            <div className="bg-cyan-100 border border-cyan-300 rounded-lg p-3 text-center">
              <div className="text-cyan-600 font-semibold">Tailwind CSS</div>
              <div className="text-cyan-500 text-sm">Utility-first CSS</div>
            </div>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 text-center">
              <div className="text-yellow-600 font-semibold">TypeScript</div>
              <div className="text-yellow-500 text-sm">Type Safety</div>
            </div>
            <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-center">
              <div className="text-green-600 font-semibold">Responsive</div>
              <div className="text-green-500 text-sm">Mobile First</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">✨ คุณสมบัติที่พัฒนา</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-purple-800">🎨 UI/UX Design</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Gradient backgrounds สวยงาม</li>
                <li>• Shadow effects และ borders</li>
                <li>• Smooth transitions</li>
                <li>• Modern card design</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-purple-800">📱 Responsive Features</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Mobile-first approach</li>
                <li>• Flexible grid layout</li>
                <li>• Adaptive typography</li>
                <li>• Touch-friendly design</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-purple-800">🚀 Interactive Elements</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Hover animations</li>
                <li>• Transform effects</li>
                <li>• Color transitions</li>
                <li>• Scale animations</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-purple-800">⚡ Performance</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• CSS-only animations</li>
                <li>• Optimized components</li>
                <li>• Fast loading</li>
                <li>• SEO friendly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Summary */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-4">📝 สรุปการพัฒนา</h3>
          <div className="text-orange-800 space-y-3">
            <p>
              <strong>โครงสร้าง Layout:</strong> ปฏิบัติตามโจทย์ที่กำหนด โดยมีส่วนประกอบ Banner, ข้อความ, และรูปภาพ 3 รูป
            </p>
            <p>
              <strong>การออกแบบ:</strong> ใช้ Tailwind CSS ในการสร้าง modern design พร้อม animations และ responsive layout
            </p>
            <p>
              <strong>เทคนิคที่ใช้:</strong> Gradient backgrounds, CSS Grid, Flexbox, Hover effects, และ Transform animations
            </p>
            <p>
              <strong>ความเข้ากันได้:</strong> รองรับทุกขนาดหน้าจอ จาก mobile ถึง desktop
            </p>
          </div>
        </div>
      </div>
    </QuestionLayout>
  )
}

// Component ที่แสดงผลจริง (นำมาจากโค้ดที่คุณส่งมา)
function Question1Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Container */}
        <div className="bg-orange-100 border-4 border-gray-800 rounded-lg p-8 shadow-2xl">
          
          {/* Banner Section */}
          <div className="mb-8">
            <div className="bg-white border-2 border-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold py-4 px-6 rounded-lg shadow-md">
                  🎨 รูป Banner.jpg
                </div>
                <p className="text-gray-600 mt-2 text-sm">Beautiful Banner Image</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="mb-8">
            <div className="bg-white border-2 border-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">ข้อความ</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  ยินดีต้อนรับสู่เว็บไซต์ของเรา นี่คือพื้นที่สำหรับแสดงข้อความหลัก 
                  ที่สามารถปรับแต่งเนื้อหาได้ตามต้องการ มีการออกแบบที่สวยงาม 
                  และใช้งานง่าย
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="group">
              <div className="bg-white border-2 border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-inner">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🖼️</div>
                    <div>รูป image.jpg</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                    Gallery Image 1
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Beautiful artwork</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="group">
              <div className="bg-white border-2 border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-inner">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🌟</div>
                    <div>รูป image.jpg</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    Gallery Image 2
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Stunning visual</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group">
              <div className="bg-white border-2 border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-inner">
                  <div className="text-center">
                    <div className="text-3xl mb-2">✨</div>
                    <div>รูป image.jpg</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    Gallery Image 3
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Amazing creation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <div className="bg-gray-800 text-white py-4 px-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">
                🎨 Web Layout Design - Question 1 
              </p>
              <p className="text-sm text-gray-300 mt-1">
                Created with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              💻 เทคโนโลยีที่ใช้
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                React
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}