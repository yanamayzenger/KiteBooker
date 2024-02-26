import React, { Component } from "react";
import Button from "../Button/Button";
import "./Weather.scss";

class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  componentDidMount() {
    if (!document.getElementById("weatherWidgetScript")) {
      const script = document.createElement("script");
      script.id = "weatherWidgetScript";
      script.src =
        "https://www.windfinder.com/widget/forecast/js/dakhla_attitude?unit_wave=m&unit_rain=mm&unit_temperature=c&unit_wind=kts&unit_pressure=hPa&days=2&show_day=1";
      script.async = true;

      script.onload = () => {
        const embedScript = document.createElement("script");
        embedScript.type = "text/javascript";
        embedScript.async = true;
        embedScript.innerHTML = `
          EmbedManager.embed({
            key: "your_key_here", // Make sure to replace "your_key_here" with your actual key if needed
            width: "100%",
            mobileResponsive: true
          });
        `;
        this.divRef.current.appendChild(embedScript);
      };

      this.divRef.current.appendChild(script);
    }
  }

  render() {
    return (
      <div className="weather-widget-wrapper">
        <Button className="weather-button" title="Weather" />{" "}
        <div ref={this.divRef} className="weather-widget"></div>
      </div>
    );
  }
}

export default WeatherWidget;
