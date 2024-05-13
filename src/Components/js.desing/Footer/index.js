import style from './index.module.css'

export default function Footer() {
  return (
    <footer className={style.footer} id='Footer'>
      <p>&copy; 2023 Educa-Net. All rights reserved.</p>
      <ul className={style.lista}>
        <li><a className={style.componentes} href="#">Privacy Policy</a></li>
        <li><a className={style.componentes} href="#">Terms of Service</a></li>
        <li><a className={style.componentes} href="#">Contact Us</a></li>
      </ul>
    </footer>
  );
}

 