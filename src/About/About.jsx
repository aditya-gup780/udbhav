import pitch from "./images/pitch1.jpg";
import successvector from "./images/success.jpg";
import "./about.css";

function About() {
  return (
    <>
      <div className="lines">
        <div className="line1"></div>
      </div>
      <div className="udbhav">
        <div className="pitch1">
          <img
            src={pitch}
            alt=""
            width="550px"
            height="428px"
            style={{
              borderBottomRightRadius: "15px",
              borderTopRightRadius: "15px",

              // Use a percentage to make it circular
            }}
          />
        </div>
        <div className="container ">
          <h1>
            WHAT IS UDBHAV <br />
            TECH??
          </h1>
          <p>
            Udbhav Tech is an annual flagship event by Institute Innovation
            Council(IIC) which comes directly under Ministry Of Human Resource
            And Development(MHRD),annually convening academia,venture
            capitalists, and forward thinking entrepreneurs.Join with us to
            witness innovation,creativity in action,film making with
            quizzes,workshops,comedy night and much more....
          </p>
        </div>
      </div>
      <div className="udbhav1">
        <div className="container2">
          <h1>ABOUT UDBHAV TECH THEME???</h1>
          <p>
            Udbhav Tech seeks to inspire everyone to break the limits of their
            minds and come out of their comfort zone ,challenging conventional
            thinking,explore and redefine the boundaries to foster entrepreneur
            spirit among the students and community in general..
          </p>
        </div>
        <div className="success1">
          <img
            src={successvector}
            alt=""
            width="550px"
            height="428px"
            style={{
              borderBottomRightRadius: "15px",
              borderTopRightRadius: "15px",

              // Use a percentage to make it circular
            }}
          />
        </div>
      </div>
      <div className="udbhav3"></div>
      <div className="wallstreet">
        <h1>
          UDBHAV TECH'23-
          <br />
          WALL STREET OF ENTREPRENEURS
        </h1>
        <div>
          Unleashing the theme of 'Wall Street Of Entrepreneurs' where uncharted
          realms await your curiosity's embrace. Venture into the unknown,
          question the unquestioned, and sculpt innovation from mere ideas. Let
          this fusion kindle a wildfire of revolutionary thinking, where
          entrepreneurs script tomorrows unseen.
        </div>
      </div>
    </>
  );
}

export default About;
