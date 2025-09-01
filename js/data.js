// نستخدم export لتصدير المتغيرات وجعلها متاحة للاستيراد في ملفات أخرى
export const questions = [
    {
        id: 1,
        text: "ما نوع العطر الذي تفضل؟",
        subtext: "اختر الفئة المناسبة لك",
        choices: [
            { text: "عطر نسائي 👩", value: "female", points: { feminine: 3 } },
            { text: "عطر رجالي 👨", value: "male", points: { masculine: 3 } },
            { text: "عطر مشترك (يناسب الجنسين)", value: "unisex", points: { neutral: 2 } }
        ]
    },
    // ... باقي الأسئلة
];

export const perfumes = [
    {
        name: "Chanel No. 5",
        brand: "Chanel",
        category: "كلاسيكي وأنيق",
        description: "أسطورة عالم العطور، عطر أيقوني يجمع بين الأناقة الكلاسيكية والرقي الفرنسي. إبداع كوكو شانيل الخالد الذي يناسب المرأة الواثقة والمتميزة",
        notes: ["الألدهيدات", "الياسمين", "الورد", "خشب الصندل", "الفانيليا"],
        personality: "للمرأة الكلاسيكية الأنيقة والواثقة من نفسها",
        occasion: "مثالي للمناسبات الخاصة والأوقات المهمة",
        price: "$$$$",
        longevity: "ممتاز (8-12 ساعة)",
        projection: "قوي",
        points: { feminine: 3, luxury: 3, confident: 2, floral: 3, strong: 2, professional: 2 }
    },
    // ... باقي العطور
];

export const luxuryPerfumes = [
    { name: "Chanel No. 5", brand: "Chanel", icon: "👑", price: "$$$$" },
    { name: "Creed Aventus", brand: "Creed", icon: "🏆", price: "$$$$$" },
    // ... باقي العطور الفاخرة للكاروسيل
];
