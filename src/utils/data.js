export const categories = [
    {
        id: 1,
        title: "Pol yuvish Machinalar",
        image: require("../assets/floor3.png"),
        ico: require("../assets/floor-ico.png"),
    },
    {
        id: 2,
        title: `Professional <br> changyutgichlar`,
        image: require("../assets/vacuum3.png"),
        ico: require("../assets/vacuum-ico.png"),
    },
    {
        id: 3,
        title: "Tozalash uskunalari",
        image: require("../assets/cleaning3.png"),
        ico: require("../assets/cleaning-ico.png"),
    },
    {
        id: 4,
        title: "Yuvish vositalari",
        image: require("../assets/product1.png"),
        ico: require("../assets/product-ico.png"),
    },
    {
        id: 5,
        title: "Qog'oz mahsulotlari",
        image: require("../assets/paper3.png"),
        ico: require("../assets/paper-ico.png"),
    },
];

export const subCategories = [
    {
        id: 1,
        title: 'TVX Pol yuvish mashinalari',
        category: 1
    },
    {
        id: 2,
        title: 'Aylanadigan mashinalar',
        category: 1
    },
    {
        id: 3,
        title: 'Supuruvchilar',
        category: 1
    },
    {
        id: 4,
        title: 'CLEMAR Pol yuvish mashinalari',
        category: 1
    },
    {
        id: 5,
        title: 'Sebo evolyutsiyasi',
        category: 2
    },
    {
        id: 6,
        title: 'Fantom',
        category: 2
    },
    {
        id: 7,
        title: 'Santoemma',
        category: 2
    },
    {
        id: 8,
        title: 'Clemar CRS',
        category: 2
    },
    {
        id: 9,
        title: 'Zaminni tozalash uchun uskunalar',
        category: 3
    },
    {
        id: 10,
        title: 'Derazalarni tozalash uchun uskunalar',
        category: 3
    },
    {
        id: 11,
        title: 'Tozalash aravachalari',
        category: 3
    },
    {
        id: 12,
        title: 'Chelaklar, moplar, cho\'tkalar',
        category: 3
    },
    {
        id: 13,
        title: 'Qo\'l yuvish vositalari',
        category: 4
    },
    {
        id: 14,
        title: 'Umumiy gigiena vositalari',
        category: 4
    },
    {
        id: 15,
        title: 'Idish va idish yuvish mashinalari uchun mahsulotlar',
        category: 4
    },
    {
        id: 16,
        title: 'Kir yuvish vositalari',
        category: 4
    },
    {
        id: 17,
        title: 'Tualet qog\'ozi',
        category: 5
    },
    {
        id: 18,
        title: 'Salfetkalar',
        category: 5
    },
    {
        id: 19,
        title: 'Qog\'oz sochiqlar',
        category: 5
    },
    {
        id: 20,
        title: 'Boshqalar',
        category: 5
    },
];

