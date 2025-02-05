import styles from "./Footer.module.scss";

const Footer = () => {
  return <footer className={styles.footer}>
  <div className={styles.container}>
    <div className={styles.iconWrapper}>
      {[
        { href: "https://www.facebook.com/Kidemycjsc", img: "https://kidemy.com/_next/image?url=%2Fimages%2FFacebookIcon.webp&w=1920&q=75", alt: "Facebook" },
        { href: "https://play.google.com/store/apps/dev?id=5079512733105773370", img: "https://kidemy.com/_next/image?url=%2Fimages%2FAndroidIcon.webp&w=1920&q=75", alt: "Android" },
        { href: "https://apps.apple.com/us/developer/Kidsgames-cjsc/id1532602416", img: "https://kidemy.com/_next/image?url=%2Fimages%2FAppleIcon.webp&w=1920&q=75", alt: "Apple" },
        { href: "https://www.youtube.com/channel/UCiuCrdbFlp8bk1q16cIKa2g", img: "https://kidemy.com/_next/image?url=%2Fimages%2FYoutubeIcon.webp&w=1920&q=75", alt: "YouTube" },
      ].map(({ href, img, alt }, index) => (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={alt} className={styles.icon} />
        </a>
      ))}
    </div>
    <hr className={styles.divider} />
    <p className={styles.text}>
      &copy; {new Date().getFullYear()} Kidemy CJSC. All rights reserved.
      <br />
      <a href="/privacy_policy" className={styles.link}>Privacy Policy</a> &nbsp;|&nbsp;
      <a href="/terms_of_use" className={styles.link}>Terms of Use</a>
    </p>
  </div>
</footer>
};

export default Footer;
