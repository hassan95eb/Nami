const paths = [
  {
    title: "دربارهٔ من",
    text: "روایتی کوتاه و شفاف از تجربه‌ها، علایق و مسیری که تا امروز شکل گرفته است.",
    mark: "معرفی",
  },
  {
    title: "کارها و پروژه‌ها",
    text: "منتخبی از تجربه‌ها و خروجی‌ها با تمرکز بر مسئله، فرآیند و نتیجهٔ هر همکاری.",
    mark: "نمونه‌کار",
  },
  {
    title: "یادداشت‌ها",
    text: "فضایی برای ثبت آموخته‌ها، ایده‌ها و نگاه شخصی به موضوعات مورد علاقه.",
    mark: "دیدگاه",
  },
];

function Blossom() {
  return (
    <svg className="blossom" viewBox="0 0 380 460" aria-hidden="true">
      <path className="stem" d="M188 449C192 349 205 256 232 172C248 122 265 76 289 34" />
      <path className="stem thin" d="M205 296C162 260 126 222 98 173" />
      <path className="stem thin" d="M222 213C267 186 306 148 328 104" />
      <path className="leaf" d="M198 331C146 337 115 307 107 265C157 265 193 285 198 331Z" />
      <path className="leaf pale" d="M218 258C259 258 286 235 294 199C253 197 225 216 218 258Z" />
      <g className="petal petal-one">
        <ellipse cx="93" cy="151" rx="33" ry="59" transform="rotate(-45 93 151)" />
        <ellipse cx="98" cy="151" rx="33" ry="59" transform="rotate(45 98 151)" />
        <ellipse cx="96" cy="153" rx="30" ry="57" transform="rotate(135 96 153)" />
        <ellipse cx="95" cy="151" rx="30" ry="57" transform="rotate(-135 95 151)" />
        <circle cx="96" cy="151" r="20" />
      </g>
      <g className="petal petal-two">
        <ellipse cx="291" cy="65" rx="28" ry="51" transform="rotate(-45 291 65)" />
        <ellipse cx="294" cy="66" rx="28" ry="51" transform="rotate(45 294 66)" />
        <ellipse cx="293" cy="66" rx="26" ry="50" transform="rotate(135 293 66)" />
        <ellipse cx="292" cy="64" rx="26" ry="50" transform="rotate(-135 292 64)" />
        <circle cx="293" cy="65" r="17" />
      </g>
      <circle className="dot" cx="337" cy="122" r="6" />
      <circle className="dot small" cx="71" cy="216" r="4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="صفحهٔ نخست پریسا نامی">
          <span className="brand-dot" />
          پریسا نامی
        </a>
        <nav aria-label="ناوبری اصلی">
          <a href="#about">درباره</a>
          <a href="#journey">مسیر</a>
          <a href="#contact">ارتباط</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> یک فضای شخصی برای روایت و رشد</p>
          <h1>سلام، من<br /><em>پریسا نامی</em> هستم.</h1>
          <p className="intro">
            اینجا خانهٔ دیجیتال من است؛ جایی برای معرفی مسیر، ثبت تجربه‌ها و کنار هم گذاشتن
            چیزهایی که برایم معنا دارند.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#journey">دیدن مسیر من</a>
            <a className="button quiet" href="#about">بیشتر دربارهٔ من</a>
          </div>
        </div>
        <div className="hero-art">
          <div className="sun-disc" />
          <Blossom />
          <p className="side-note">آرام، پیوسته، رو به رشد</p>
        </div>
      </section>

      <section className="statement" id="about">
        <div className="shell statement-grid">
          <p className="section-label">داستان این فضا</p>
          <div>
            <h2>هر مسیر حرفه‌ای، از مجموعه‌ای از تجربه‌های کوچک و انتخاب‌های آگاهانه ساخته می‌شود.</h2>
            <p>
              این وب‌سایت چارچوبی است برای اینکه آن تجربه‌ها به‌مرور، دقیق و صادقانه روایت شوند؛
              بدون شلوغی و با تمرکز بر آنچه واقعاً مهم است.
            </p>
          </div>
        </div>
      </section>

      <section className="journey shell" id="journey">
        <div className="section-heading">
          <div>
            <p className="section-label">مسیر آشنایی</p>
            <h2>از کجا شروع کنیم؟</h2>
          </div>
          <p>سه مسیر ساده برای شناختن دنیای حرفه‌ای و شخصی من.</p>
        </div>
        <div className="cards">
          {paths.map((path) => (
            <article className="card" key={path.title}>
              <span>{path.mark}</span>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-flower" aria-hidden="true">✦</div>
        <p className="section-label">ادامهٔ مسیر</p>
        <h2>برای یک گفت‌وگوی تازه،<br />از همین‌جا شروع کنیم.</h2>
        <p>راه‌های ارتباطی و شبکه‌های اجتماعی در نسخهٔ نهایی این بخش قرار می‌گیرند.</p>
        <a className="button primary" href="#top">بازگشت به آغاز</a>
      </section>

      <footer className="shell">
        <p>© {new Date().getFullYear()} پریسا نامی</p>
        <p>طراحی‌شده با دقت و سادگی</p>
      </footer>
    </main>
  );
}
