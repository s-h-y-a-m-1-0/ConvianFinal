import "./styles.css";

import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";

export default function CardFullWidth() {
  return (
    <div className="container">
      <Card>
        <div className="body">
          <Radio />
          <p className="title">Class is not being taken properly</p>
        </div>
      </Card>
    </div>
  );
}
