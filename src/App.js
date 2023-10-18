import "./App.css";
import { useState, useEffect } from "react";
import arup from "./images/icon-arrow-up.svg";
import ardown from "./images/icon-arrow-down.svg";
// import { IoIosArrowUp } from "react-icons/io";
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";

function App() {
  const [sorm, setsorm] = useState(sun);
  const [arrow, setarrow] = useState(arup);
  const [bword, setbword] = useState("More");
  const [morn, setmorn] = useState("");
  const [show, setshow] = useState(false);
  const [time, settime] = useState(
    new Date().getHours() + ":" + new Date().getMinutes()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      settime(new Date().getHours() + ":" + new Date().getMinutes());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let cl = new Date().getHours();

    if (cl > 20 || cl < 6) {
      setmorn("EVENING");
      setsorm(moon);
    } else {
      setmorn("MORNING");
      setsorm(sun);
    }
  }, []);

  const ShowOrHide = () => {
    setshow(!show);
    setbword("More");
    setarrow(arup);
    if (!show) {
      setbword("Less");
      setarrow(ardown);
    }
  };

  return (
    <div className={`App ${morn === "MORNING" ? "day-mode" : "night-mode"}`}>
      <span id="upper" style={{ height: show ? "50vh" : "100vh" }}>
        <div
          className="fhalf"
          style={
            show
              ? { height: "50vh", padding: "2% 10px 2% 5%" }
              : {
                  height: "100vh",
                  padding: "5% 10px 5% 10%",
                  paddingBottom: window.innerWidth <= 768 ? "10%" : "5%",
                }
          }
        >
          {show ? null : <Upper />}
          <div className="div2">
            <h3>
              <img src={sorm} alt="sun or moon"></img>&nbsp; GOOD {morn}, IT’S
              CURRENTLY
            </h3>
            <p>
              <span className="time">{time}</span>
              <span className="bst">BST</span>
            </p>
            <h2>IN LONDON, UK</h2>
          </div>
        </div>
        <div className="shalf" style={{ height: show ? "50vh" : "100vh" }}>
          <button onClick={() => ShowOrHide()} className="center">
            {bword}
            <span className="center">
              <img src={arrow} alt="arrow"></img>
            </span>
          </button>
        </div>
      </span>
      {!show ? null : <Toggle morn={morn} />}
    </div>
  );
}

function Upper() {
  return (
    <div>
      <p>
        “The science of operations, as derived from mathematics more especially,
        is a science of itself, and has its own abstract truth and value.”
      </p>
      <h4>Ada Lovelace</h4>
    </div>
  );
}
function Toggle({ morn }) {
  return (
    <div className={`toggled ${morn === "MORNING" ? "day" : "night"}`}>
      <div className="b b1">
        <div className="smallb">
          <p className="p">CURRENT TIMEZONE</p>
          <p className="h">Europe/London</p>
        </div>
        <div className="smallb">
          <p className="p">Day of the year</p>
          <p className="h">295</p>
        </div>
      </div>
      <hr></hr>
      <div className="b b2">
        <div className="smallb">
          <p className="p">Day of the week</p>
          <p className="h">5</p>
        </div>
        <div className="smallb">
          <p className="p">Week number</p>
          <p className="h">42</p>
        </div>
      </div>
    </div>
  );
}

export default App;
