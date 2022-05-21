import styles from "./Footer.module.css";

function Footer() {
   return (
      <div className={styles.footer}>
         <div className={styles.followUs}>Follow us on</div>
         <div className={styles.images}>
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384065.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="" />
            <img
               src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955011.png?token=exp=1653128433~hmac=9e19e060f51c67df8b0c9eb10ab1f577"
               alt=""
            />
         </div>
      </div>
   );
}

export default Footer;
