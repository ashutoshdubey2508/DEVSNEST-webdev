import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import {  useState } from "react";
const Home = () => {
  const [pyara, setPyara] = useState({});
  const [val, setVal] = useState(null);
  const api = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=3b30c57f7d77448a8c9195735210808&q=${val}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPyara(data);
        console.log(pyara);
      });
  };

  return (
    <div>
      <div>.</div>
      <Card
        style={{
          marginTop: "60px",
          marginLeft: "300px",
          border: "8px solid #10043d",
          background: "#2d2b4f",
          height: "400px",
          width: "700px",
          display: "flex",
          displayDirection: "coloumn",
          flexWrap: "wrap",
        }}
      >
        <CardContent>
          <div
            style={{
              marginLeft: "200px",
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="City_Name"
              variant="outlined"
              style={{ backgroundColor: "#D3D3D3" }}
              onChange={(e) => {
                setVal(e.target.value);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={api}
              style={{ margin: "10px" }}
            >
              Search
            </Button>
          </div>

          {pyara.location ? (
            <div>
              <h2
                color="textSecondary"
                style={{ marginLeft: "220px", marginTop: "30px" }}
              >
                {pyara.location.name},{pyara.location.country}{" "}
              </h2>
              <img
                src={pyara.current.condition.icon}
                alt="no image found"
                style={{
                  height: "100px",
                  width: "100px",
                  border: "3px solid 	#D3D3D3",
                  borderRadius: "50%",
                  padding: "5px",
                  marginLeft: "8px",
                }}
              />
              <h2
                color="textSecondary"
                style={{
                  display: "inline",
                  fontSize: "30px",
                  marginLeft: "110px",
                }}
              >
                {" "}
                {pyara.current.temp_c}°C{" "}
              </h2>
              <div
                style={{
                  float: "right",
                  marginTop: "50px",
                  marginLeft: "150px",
                }}
              >
                <h4>Wind:{pyara.current.wind_kph} kph</h4>
                <h4>Precepitation:{pyara.current.precip_mm} mm</h4>
                <h4>Pressure:{pyara.current.pressure_mb} mb</h4>
              </div>
              <h2
                color="textSecondary"
                style={{ marginTop: "50px", marginLeft: "200px" }}
              >
                {" "}
                {pyara.current.condition.text}{" "}
              </h2>
              <h2 color="textSecondary"> </h2>
            </div>
          ) : (
            <h2
              style={{
                marginLeft: "200px",
                marginTop: "100px",
              }}
            >
              Data not Found.
            </h2>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
export default Home;