const mockProducts = [
    {   
        id: 1,
        title: "TVX T15B",
        image: require("../assets/floor1.png"),
        category: 1,
        subcategory: 1,
        favorite: false
    },
    {   
        id: 2,
        title: "Labomat disc 18p",
        image: require("../assets/floor2.png"),
        category: 1,
        subcategory: 2,
        favorite: false
    },
    {   
        id: 3,
        title: "Ride-on Floor Machine TS1900",
        image: require("../assets/floor3.png"),
        category: 1,
        subcategory: 3,
        favorite: false
    },
    {   
        id: 4,
        title: "Clemar K70",
        image: require("../assets/floor4.png"),
        category: 1,
        subcategory: 4,
        favorite: false
    },

    {   
        id: 5,
        title: "SEBO EVOLUTION 370",
        image: require("../assets/vacuum1.png"),
        category: 2,
        subcategory: 5,
        favorite: false
    },
    {   
        id: 6,
        title: "Fantom Promax 800 m2",
        image: require("../assets/vacuum2.png"),
        category: 2,
        subcategory: 6,
        favorite: false
    },
    {   
        id: 7,
        title: "Santoemma sharon brush",
        image: require("../assets/vacuum3.png"),
        category: 2,
        subcategory: 7,
        favorite: false
    },
    {   
        id: 8,
        title: "Clemar CRS2890",
        image: require("../assets/vacuum4.png"),
        category: 2,
        subcategory: 8,
        favorite: false
    },

    {   
        id: 9,
        title: "Mop “Eco” for dry cleaning",
        image: require("../assets/cleaning1.png"),
        category: 3,
        subcategory: 9,
        favorite: false
    },
    {   
        id: 10,
        title: "Nozzle-coat for washing glass",
        image: require("../assets/cleaning2.png"),
        category: 3,
        subcategory: 10,
        favorite: false
    },
    {   
        id: 11,
        title: "Gonisa 36 Trolley",
        image: require("../assets/cleaning3.png"),
        category: 3,
        subcategory: 11,
        favorite: false
    },
    {   
        id: 12,
        title: "PROCART KOV 580S",
        image: require("../assets/cleaning4.png"),
        category: 3,
        subcategory: 12,
        favorite: false
    },

    {   
        id: 13,
        title: "Maratem",
        image: require("../assets/product1.png"),
        category: 4,
        subcategory: 13,
        favorite: false
    },
    {   
        id: 14,
        title: "Maratem M212 300ml",
        image: require("../assets/product2.png"),
        category: 4,
        subcategory: 14,
        favorite: false
    },
    {   
        id: 15,
        title: "Maratem M212 300ml",
        image: require("../assets/product3.png"),
        category: 4,
        subcategory: 15,
        favorite: false
    },
    {   
        id: 16,
        title: "Maratem M604 20kg",
        image: require("../assets/product4.png"),
        category: 4,
        subcategory: 16,
        favorite: false
    },

    {   
        id: 17,
        title: "Selpak Extra Toilet Paper 70 m",
        image: require("../assets/paper1.png"),
        category: 5,
        subcategory: 17,
        favorite: false
    },
    {   
        id: 18,
        title: "Selpak  Extra Napkins 200 pcs.",
        image: require("../assets/paper2.png"),
        category: 5,
        subcategory: 18,
        favorite: false
    },
    {   
        id: 19,
        title: "Selpak Extra Paper Towels 250 m",
        image: require("../assets/paper3.png"),
        category: 5,
        subcategory: 19,
        favorite: false
    },
    {   
        id: 20,
        title: "Selpak Dispenser for toilet seat",
        image: require("../assets/paper4.png"),
        category: 5,
        subcategory: 20,
        favorite: false
    },
]

const stored = localStorage.getItem("products");

if (stored == undefined) {
    localStorage.setItem("products", JSON.stringify(mockProducts));
} else {
    localStorage.removeItem("products")
    // localStorage.setItem("products", stored); 
}

export const products = JSON.parse(localStorage.getItem("products"))

