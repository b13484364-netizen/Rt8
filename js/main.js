// استيراد البيانات من ملف data.js
import { questions, perfumes, luxuryPerfumes } from './data.js';

// --- تحديد عناصر الواجهة الرسومية (DOM Elements) ---
const welcomeScreen = document.getElementById('welcomeScreen');
const quizContainer = document.getElementById('quizContainer');
const resultsScreen = document.getElementById('resultsScreen');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const progressBar = document.getElementById('progressBar');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const questionSubtext = document.getElementById('questionSubtext');
const choicesContainer = document.getElementById('choicesContainer');
const resultPerfume = document.getElementById('resultPerfume');
const resultCategory = document.getElementById('resultCategory');
const resultDescription = document.getElementById('resultDescription');
const perfumeDetails = document.getElementById('perfumeDetails');
const perfumeCarousel = document.getElementById('perfumeCarousel');

// --- متغيرات حالة التطبيق (State) ---
let currentQuestion = 0;
let userPoints = {};

// --- الوظائف الرئيسية (Core Functions) ---

function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestion = 0;
    userPoints = {};
    showQuestion(0);
    updateProgress();
}

function showQuestion(index) {
    const question = questions[index];
    questionNumber.textContent = `السؤال ${index + 1} من ${questions.length}`;
    questionText.textContent = question.text;
    questionSubtext.textContent = question.subtext;
    choicesContainer.innerHTML = '';

    // ... (نفس منطق عرض الأسئلة من الكود الأصلي)
    question.choices.forEach((choice, choiceIndex) => {
        const button = document.createElement('button');
        button.className = 'choice-btn bg-gray-50 dark:bg-gray-700 hover:bg-primary hover:text-white text-gray-800 dark:text-white p-6 rounded-2xl text-lg font-medium transition-all duration-300 text-right border-2 border-transparent hover:border-primary';
        button.innerHTML = choice.text;
        button.onclick = () => selectChoice(index, choiceIndex);
        choicesContainer.appendChild(button);
    });
}

function selectChoice(questionIndex, choiceIndex) {
    const choice = questions[questionIndex].choices[choiceIndex];
    
    // إضافة النقاط
    for (const [key, value] of Object.entries(choice.points)) {
        userPoints[key] = (userPoints[key] || 0) + value;
    }

    // الانتقال للسؤال التالي أو عرض النتائج
    if (questionIndex < questions.length - 1) {
        currentQuestion++;
        setTimeout(() => {
            showQuestion(currentQuestion);
            updateProgress();
        }, 300);
    } else {
        setTimeout(showResults, 300);
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    quizContainer.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    let bestPerfume = null;
    let bestScore = -1;

    // ... (نفس منطق حساب أفضل عطر من الكود الأصلي)
    perfumes.forEach(perfume => {
        let score = 0;
        for (const [key, value] of Object.entries(perfume.points)) {
            if (userPoints[key]) {
                score += Math.min(userPoints[key], value) * 2;
                score += userPoints[key] * value;
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestPerfume = perfume;
        }
    });

    // ... (نفس منطق عرض النتائج وتفاصيل العطر)
    // Display results
    resultPerfume.textContent = bestPerfume.name;
    resultCategory.textContent = bestPerfume.category;
    resultDescription.textContent = bestPerfume.description;

    // Display perfume details... (انسخ الكود من الأصلي)

    progressBar.style.width = '100%';
}

function restartQuiz() {
    resultsScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    progressBar.style.width = '0%';
}

function initCarousel() {
    // ... (انسخ كامل وظيفة initCarousel من الكود الأصلي)
}

// --- معالجة الوضع الداكن (Dark Mode) ---
function setupDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        document.documentElement.classList.toggle('dark', event.matches);
    });
}

// --- نقطة بداية تشغيل التطبيق (App Initialization) ---
function init() {
    // ربط الأحداث بالعناصر
    startButton.addEventListener('click', startQuiz);
    restartButton.addEventListener('click', restartQuiz);
    
    // إعداد الوضع الداكن
    setupDarkMode();
    
    // تشغيل الكاروسيل
    initCarousel();
}

// تشغيل التطبيق بعد تحميل كامل محتوى الصفحة
document.addEventListener('DOMContentLoaded', init);
