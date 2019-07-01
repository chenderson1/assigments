import React, { Fragment, Component } from "react";
import NavBar from "./NavBar";

class LandingPage extends Component {
  state = {
    hour: 0,
    min: 0,
    sec: 0,
    amPm: "",
    bgUrl: "",
    greeting: "",
    color: ""
  };

  showTime = async () => {
    let today = new Date(),
      hour = +today.getHours(),
      min = +today.getMinutes(),
      sec = +today.getSeconds();

    //set am or pm.
    const amPm = hour >= 12 ? "PM" : "AM";
    // 12 hour format
    hour = hour % 12 || 12;
    this.setState({ hour, min, sec, amPm });
  };

  setBgGretting = async () => {
    let today = new Date(),
      hour = today.getHours();

    if (hour < 12) {
      this.setState({
        greeting: "Good Morning",
        bgUrl:
          "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/N_14eYGve/aerial-shot-of-oakland-city-lake-merritt-at-sunrise_rr6xpjang_thumbnail-full06.png",
        color: "black"
      });
    } else if (hour < 18) {
      this.setState({
        greeting: "Good Afternoon",
        bgUrl:
          "https://media.cntraveler.com/photos/5b9965e47009626e21e1e1aa/master/w_1024,c_limit/Oakland_GettyImages-895763946.jpg",
        color: "black"
      });
    } else {
      this.setState({
        greeting: "Good Evening",
        bgUrl:
          "https://ww2.kqed.org/news/wp-content/themes/KQED-unified/img/audio_bgs/background1.jpg",
        color: "black"
      });
    }
  };

  async componentDidMount() {
    await this.showTime();
    await this.setBgGretting();
    setInterval(this.showTime, 1000);
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.bgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          color: `${this.state.color}`,
          textTransform: "uppercase"
        }}
      >
        <NavBar />
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <time
            style={{
              color: "#7D5C83",
              fontSize: "3rem",
              marginBottom: "5vh",
              fontFamily: "Roboto"
            }}
            id="time"
          >
            {this.state.hour}:
            {this.state.min < 10 ? `0${this.state.min}` : this.state.min}:
            {this.state.sec < 10 ? `0${this.state.sec}` : this.state.sec}{" "}
            {this.state.amPm}
          </time>
          <div
            style={{
              color: "white",
              height: "40%",
              width: "30%",
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "9px",
              fontSize: "1.2rem"
            }}
          >
            <h2>
              <p style={{ marginRight: "13vw" }} id="geeting">
                {this.state.greeting}
              </p>
            </h2>

            <p id="intro">
              Im <h1 style={{ color: "yellow", fontSize: "2.5rem" }}>Cory</h1>
            </p>
            <p id="job-title">
              <p style={{ marginLeft: "13vw" }}>a</p>
              <h1 style={{ color: "#66BB6A", marginLeft: "13vw" }}>
                Web Developer
              </h1>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
// even though its my first programming language  and I still have so much to learn about it,  I completely identify as a Javascript Developer because I love the language and everything it and the javascript community represents. .