export const articles = [
    {
        id: "about",
        title: "Biz Haqimizda",
        text: "Professional tozalash sohasidagi ishonchli hamkoringiz - Clemarning yangi veb-saytiga xush kelibsiz! Ilgari 10 yildan ortiq tajribaga ega toza bozor sifatida tanilgan, biz sizni yangilangan va qayta ishlangan identifikatorimiz - Clemar bilan tanishtirishdan mamnunmiz. Biz bilan siz nafaqat mahsulotlarga, balki har bir detalda kafolatlangan sifat va professionallikka ega bo'lasiz. Clemar O'zbekistonda tozalash uskunalariga ixtisoslashgan 25 dan ortiq jahon brendlarining yetakchi distribyutori hisoblanadi. Bizning assortimentimiz quruq va nam tozalash uchun professional changyutgichlar, shuningdek, yuqori sifatli qog'oz, salfetkalar va qog'oz sochiqlarni o'z ichiga oladi. Lekin, albatta, bizning asosiy e'tiborimiz skrubber quritgichlardir. Clemar-da siz butun dunyo bo'ylab mashhur brendlarning simsiz va shnurli quritgichlarning keng tanlovini topasiz. Bizning tajribamiz va professionalligimiz sizga har qanday muhitda tozalikni saqlash uchun faqat eng yaxshi echimlarni taklif qilish imkonini beradi. Biz allaqachon taniqli kompaniyalar bilan hamkorlik qilayotganimizdan faxrlanamiz va O‘zbekistondagi obro‘-e’tiborimiz eng yaxshilar qatoridagi o‘rnimizni tasdiqlaydi. Clemar shunchaki yetkazib beruvchi emas, u tozalik va tartib uchun kurashda sizning ishonchli hamkoringizdir. Bizga qo'shiling, Clemar-ni tanlang va biznesingizni tozalash va gigienaning eng yuqori standarti bilan ta'minlang.",
        img: require("../assets/article.png")
    },
    {
        id: 1,
        title: "Clemar web sahifasi o'z faoliyatini boshladi",
        text: "Professional tozalash sohasidagi ishonchli hamkoringiz - Clemar kompaniyasining yangilangan veb-sayti ishga tushirilganini mamnuniyat bilan e'lon qilamiz! Ilgari Clema Market nomi bilan tanilgan va o'n yildan ortiq tajribaga ega bo'lgan holda, biz sizga yangilangan va qayta ishlangan shaxsiyatni - Clemarni taqdim etamiz. Kompaniyamiz O'zbekistonda tozalash uskunalari sohasida 25 dan ortiq jahon brendlarining yetakchi distribyutori hisoblanadi. Biz har bir detalda kafolatlangan sifat va professionallikni ta'minlashga ixtisoslashganmiz. Clemar assortimentida siz quruq va nam tozalash uchun professional changyutgichlarni, shuningdek, yuqori sifatli qog'oz, salfetkalar va qog'oz sochiqlarni topasiz.",
        img: require("../assets/banner1.png")
    },
    {
        id: 2,
        title: "Clemar kompaniyasidan mahsulotlar uchun rassrochka",
        text: "Professional uskunani sotib olishni xohlaysiz, lekin bir yo‘la to‘lashga tayyor emasmisiz? Biz siz uchun yechim topdik! Uzum platformasi orqali biz qulay bo‘lib-bo‘lib to‘lash imkoniyatini taklif qilamiz. Mavjud to‘lov imkoniyatlari: Skrubber quritgichlar Professional changyutgichlar Yuvish vositalari Qog‘oz mahsulotlari Biznesingiz uchun kerak bo'lgan barcha tozalash uskunalarini moliyaviy cheklovlarsiz xarid qiling. Bo‘lib-bo‘lib to‘lash rejasi bilan darhol kerakli uskunani qo‘lga kiriting va asta-sekin to‘lang. Uzum orqali to‘lashning afzalliklari: Moslashuvchan to‘lov shartlari Oson onlayn ro‘yxatdan o‘tish Keraksiz hujjatlarsiz Tez tasdiqlash Clemar kompaniyasi bilan biznesingizni rivojlantirish imkoniyatini qo‘ldan boy bermang! Buyurtmani hoziroq joylashtiring. Yangiliklar va aksiyalarni kuzatib boring. Ijtimoiy tarmoqlarimizga obuna bo‘ling yoki salonimizga tashrif buyuring!",
        img: require("../assets/article1.png")
    },
    {
        id: 3,
        title: "Clemardan maxsus aksiyalar",
        text: "Maxsus Chegirma Faqat Siz Uchun! Siz izlayotgan barcha texnika mahsulotlari endi maxsus chegirmalarda! Bugun xarid qiling va katta tejash imkoniyatini qo‘ldan boy bermang. Cheklangan miqdordagi mahsulotlar, shoshiling! 🛒💥 Tez orada yetkazib berish va moslashuvchan to‘lov shartlari bilan, sizning qoniqishingiz biz uchun muhim!",
        img: require("../assets/article3.png")
    },
]