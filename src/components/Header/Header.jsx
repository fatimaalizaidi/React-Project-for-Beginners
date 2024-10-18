import styles from './Header.module.css'


const Header = () => {
    return (<div className="container mt-3" >
        <div className="row">
          <div className="col-lg-3">
            <div className={styles.logo}>
                <img src="data:image/png;base64,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" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <ul className={styles.nav_list}>
                <li>Sports</li>
                <li>Menu</li>
                <li>News</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className={styles.nav_btn}>
                <button className={styles.login_btn}>Login</button>
            </div>
          </div>
        </div>
        </div>);
}




export default  Header;