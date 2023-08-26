import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Link } from "react-scroll";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const Section4 = dynamic(() => import("../components/map.js"), {
  ssr: false,
});
import { prims } from "@/components/primsAlgo.js";

export default function Home() {
  useEffect(() => {
    prims();
  }, []);

  const Navbar = () => {
    return (
      <>
        <div className={styles.dummynavbarSpace} id="NAVBAR"></div>
        <nav className={`${styles.navbar} ${styles.sticky}`}>
          <div className={styles.navbarDivLeft}>
            <div className={styles.navBarLeftSub}>
              {/* <img src="" alt="Logo"></img> */}
              <a href="" target="_top">
                <span className={styles.PRIMS}>NOIRE</span>
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
                INTRO
              </Link>
              <Link
                id={styles.anchor}
                to="ALGORITHM"
                smooth={true}
                duration={500}
                offset={-50}
              >
                ALGORITHM
              </Link>
              <Link
                id={styles.anchor}
                to="PROBLEM"
                smooth={true}
                duration={600}
                offset={-50}
              >
                PROBLEM
              </Link>
              <Link
                id={styles.anchor}
                to="SOLN"
                smooth={true}
                duration={900}
                offset={-50}
              >
                SOLUTION
              </Link>
              <Link
                id={styles.anchor}
                to="ANALYSIS"
                smooth={true}
                duration={1500}
                offset={-50}
              >
                ANALYSIS
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
        <section className={styles.Content1Section} id="INTRO">
          <h2>
            <span className={styles.Content1SectionHeader}>CREATORS</span>
          </h2>
          <div className={styles.Content1Biography}>
            <div className={styles.Content1BiographyImg}>
              <div>
                <img
                  src="https://web.math.muni.cz/biografie/obrazky/jarnik_vojtech.jpg"
                  height="270px"
                  width="230px"
                />
                <p>Vojtěch Jarník</p>
              </div>
              <div>
                <img
                  src="https://alchetron.com/cdn/robert-c-prim-42e4d0d2-0d77-4afa-8cf2-a4b387b4de5-resize-750.jpeg"
                  height="270px"
                  width="230px"
                />
                <p>Robert C. Prim</p>
              </div>
              <div>
                <img
                  src="https://cacm.acm.org/system/assets/0000/3432/072010_CACMpg41_An-Interview.large.jpg?1476779421&1279552189"
                  height="270px"
                  width="230px"
                />
                <p>Edsger W. Dijkstra</p>
              </div>
            </div>
            <div className={styles.Content1BiographyInfo}>
              <p>
                The algorithm was created by Czech mathematician{" "}
                <strong>Vojtch Jarnk</strong> in 1930. Later, computer
                scientists <strong>Robert C. Prim </strong>and{" "}
                <strong>Edsger W. Dijkstra</strong> rediscovered and republished
                the algorithm in 1957 and 1959, respectively. As a result, it is
                also known as the DJP algorithm, Prim-Jarnak algorithm,
                Prim-Dijkstra algorithm, and Jarnak&apos;s algorithm.
              </p>
              <br />
              <p>
                Prim&apos;s method, often referred to as{" "}
                <strong>Jarnk&apos;s algorithm</strong> in computer science, is
                a greedy algorithm that locates a minimum spanning tree for a
                weighted undirected graph. The overall weight of all the edges
                in the tree is reduced, and as a result, it discovers a subset
                of the edges that creates a tree with every vertex. The
                algorithm builds this tree one vertex at a time, from any
                beginning vertex, adding the cheapest connection from the tree
                to the next vertex at each step.
              </p>
            </div>
            <button className={styles.Content1Button}>
              <a href="https://en.wikipedia.org/wiki/Prim%27s_algorithm#:~:text=The%20algorithm%20was%20developed%20in,in%201957%20and%20Edsger%20W.">
                Read More
              </a>
            </button>
          </div>
        </section>
      </>
    );
  };

  const Content2 = () => {
    return (
      <>
        <section className={styles.AlgorithmSection} id="ALGORITHM">
          <h2>
            {" "}
            <span className={styles.Content1SectionHeader}>
              PRIMS ALGORITHM
            </span>
          </h2>
          <div className={styles.AlgorithmSectionContain}>
            <div className={styles.AlgorithmSectionVisual}>
              <img src="https://upload.wikimedia.org/wikipedia/en/9/96/Prim-animation.gif" />
            </div>
            <div className={styles.AlgorithmSectionAlgo}>
              <pre>
                {`
    ALGORITHM Prim(G){
    // Prim's algorithm for constructing a minimum spanning tree 
    // Input: A weighted connected graph G = (V, E) where V is vertex 
              and E is edge
    // Output: ET, the set of edges composing a minimum spanning tree of 
               G 
      
    Vt <- {V0}
    VT <- // the set of tree vertices can be initialized with any vertex 
    Et <- phi(empty set)
      
    for i <- 1 to V - 1 do
      find a minimum-weight edge e* = (v*, u*) among all the edges (v, u)
      such that v is in VT and u is in V - VT
        
      Vt <- Vt U {u*}
      Et <- Et U {v*}
    }
    `}
              </pre>
            </div>
          </div>
        </section>
      </>
    );
  };

  const Content3 = () => {
    return (
      <>
        <section className={styles.ProblemSection} id="PROBLEM">
          <div className={styles.ProblemSectionContain}>
            <h2 className={styles.ProblemSectionh2}>
              <span className={styles.Content1SectionHeader}>
                PROBLEM STATEMENT
              </span>
            </h2>
            <h3 className={styles.ProblemSectionh3}>
              Optimizing Power Grid Infrastructure for Efficient Energy
              Distribution
            </h3>
            <p>
              In today&apos;s modern world, reliable and efficient distribution
              of electrical energy is essential for sustaining societies,
              industries, and economies. The state of Karnataka, located in
              India, serves as a backdrop for a challenging problem in the field
              of energy infrastructure optimization. Your task is to develop a
              web-based solution that uses graph theory and optimization
              techniques to analyze the power grid network in Karnataka and
              propose an optimized design for maximum efficiency and minimal
              cost.
            </p>
            <h4 className={styles.ProblemSectionh4}>Project Overview</h4>
            <p>
              The Karnataka Power Grid is a complex network of power generation
              stations, high-voltage transmission lines, substations, and
              distribution networks that collectively ensure the delivery of
              electricity to millions of consumers. Our project aims to address
              the following objectives:
            </p>
            <br />
            <ol>
              <li className={styles.ProblemSectionli}>
                <strong>Graph Representation:</strong> Create a comprehensive
                graph representation of the Karnataka Power Grid, where nodes
                represent key components (power generation stations,
                substations) and edges represent the high-voltage transmission
                lines connecting them.
              </li>
              <li className={styles.ProblemSectionli}>
                <strong>Minimum Spanning Tree (MST):</strong> Apply Prim&apos;s
                algorithm to generate a Minimum Spanning Tree (MST) that spans
                across the entire power grid network. The MST should represent
                the optimal network connections required to efficiently transmit
                electricity across the state while minimizing the cost of
                transmission line installation.
              </li>
              <li className={styles.ProblemSectionli}>
                <strong>Visualization:</strong> Develop a user-friendly web
                interface that visualizes the original power grid network, the
                generated MST, and other relevant information on an interactive
                map of Karnataka.
              </li>
              <li className={styles.ProblemSectionli}>
                <strong>Comparison and Analysis:</strong> Compare the MST
                generated by your algorithm with the actual power grid
                implementation in Karnataka. Identify areas where the proposed
                MST differs from the existing infrastructure and provide
                insights into potential cost savings, efficiency improvements,
                and benefits of the optimized design.
              </li>
              <li className={styles.ProblemSectionli}>
                <strong>Recommendations:</strong> Based on the analysis, suggest
                practical recommendations for optimizing the power grid
                infrastructure, considering factors such as load distribution,
                geographic constraints, and cost-effectiveness.
              </li>
            </ol>
            <br />
            <h4 className={styles.ProblemSectionh4}>
              Project Focus: Optimizing 400Kv Lines Using Prim&apos;s Algorithm{" "}
            </h4>
            <p>
              As part of the broader endeavor to optimize the power grid
              infrastructure in Karnataka, this project places a{" "}
              <strong>
                {" "}
                specific emphasis on the efficient utilization of 400Kv
                transmission lines.
              </strong>
              The intricate network of these high-voltage lines serves as the
              backbone of energy transmission across the state. Our challenge
              involves implementing Prim&apos;s algorithm to identify the
              optimal connections and routes among these 400Kv lines, ensuring
              the establishment of a Minimum Spanning Tree (MST) that minimizes
              transmission costs while maximizing the reliability of energy
              distribution. By focusing on these critical 400Kv lines, Our
              project aims to uncover opportunities for{" "}
              <strong>
                {" "}
                enhanced load balancing, reduced energy loss, and heightened
                resilience within the power grid network.
              </strong>{" "}
              The culmination of this effort will not only shed light on the
              potential benefits of a refined 400Kv transmission system but also
              contribute significantly to the holistic understanding of power
              grid optimization strategies.
            </p>
            <br />
            <h3 className={styles.ProblemSectionh3}>
              Existing Power Grid Of Karnataka
            </h3>
            <div className={styles.ProblemSectionBeforeImg}>
              {/* Including a PDF using Iframe */}
              <iframe src="karGrid1.pdf" width="100%" height="1200px">
                {/* <p>
                  Your browser does not support PDF embedding. You can{" "}
                  <a href="karGrid1.pdf">click here to download the PDF file</a>
                  .
                </p> */}
              </iframe>
            </div>
            <br />
            <p align="center">
              Here the{" "}
              <strong>pink lines indicates the 400Kv transmission lines</strong>
              , which we will be using to create a Minimum Spanning Tree.
            </p>
            <br />
            <br />

            {/* Use backend here */}
          </div>
        </section>
      </>
    );
  };

  const Content4 = () => {
    return (
      <section className={styles.SolutionSection1} id="SOLN">
        <h2 className={styles.ProblemSectionh3}>
          <span className={styles.Content1SectionHeader}>
            GENERATING A MINIMUM SPANNING TREE
          </span>
        </h2>
        <div className={styles.SolutionSection}>
          <Section4 />
          {/*  */}
        </div>
      </section>
    );
  };

  const Content5 = () => {
    return (
      <section className={styles.ConclusionSection} id="ANALYSIS">
        <h2 className={styles.ProblemSectionh3}>
          <span className={styles.Content1SectionHeader}>ANALYSIS</span>
        </h2>
        {/* <h3>Total Distance covered(kms): 1507.30</h3>
         */}
        {/* <DistanceAnimation /> */}

        <div className={styles.ConclusionSectionContainer}>
          <div className={styles.ConclusionSectionCard}>
            <div className={styles.ConclusionSectionCardImg}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3710/3710274.png"
                width="80px"
              />
            </div>
            <div className={styles.ConclusionSectionCardInfo}>
              <h3>Reduced distance</h3>
              <p>
                What sets this journey apart is the dedication to efficiency. By
                finding optimized routes, it managed to save hundreds of
                kilometers, emphasizing the commitment to resource conservation
                and sustainability.
              </p>
            </div>
          </div>
          <div className={styles.ConclusionSectionCard}>
            <div className={styles.ConclusionSectionCardImg}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/639/639365.png"
                width="80px"
              />
            </div>
            <div className={styles.ConclusionSectionCardInfo}>
              <h3>Saving crores of rupees in R&D</h3>
              <p>
                {" "}
                Beyond its environmental impact, the optimization efforts
                translated into significant financial savings. It conservatively
                saved crores of rupees in design and development costs, showing
                the economic benefits of such strategic planning.
              </p>
            </div>
          </div>
          <div className={styles.ConclusionSectionCard}>
            <div className={styles.ConclusionSectionCardImg}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/7071/7071818.png"
                width="80px"
              />
            </div>
            <div className={styles.ConclusionSectionCardInfo}>
              <h3>More efficient Power transmission</h3>
              <p>
                This remarkable journey isn&apos;t just about the distance but
                about building a more efficient power transmission system. It
                showcases the potential for greater energy efficiency and
                reduced losses in the future.
              </p>
            </div>
          </div>
          <div className={styles.ConclusionSectionCard}>
            <div className={styles.ConclusionSectionCardImg}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/9781/9781304.png"
                width="80px"
              />
            </div>
            <div className={styles.ConclusionSectionCardInfo}>
              <h3>Reduced Man-power</h3>
              <p>
                By implementing intelligent algorithms, the project has
                effectively reduced the demand for human resources. This not
                only enhances efficiency but also highlights the potential of
                automation in large-scale infrastructure projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => {
    return (
      <>
        <section className={styles.FooterSec}>
          <div className={styles.FooterDiv1}>
            <div className={styles.FooterDesc}>
              <h2>
                Intelligent Solutions,
                <br /> For a better tomorrow.
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

  const IntroPage = () => {
    return (
      <>
        <section className={styles.IntroPage}>
          <div className={styles.IntroPageDivImg}></div>
          <div className={styles.IntroPageDiv}>
            {/* <img
              src="https://wordpress.iqonic.design/product/wp/xamin-elementor/wp-content/uploads/2020/06/bannershap.png"
              className={styles.IntroImg}
            /> */}
            <div className={styles.IntroPageHeaders}>
              <div className={styles.IntroPageHeadersItem1}>
                <p>POWER GRID</p>
              </div>
              <div className={styles.IntroPageHeadersItem2}>
                <p>OPTIMIZATION</p>
              </div>
            </div>
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
      </Head>
      <main className={styles.body}>
        <div className={styles.banner}>
          <div className={styles.banner1}>
            <div className={styles.banner11}>
              {/* <img
                src="https://www.svgrepo.com/show/127575/location-sign.svg"
                width="20px"
              /> */}
              {"    "}
              Bangalore
            </div>
            <div className={styles.banner12}>
              {" "}
              <img
                src="https://img.icons8.com/?size=512&id=12623&format=png"
                width="20px"
              />{" "}
              &nbsp;aashishnkumar@gmail.com
            </div>
          </div>
          <div className={styles.banner2}>
            <p className={styles.banner21}>AashishNandakumar</p>
          </div>
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
        <IntroPage />
        <Content1 />
        <hr className={styles.HR} />
        <Content2 />
        <hr className={styles.HR} />

        <Content3 />
        <hr className={styles.HR} />

        <Content4 />
        <hr className={styles.HR} />
        <Content5 />
        <hr className={styles.HR} />

        <Footer />
      </main>
    </>
  );
}
