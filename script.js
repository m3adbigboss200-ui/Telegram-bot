// روابط مواقع التواصل الاجتماعي
function openYouTube() {
  window.open("https://youtube.com/@2_c_7_89?si=sESzRSJQ6dEsZK9P");
}

function openYouTubeBackup() {
    window.open("https://youtube.com/@2_7_8_ye?si=2fuMXjZsl7o7piBT");
}

function openX() {
  window.open("https://x.com/2_c_7_89?t=bIC4BE2Sq0_qM1R1ZVOjQg&s=09");
}

function openTikTok() {
  window.open("https://www.tiktok.com/@2_c_7_89?_t=ZS-8zOQuHVrLpo&_r=1");
}

function openInstagram() {
  window.open("https://www.instagram.com/yemen777173?igsh=MTY1dTN3Y3Z5Mng4aA==");
}

function openTelegram() {
  window.open("https://t.me/d2_c_7_89");
}

// دالة عرض الوقت والتاريخ الهجري والميلادي
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();

    const gregorianOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const gregorianDate = now.toLocaleDateString('ar-SA-u-ca-gregory', gregorianOptions);

    const hijriOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic-umalqura' };
    const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', hijriOptions).format(now);
    
    const time = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit', hour12: true });

    dateTimeElement.innerHTML = `التاريخ: ${gregorianDate} <br> الهجري: ${hijriDate} <br> الوقت: ${time}`;
}

// تحديث الوقت كل ثانية
setInterval(updateDateTime, 1000);
updateDateTime(); // استدعاء فوري عند تحميل الصفحة

// وظيفة الوضع الليلي
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // يمكنك حفظ تفضيل المستخدم في Local Storage هنا
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
}

// التحقق من تفضيل الوضع الليلي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // الانتقال السلس (Smooth Scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
