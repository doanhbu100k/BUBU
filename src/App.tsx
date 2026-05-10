import React, { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

export default function App() {
  const lang =
    typeof navigator !== "undefined"
      ? navigator.language.split("-")[0]
      : "en";

// THAY TOÀN BỘ const text = { ... } CŨ
// bằng đoạn này

const text: any = {
  en: {
    begin: "Begin",
    advertisement: "Advertisement",
    learn: "Learn",
    support: "Support",
    schedule: "Schedule a call",
    start: "Start now",
    register: "Register",
    title:
      "Let the whole world know that you take business seriously.",
    desc:
      "Meta Verified helps you build credibility with new audiences and protect your brand.",
  },

  vi: {
    begin: "Bắt đầu",
    advertisement: "Quảng cáo",
    learn: "Tìm hiểu",
    support: "Hỗ trợ",
    schedule: "Đặt lịch gọi",
    start: "Bắt đầu ngay",
    register: "Đăng ký",
    title:
      "Hãy để cả thế giới biết rằng bạn nghiêm túc với doanh nghiệp của mình.",
    desc:
      "Meta Verified giúp bạn xây dựng uy tín và bảo vệ thương hiệu.",
  },

  fr: {
    begin: "Commencer",
    advertisement: "Publicité",
    learn: "Apprendre",
    support: "Support",
    schedule: "Planifier un appel",
    start: "Commencer maintenant",
    register: "S'inscrire",
    title:
      "Montrez au monde entier que vous prenez votre entreprise au sérieux.",
    desc: "Meta Verified vous aide à protéger votre marque.",
  },

  de: {
    begin: "Start",
    advertisement: "Werbung",
    learn: "Lernen",
    support: "Support",
    schedule: "Anruf planen",
    start: "Jetzt starten",
    register: "Registrieren",
    title:
      "Zeigen Sie der Welt, dass Sie Ihr Unternehmen ernst nehmen.",
    desc: "Meta Verified hilft Ihnen beim Schutz Ihrer Marke.",
  },

  es: {
    begin: "Comenzar",
    advertisement: "Publicidad",
    learn: "Aprender",
    support: "Soporte",
    schedule: "Programar llamada",
    start: "Comenzar ahora",
    register: "Registrarse",
    title:
      "Hazle saber al mundo que tomas en serio tu negocio.",
    desc: "Meta Verified te ayuda a proteger tu marca.",
  },

  cs: {
    begin: "Začít",
    advertisement: "Reklama",
    learn: "Zjistit více",
    support: "Podpora",
    schedule: "Naplánovat hovor",
    start: "Začněte nyní",
    register: "Registrovat",
    title: "Dejte celému světu vědět, že svůj podnik berete vážně.",
    desc: "Meta Verified vám pomůže budovat důvěryhodnost a chránit vaši značku.",
  },

  da: {
    begin: "Begynd",
    advertisement: "Annonce",
    learn: "Lær",
    support: "Support",
    schedule: "Planlæg et opkald",
    start: "Start nu",
    register: "Registrer",
    title: "Lad hele verden vide, at du tager din virksomhed seriøst.",
    desc: "Meta Verified hjælper dig med at beskytte dit brand.",
  },

  fi: {
    begin: "Aloita",
    advertisement: "Mainos",
    learn: "Lue lisää",
    support: "Tuki",
    schedule: "Aikatauluta puhelu",
    start: "Aloita nyt",
    register: "Rekisteröidy",
    title: "Anna koko maailman tietää, että otat yrityksesi vakavasti.",
    desc: "Meta Verified auttaa suojaamaan brändiäsi.",
  },

  no: {
    begin: "Start",
    advertisement: "Annonse",
    learn: "Lær",
    support: "Støtte",
    schedule: "Planlegg samtale",
    start: "Start nå",
    register: "Registrer",
    title: "La hele verden vite at du tar virksomheten din seriøst.",
    desc: "Meta Verified hjelper deg med å beskytte merkevaren din.",
  },

  sv: {
    begin: "Börja",
    advertisement: "Annons",
    learn: "Lär dig",
    support: "Support",
    schedule: "Schemalägg samtal",
    start: "Starta nu",
    register: "Registrera",
    title: "Låt hela världen veta att du tar ditt företag på allvar.",
    desc: "Meta Verified hjälper dig att skydda ditt varumärke.",
  },

  ro: {
    begin: "Începe",
    advertisement: "Publicitate",
    learn: "Învață",
    support: "Suport",
    schedule: "Programează apel",
    start: "Începe acum",
    register: "Înregistrează-te",
    title: "Arată lumii că îți iei afacerea în serios.",
    desc: "Meta Verified te ajută să îți protejezi brandul.",
  },

  hu: {
    begin: "Kezdés",
    advertisement: "Hirdetés",
    learn: "Tudj meg többet",
    support: "Támogatás",
    schedule: "Hívás ütemezése",
    start: "Kezdés most",
    register: "Regisztráció",
    title: "Mutasd meg a világnak, hogy komolyan veszed vállalkozásodat.",
    desc: "A Meta Verified segít megvédeni a márkádat.",
  },

  el: {
    begin: "Έναρξη",
    advertisement: "Διαφήμιση",
    learn: "Μάθετε",
    support: "Υποστήριξη",
    schedule: "Προγραμματισμός κλήσης",
    start: "Ξεκινήστε τώρα",
    register: "Εγγραφή",
    title: "Δείξτε στον κόσμο ότι παίρνετε την επιχείρησή σας σοβαρά.",
    desc: "Το Meta Verified βοηθά στην προστασία της επωνυμίας σας.",
  },

  he: {
    begin: "התחל",
    advertisement: "פרסומת",
    learn: "למד",
    support: "תמיכה",
    schedule: "קבע שיחה",
    start: "התחל עכשיו",
    register: "הרשמה",
    title: "תן לעולם לדעת שאתה לוקח את העסק שלך ברצינות.",
    desc: "Meta Verified עוזר להגן על המותג שלך.",
  },

  sr: {
    begin: "Počni",
    advertisement: "Oglas",
    learn: "Saznaj više",
    support: "Podrška",
    schedule: "Zakaži poziv",
    start: "Počni sada",
    register: "Registruj se",
    title: "Neka ceo svet zna da ozbiljno shvatate svoj posao.",
    desc: "Meta Verified pomaže u zaštiti vašeg brenda.",
  },

  hr: {
    begin: "Počni",
    advertisement: "Oglas",
    learn: "Saznaj više",
    support: "Podrška",
    schedule: "Zakaži poziv",
    start: "Počni sada",
    register: "Registracija",
    title: "Pokažite svijetu da ozbiljno shvaćate svoje poslovanje.",
    desc: "Meta Verified pomaže zaštititi vaš brend.",
  },

  sk: {
    begin: "Začať",
    advertisement: "Reklama",
    learn: "Zistiť viac",
    support: "Podpora",
    schedule: "Naplánovať hovor",
    start: "Začať teraz",
    register: "Registrovať",
    title: "Ukážte svetu, že svoje podnikanie beriete vážne.",
    desc: "Meta Verified pomáha chrániť vašu značku.",
  },

  sl: {
    begin: "Začni",
    advertisement: "Oglas",
    learn: "Več informacij",
    support: "Podpora",
    schedule: "Načrtuj klic",
    start: "Začni zdaj",
    register: "Registracija",
    title: "Pokažite svetu, da svoje podjetje jemljete resno.",
    desc: "Meta Verified pomaga zaščititi vašo blagovno znamko.",
  },

  lt: {
    begin: "Pradėti",
    advertisement: "Reklama",
    learn: "Sužinoti daugiau",
    support: "Pagalba",
    schedule: "Suplanuoti skambutį",
    start: "Pradėti dabar",
    register: "Registruotis",
    title: "Parodykite pasauliui, kad rimtai žiūrite į savo verslą.",
    desc: "Meta Verified padeda apsaugoti jūsų prekės ženklą.",
  },

  lv: {
    begin: "Sākt",
    advertisement: "Reklāma",
    learn: "Uzzināt vairāk",
    support: "Atbalsts",
    schedule: "Ieplānot zvanu",
    start: "Sākt tagad",
    register: "Reģistrēties",
    title: "Parādiet pasaulei, ka nopietni uztverat savu biznesu.",
    desc: "Meta Verified palīdz aizsargāt jūsu zīmolu.",
  },

  et: {
    begin: "Alusta",
    advertisement: "Reklaam",
    learn: "Õpi",
    support: "Tugi",
    schedule: "Planeeri kõne",
    start: "Alusta kohe",
    register: "Registreeru",
    title: "Näidake maailmale, et võtate oma äri tõsiselt.",
    desc: "Meta Verified aitab kaitsta teie brändi.",
  },
};

  const t = text[lang as keyof typeof text] || text.en;

  useEffect(() => {
    const userLang = navigator.language || "en";
    const shortLang = userLang.split("-")[0];

    window.googleTranslateElementInit = () => {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );

        // đợi google render xong
        setTimeout(() => {
          const select = document.querySelector(
            ".goog-te-combo"
          ) as HTMLSelectElement | null;

          if (select) {
            select.value = shortLang;
            select.dispatchEvent(new Event("change"));
          }
        }, 4000);
      }
    };

    const existingScript = document.getElementById(
      "google-translate-script"
    );

    if (!existingScript) {
      const script = document.createElement("script");

      script.id = "google-translate-script";

      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#f5f5f5;
          overflow-x:hidden;
          top:0 !important;
        }

        .goog-te-banner-frame.skiptranslate{
          display:none !important;
        }

        iframe.skiptranslate{
          display:none !important;
        }

        .goog-logo-link,
        .goog-te-gadget span{
          display:none !important;
        }

        .goog-te-gadget{
          color:transparent !important;
        }

        #google_translate_element{
          position:absolute;
          left:-9999px;
          top:-9999px;
        }

        .app{
          width:100%;
          min-height:100vh;
        }

        .header{
          width:100%;
          height:74px;
          background:#fff;
          border-bottom:1px solid #ddd;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 40px;
        }

        .logo{
          font-size:34px;
          color:#1877f2;
          font-weight:700;
        }

        .nav{
          display:flex;
          gap:30px;
        }

        .nav a{
          text-decoration:none;
          color:#111827;
          font-weight:500;
        }

        .header-buttons{
          display:flex;
          gap:15px;
        }

        .call-btn{
          border:1px solid #1877f2;
          background:#fff;
          color:#1877f2;
          padding:12px 20px;
          border-radius:999px;
          cursor:pointer;
        }

        .start-btn{
          border:none;
          background:#1877f2;
          color:#fff;
          padding:12px 24px;
          border-radius:14px;
          cursor:pointer;
        }

        .banner{
          width:100%;
          background:#101820;
          color:#fff;
          text-align:center;
          padding:16px;
        }

        .hero{
          max-width:1400px;
          margin:auto;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:80px;
          padding:80px 40px;
        }

        .hero-left{
          max-width:620px;
        }

        .verified{
          width:82px;
          height:82px;
          border-radius:50%;
          background:#1877f2;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-size:40px;
          margin-bottom:30px;
        }

        .hero-title{
          font-size:72px;
          line-height:1.1;
          margin-bottom:30px;
        }

        .hero-desc{
          font-size:20px;
          line-height:1.8;
          color:#4b5563;
          margin-bottom:40px;
        }

        .register-btn{
          border:none;
          background:#1877f2;
          color:#fff;
          padding:18px 38px;
          border-radius:999px;
          font-size:18px;
          cursor:pointer;
        }

        .phone-grid{
          display:grid;
          grid-template-columns:repeat(2, 280px);
          gap:24px;
        }

        .card{
          width:280px;
          height:560px;
          border-radius:36px;
          overflow:hidden;
          background:#fff;
          box-shadow:0 20px 50px rgba(0,0,0,0.18);
        }

        .card img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        @media(max-width:900px){
          .hero{
            flex-direction:column;
            text-align:center;
          }

          .phone-grid{
            grid-template-columns:1fr;
          }

          .hero-title{
            font-size:42px;
          }
        }
      `}</style>

      <div id="google_translate_element"></div>

      <div className="app">
        <header className="header">
          <div className="logo">Meta</div>

          <nav className="nav">
            <a href="#">{t.begin}</a>
            <a href="#">{t.advertisement}</a>
            <a href="#">{t.learn}</a>
            <a href="#">{t.support}</a>
          </nav>

          <div className="header-buttons">
            <button className="call-btn">
              {t.schedule}
            </button>

            <button className="start-btn">
              {t.start}
            </button>
          </div>
        </header>

        <div className="banner">
          Register a verified Meta account on Facebook and Instagram.
        </div>

        <section className="hero">
          <div className="hero-left">
            <div className="verified">✓</div>

            <h1 className="hero-title">{t.title}</h1>

            <p className="hero-desc">{t.desc}</p>

            <button className="register-btn">
              {t.register}
            </button>
          </div>

          <div className="phone-grid">
            {images.map((img, index) => (
              <div className="card" key={index}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
