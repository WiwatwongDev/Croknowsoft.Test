'use client'

import { useState } from 'react'
import QuestionLayout from './QuestionLayout'
import { CalculatorIcon, CodeBracketIcon, EyeIcon, LinkIcon } from '@heroicons/react/24/outline'

export default function Question5() {
  const [submissionType, setSubmissionType] = useState<'code' | 'github' | 'demo'>('code')
  const [sourceCode, setSourceCode] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [description, setDescription] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  // Simple calculator for demonstration
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const handleBack = () => {
    console.log('Go back to previous page')
  }

  const handleHome = () => {
    console.log('Go back to home page')
  }

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num)
      setWaitingForNewValue(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const result = calculate(currentValue, inputValue, operation)
      
      setDisplay(String(result))
      setPreviousValue(result)
    }

    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+': return firstValue + secondValue
      case '-': return firstValue - secondValue
      case '*': return firstValue * secondValue
      case '/': return firstValue / secondValue
      case '=': return secondValue
      default: return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const result = calculate(previousValue, inputValue, operation)
      setDisplay(String(result))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  const clearAll = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  const clearEntry = () => {
    setDisplay('0')
    setWaitingForNewValue(false)
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

        {/* Calculator Demo/Reference */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <CalculatorIcon className="w-5 h-5 mr-2" />
            ตัวอย่างโปรแกรมคำนวณที่ต้องการ
          </h3>
          
          {/* Reference Calculator */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-xs mx-auto shadow-lg">
            <div className="mb-4">
              <div className="bg-gray-900 text-white text-right text-2xl p-4 rounded border border-gray-400 font-mono">
                {display}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {/* Row 1 */}
              <button 
                onClick={clearAll}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded font-semibold transition-colors"
              >
                AC
              </button>
              <button 
                onClick={clearEntry}
                className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded font-semibold transition-colors"
              >
                CE
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded font-semibold transition-colors">
                ±
              </button>
              <button 
                onClick={() => inputOperation('/')}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded font-semibold transition-colors"
              >
                ÷
              </button>
              
              {/* Row 2 */}
              {['7', '8', '9'].map(num => (
                <button 
                  key={num}
                  onClick={() => inputNumber(num)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded font-semibold transition-colors"
                >
                  {num}
                </button>
              ))}
              <button 
                onClick={() => inputOperation('*')}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded font-semibold transition-colors"
              >
                ×
              </button>
              
              {/* Row 3 */}
              {['4', '5', '6'].map(num => (
                <button 
                  key={num}
                  onClick={() => inputNumber(num)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded font-semibold transition-colors"
                >
                  {num}
                </button>
              ))}
              <button 
                onClick={() => inputOperation('-')}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded font-semibold transition-colors"
              >
                −
              </button>
              
              {/* Row 4 */}
              {['1', '2', '3'].map(num => (
                <button 
                  key={num}
                  onClick={() => inputNumber(num)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded font-semibold transition-colors"
                >
                  {num}
                </button>
              ))}
              <button 
                onClick={() => inputOperation('+')}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded font-semibold transition-colors row-span-2"
              >
                +
              </button>
              
              {/* Row 5 */}
              <button 
                onClick={() => inputNumber('0')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded font-semibold transition-colors col-span-2"
              >
                0
              </button>
              <button 
                onClick={() => inputNumber('.')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded font-semibold transition-colors"
              >
                .
              </button>
              {/* + button spans two rows, so this row has only 3 buttons */}
            </div>
            
            {/* Equals button */}
            <button 
              onClick={performCalculation}
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded font-semibold transition-colors w-full mt-2"
            >
              =
            </button>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            ตัวอย่างโปรแกรมคำนวณที่ต้องการ (สามารถใช้งานได้จริง)
          </p>
        </div>

        {/* Submission Type Selection */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">เลือกวิธีการส่งคำตอบ</h3>
          <div className="space-y-3">
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input 
                type="radio" 
                name="submission" 
                value="code"
                checked={submissionType === 'code'}
                onChange={(e) => setSubmissionType(e.target.value as 'code')}
                className="w-4 h-4 text-red-600 focus:ring-red-500"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-900 flex items-center">
                  <CodeBracketIcon className="w-5 h-5 mr-2" />
                  Source Code
                </div>
                <div className="text-sm text-gray-500">เขียนโค้ดในช่องด้านล่าง</div>
              </div>
            </label>
            
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input 
                type="radio" 
                name="submission" 
                value="github"
                checked={submissionType === 'github'}
                onChange={(e) => setSubmissionType(e.target.value as 'github')}
                className="w-4 h-4 text-red-600 focus:ring-red-500"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-900 flex items-center">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  GitHub Repository
                </div>
                <div className="text-sm text-gray-500">ส่ง URL ของ GitHub Repository</div>
              </div>
            </label>
            
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input 
                type="radio" 
                name="submission" 
                value="demo"
                checked={submissionType === 'demo'}
                onChange={(e) => setSubmissionType(e.target.value as 'demo')}
                className="w-4 h-4 text-red-600 focus:ring-red-500"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-900 flex items-center">
                  <EyeIcon className="w-5 h-5 mr-2" />
                  Live Demo URL
                </div>
                <div className="text-sm text-gray-500">ส่ง URL ของ Demo ที่ Host แล้ว</div>
              </div>
            </label>
          </div>
        </div>

        {/* Code Submission */}
        {submissionType === 'code' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                Source Code
              </h3>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <EyeIcon className="w-4 h-4" />
                <span>{showPreview ? 'ซ่อน Preview' : 'แสดง Preview'}</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  เขียนโค้ดที่นี่
                </label>
                <textarea
                  value={sourceCode}
                  onChange={(e) => setSourceCode(e.target.value)}
                  placeholder={`<!-- Calculator HTML/CSS/JS -->
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        .calculator {
            max-width: 300px;
            margin: 50px auto;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            background: #f9f9f9;
        }
        .display {
            width: 100%;
            height: 60px;
            font-size: 24px;
            text-align: right;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        button {
            height: 50px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .number { background: #e9e9e9; }
        .operator { background: #007bff; color: white; }
        .equals { background: #28a745; color: white; }
        .clear { background: #dc3545; color: white; }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" class="display" id="display" readonly>
        <div class="buttons">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button class="clear" onclick="clearEntry()">CE</button>
            <button class="operator" onclick="inputOperator('/')">/</button>
            <button class="operator" onclick="inputOperator('*')">*</button>
            
            <button class="number" onclick="inputNumber('7')">7</button>
            <button class="number" onclick="inputNumber('8')">8</button>
            <button class="number" onclick="inputNumber('9')">9</button>
            <button class="operator" onclick="inputOperator('-')">-</button>
            
            <button class="number" onclick="inputNumber('4')">4</button>
            <button class="number" onclick="inputNumber('5')">5</button>
            <button class="number" onclick="inputNumber('6')">6</button>
            <button class="operator" onclick="inputOperator('+')">+</button>
            
            <button class="number" onclick="inputNumber('1')">1</button>
            <button class="number" onclick="inputNumber('2')">2</button>
            <button class="number" onclick="inputNumber('3')">3</button>
            <button class="equals" onclick="calculate()" rowspan="2">=</button>
            
            <button class="number" onclick="inputNumber('0')" colspan="2">0</button>
            <button class="number" onclick="inputNumber('.')">.</button>
        </div>
    </div>

    <script>
        let display = document.getElementById('display');
        let currentInput = '0';
        let previousInput = null;
        let operator = null;
        let waitingForNewInput = false;

        function updateDisplay() {
            display.value = currentInput;
        }

        function inputNumber(num) {
            if (waitingForNewInput) {
                currentInput = num;
                waitingForNewInput = false;
            } else {
                currentInput = currentInput === '0' ? num : currentInput + num;
            }
            updateDisplay();
        }

        function inputOperator(op) {
            if (operator && !waitingForNewInput) {
                calculate();
            }
            previousInput = currentInput;
            operator = op;
            waitingForNewInput = true;
        }

        function calculate() {
            if (operator && previousInput !== null) {
                const prev = parseFloat(previousInput);
                const current = parseFloat(currentInput);
                
                switch (operator) {
                    case '+': currentInput = (prev + current).toString(); break;
                    case '-': currentInput = (prev - current).toString(); break;
                    case '*': currentInput = (prev * current).toString(); break;
                    case '/': currentInput = (prev / current).toString(); break;
                }
                
                operator = null;
                previousInput = null;
                waitingForNewInput = true;
                updateDisplay();
            }
        }

        function clearDisplay() {
            currentInput = '0';
            previousInput = null;
            operator = null;
            waitingForNewInput = false;
            updateDisplay();
        }

        function clearEntry() {
            currentInput = '0';
            updateDisplay();
        }

        updateDisplay();
    </script>
</body>
</html>

หรือใช้ภาษาอื่นๆ เช่น Python, Java, C#, etc.`}
                  className="w-full h-96 font-mono text-sm p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              {showPreview && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preview
                  </label>
                  <div className="h-96 border border-gray-300 rounded-lg overflow-hidden">
                    <iframe
                      srcDoc={sourceCode || '<p style="padding: 20px; color: #666;">เขียนโค้ดเพื่อดู Preview</p>'}
                      className="w-full h-full"
                      title="Calculator Preview"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* GitHub Submission */}
        {submissionType === 'github' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <LinkIcon className="w-5 h-5 mr-2" />
              GitHub Repository
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub Repository URL
                </label>
                <input
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username/calculator-app"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">📋 Checklist สำหรับ GitHub Repository</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>✓ Repository เป็น Public หรือ Share กับ HR</li>
                  <li>✓ มีไฟล์ README.md อธิบายวิธีการใช้งาน</li>
                  <li>✓ โค้ดมี Comments อธิบายการทำงาน</li>
                  <li>✓ มีการจัด Folder Structure ที่เป็นระเบียบ</li>
                  <li>✓ ใส่ License (ถ้าต้องการ)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Demo Submission */}
        {submissionType === 'demo' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <EyeIcon className="w-5 h-5 mr-2" />
              Live Demo
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Demo URL
                </label>
                <input
                  type="url"
                  placeholder="https://your-calculator-demo.netlify.app"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">🌐 แนะนำ Platform สำหรับ Deploy</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• <strong>Netlify:</strong> สำหรับ Static Site (HTML/CSS/JS)</li>
                  <li>• <strong>Vercel:</strong> สำหรับ React, Next.js</li>
                  <li>• <strong>GitHub Pages:</strong> Host ฟรีจาก GitHub Repository</li>
                  <li>• <strong>CodePen:</strong> สำหรับ Demo เล็กๆ</li>
                  <li>• <strong>Heroku:</strong> สำหรับ Backend Application</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">คำอธิบายโครงการ</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                อธิบายการทำงานของโปรแกรม
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={`อธิบายเกี่ยวกับโปรแกรมคำนวณที่สร้าง เช่น:

• ภาษาโปรแกรมมิ่งหรือ Framework ที่ใช้
• คุณสมบัติหลักของโปรแกรม (การบวก ลบ คูณ หาร)
• คุณสมบัติพิเศษ (ถ้ามี) เช่น Memory function, History, etc.
• ความท้าทายในการพัฒนาและวิธีแก้ไข
• การปรับปรุงที่จะทำในอนาคต

ตัวอย่าง:
โปรแกรมคำนวณนี้ถูกพัฒนาด้วย HTML, CSS และ JavaScript โดยมีคุณสมบัติพื้นฐานครบถ้วน สามารถทำการคำนวณพื้นฐาน (+, -, *, /) ได้อย่างถูกต้อง มี UI ที่เรียบง่ายและใช้งานง่าย รองรับการใช้งานผ่าน Mouse และ Keyboard`}
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                เทคโนโลยีที่ใช้
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['HTML/CSS/JS', 'React', 'Vue.js', 'Angular', 'Python', 'Java', 'C#', 'PHP', 'Node.js', 'Flutter', 'React Native', 'อื่นๆ'].map((tech) => (
                  <label key={tech} className="flex items-center">
                    <input type="checkbox" className="mr-2 text-red-600 focus:ring-red-500" />
                    <span className="text-sm text-gray-700">{tech}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 ความต้องการขั้นต่ำ</h3>
          <div className="text-blue-800 space-y-2">
            <p className="font-medium">โปรแกรมคำนวณต้องมีคุณสมบัติอย่างน้อย:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>การบวก (+), ลบ (-), คูณ (*), หาร (/)</li>
              <li>การแสดงผลตัวเลขและผลลัพธ์</li>
              <li>ปุ่ม Clear (C) และ Clear Entry (CE)</li>
              <li>การทำงานตามลำดับการกด (Sequential calculation)</li>
              <li>UI ที่เข้าใจง่ายและใช้งานได้จริง</li>
            </ul>
            
            <p className="font-medium mt-4">คุณสมบัติพิเศษ (ไม่บังคับ):</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>รองรับทศนิยม</li>
              <li>การจัดการ Error (เช่น หารด้วย 0)</li>
              <li>Memory functions (M+, M-, MR, MC)</li>
              <li>History ของการคำนวณ</li>
              <li>Responsive Design</li>
              <li>Keyboard Support</li>
            </ul>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 เคล็ดลับ</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• เริ่มจากการวางแผน UI Layout ก่อน</li>
            <li>• เขียน Logic การคำนวณแยกจาก UI</li>
            <li>• ทดสอบกับตัวเลขหลากหลายรูปแบบ</li>
            <li>• พิจารณา Edge Cases เช่น การหารด้วย 0</li>
            <li>• ใส่ Comments อธิบายโค้ดให้ชัดเจน</li>
            <li>• ทำให้ UI ดูสวยงามและใช้งานง่าย</li>
          </ul>
        </div>
      </div>
    </QuestionLayout>
  )
}