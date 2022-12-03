import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footerHeader}>
        <p>Questions? Contact us.</p>
      </div>
      <div className={classes.footerContainer}>
        <div>
          <div>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
        </div>
        <div>
          <div>
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Netflix Originals</p>
          </div>
          <div>
            <p>Media Center</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
            <p>Netflix Games</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
