import "./styles.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export default function BasicCard() {
  return (
    <div className="container">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            SUBJECTIVE
          </Typography>
          <Typography variant="h5" component="div">
            Theory of Computation
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
          <div className="voteContainer">
            <ThumbUpOffAltIcon />
            <p className="voteCount">10</p>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
