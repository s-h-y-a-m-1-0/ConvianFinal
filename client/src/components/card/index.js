import "./styles.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <div className="container">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            10/11/21
          </Typography>
          <Typography variant="h5" component="div">
            Class is not being taken properly
          </Typography>
          <div className="bodyContainer">
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </Typography>
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <p className="statusText">
            Status: <span className="statusTextColored">FINISHED</span>
          </p>
        </CardActions>
      </Card>
    </div>
  );
}
