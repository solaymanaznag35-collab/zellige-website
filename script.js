// السنة الحالية في أسفل الموقع
document.getElementById("year").textContent = new Date().getFullYear();


// القائمة في الهاتف
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// إغلاق القائمة بعد الضغط على أحد الروابط
document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


// تغيير اللغة العربية والفرنسية
const languageToggle = document.getElementById("languageToggle");

let currentLanguage = "ar";

languageToggle.addEventListener("click", function () {

    const elements = document.querySelectorAll("[data-ar][data-fr]");

    if (currentLanguage === "ar") {

        currentLanguage = "fr";

        document.documentElement.lang = "fr";
        document.documentElement.dir = "ltr";
        document.body.classList.add("ltr");

        languageToggle.textContent = "AR";

    } else {

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        document.body.classList.remove("ltr");

        languageToggle.textContent = "FR";
    }

    elements.forEach(function (element) {
        element.textContent = element.getAttribute(
            "data-" + currentLanguage
        );
    });

});


// إرسال معلومات الزبون إلى واتساب
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
        alert(
            currentLanguage === "ar"
                ? "يرجى ملء جميع المعلومات."
                : "Veuillez remplir tous les champs."
        );
        return;
    }

    const whatsappMessage =
        "السلام عليكم، أريد الاستفسار عن خدماتكم.\n\n" +
        "الاسم: " + name + "\n" +
        "الهاتف: " + phone + "\n" +
        "الخدمة المطلوبة: " + service + "\n" +
        "تفاصيل المشروع: " + message;

    const whatsappNumber = "212626802067";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

}); 