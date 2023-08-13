import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Link } from "react-scroll";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Navbar = () => {
    return (
      <>
        <div className={styles.dummynavbarSpace} id="NAVBAR"></div>
        <nav className={`${styles.navbar} ${styles.sticky}`}>
          <div className={styles.navbarDivLeft}>
            <div className={styles.navBarLeftSub}>
              {/* <img src="" alt="Logo"></img> */}
              <a href="" target="_top">
                CHAINLINK
              </a>
            </div>
          </div>
          <div className={styles.navbarDivRight}>
            <div className={styles.navBarRightSub}>
              <Link
                id={styles.anchor}
                to="INTRO"
                smooth={true}
                duration={500}
                offset={-50}
              >
                HOME
              </Link>
              <Link
                id={styles.anchor}
                to="SERVICES"
                smooth={true}
                duration={500}
                offset={-50}
              >
                SPECIALITIES
              </Link>
              <Link
                id={styles.anchor}
                to="SERVICE"
                smooth={true}
                duration={600}
                offset={-50}
              >
                SERVICES
              </Link>
              <Link
                id={styles.anchor}
                to="CONTRIBUTORS"
                smooth={true}
                duration={900}
                offset={-50}
              >
                CONTRIBUTORS
              </Link>
              <Link
                id={styles.anchor}
                to="CONTACT"
                smooth={true}
                duration={1500}
                offset={-50}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  };
  const Content1 = () => {
    return (
      <>
        <section className={styles.Content1Section}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et
          tortor at risus viverra. Tortor condimentum lacinia quis vel eros
          donec ac. Nunc eget lorem dolor sed. Aenean sed adipiscing diam donec
          adipiscing. Massa sapien faucibus et molestie ac. Lacus vestibulum sed
          arcu non odio euismod. Sociis natoque penatibus et magnis dis
          parturient. Nec tincidunt praesent semper feugiat. Sed vulputate odio
          ut enim. Justo nec ultrices dui sapien eget mi proin. Dignissim enim
          sit amet venenatis. In eu mi bibendum neque egestas congue quisque
          egestas diam. Sem fringilla ut morbi tincidunt augue interdum. Feugiat
          nisl pretium fusce id velit ut tortor pretium viverra. Velit egestas
          dui id ornare arcu odio. Etiam dignissim diam quis enim lobortis
          scelerisque fermentum dui faucibus. Accumsan tortor posuere ac ut
          consequat. Sed felis eget velit aliquet sagittis id consectetur purus.
          Velit egestas dui id ornare arcu odio ut sem nulla. Ornare lectus sit
          amet est. Volutpat est velit egestas dui. Aenean et tortor at risus.
          Felis imperdiet proin fermentum leo vel orci porta. Posuere
          sollicitudin aliquam ultrices sagittis orci a scelerisque. Gravida cum
          sociis natoque penatibus et. Dictum varius duis at consectetur lorem.
          Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Aliquam
          vestibulum morbi blandit cursus risus at ultrices. Quam id leo in
          vitae turpis massa sed elementum. Mi proin sed libero enim sed
          faucibus turpis. Sit amet consectetur adipiscing elit ut aliquam
          purus. Proin sed libero enim sed faucibus turpis in eu mi. Molestie a
          iaculis at erat. Pellentesque pulvinar pellentesque habitant morbi
          tristique senectus. Natoque penatibus et magnis dis parturient.
          Pulvinar proin gravida hendrerit lectus a. Ultrices neque ornare
          aenean euismod elementum nisi quis. Pharetra massa massa ultricies mi
          quis hendrerit. Nec feugiat nisl pretium fusce id velit. Enim ut sem
          viverra aliquet eget. Parturient montes nascetur ridiculus mus mauris
          vitae ultricies. Amet justo donec enim diam vulputate ut pharetra sit
          amet. Cursus eget nunc scelerisque viverra mauris in. In dictum non
          consectetur a erat. Sem fringilla ut morbi tincidunt augue interdum.
          Facilisi cras fermentum odio eu feugiat. Mollis aliquam ut porttitor
          leo a diam sollicitudin tempor. Proin libero nunc consequat interdum
          varius sit amet mattis vulputate. Ullamcorper morbi tincidunt ornare
          massa. Sagittis vitae et leo duis ut diam quam nulla porttitor. Ac
          tortor dignissim convallis aenean. A cras semper auctor neque vitae
          tempus quam pellentesque. Mollis aliquam ut porttitor leo a diam
          sollicitudin tempor id. Id ornare arcu odio ut sem nulla. Ultrices
          neque ornare aenean euismod. Eu sem integer vitae justo eget magna.
          Integer eget aliquet nibh praesent tristique. Quam quisque id diam vel
          quam. Velit ut tortor pretium viverra suspendisse potenti. Mauris a
          diam maecenas sed. Eu volutpat odio facilisis mauris sit amet. Varius
          vel pharetra vel turpis nunc eget lorem dolor. Sed vulputate odio ut
          enim blandit volutpat maecenas volutpat blandit. Consequat id porta
          nibh venenatis cras sed felis. Posuere morbi leo urna molestie at
          elementum eu. Imperdiet sed euismod nisi porta. Et malesuada fames ac
          turpis egestas maecenas pharetra. Et tortor at risus viverra. Sagittis
          vitae et leo duis ut diam quam nulla. Feugiat nibh sed pulvinar proin
          gravida. Malesuada fames ac turpis egestas maecenas pharetra.
          Condimentum mattis pellentesque id nibh tortor.
        </section>
      </>
    );
  };
  const Footer = () => {
    return (
      <>
        <section className={styles.FooterSec}>
          <div className={styles.FooterDiv1}>
            <div className={styles.FooterDesc}>
              <h2>
                Welcome to the decentralized
                <br /> future.
              </h2>
            </div>
            <div className={styles.FooterAddress}>
              <h3>Address</h3>
              <p>
                India - <br /> 762, 18th cross, RR nagar
                <br />
                Bangalore - 560098
              </p>
            </div>
            <div className={styles.contact}>
              <h3>Say Hi</h3>
              <p>
                <a href="">aashishnkumar@gmail.com</a>
              </p>
            </div>
          </div>
          <hr id={styles.FooterHrLine} />
          <div className={styles.FooterDiv2}>
            <h2>AashishNandakumar &copy; 2023. All Rights Reserved</h2>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Power Transfer Optimization</title>
        <meta name="description" content="Power Transfer Optimization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={styles.body}>
        <div className={styles.banner}>
          <p>Under Development!</p>
        </div>
        <Link
          id={styles.anchor}
          to="NAVBAR"
          smooth={true}
          duration={1500}
          offset={-50}
        >
          <div className={styles.upBtnDiv}>
            <button id={styles.upBtn}>&uarr;</button>
          </div>
        </Link>

        <Navbar />
        <Content1 />
        <Footer />
      </main>
    </>
  );
}
