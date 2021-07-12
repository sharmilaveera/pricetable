import { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { Form } from "react-bootstrap";
export default function App() {
  const priceTable = [
    // {
    //   // table:"FREE",
    //   // price:"$0",
    //   // line1:" ✔ Single User",
    //   // line2:"	✔ 5GB Storage",
    //   // line3:"	✔ Unlimited Public Projects",
    //   // line4:" ✔ Community Access",
    //   // line5:" ✖ Unlimited Private Projects",
    //   // line6:" ✖ Dedicated Phone Support",
    //   // line7:"✖ Free Subdomain",
    //   // line8:"✖ Monthly Status Reports"
    // }
  ];
  const [table, setTable] = useState(priceTable);
  return (
    <div className="TableApp">
      <Content
        table="FREE"
        price="$0"
        line1=" ✔ Single User"
        line2="✔ 5GB Storage"
        line3="	✔ Unlimited Public Projects"
        line4=" ✔ Community Access"
        line5=" ✖ Unlimited Private Projects"
        line6=" ✖ Dedicated Phone Support"
        line7="✖ Free Subdomain"
        line8="✖ Monthly Status Reports"
      />
      <Content
        table="PLUS"
        price="$9"
        line11=" ✔ 5 Users"
        line12="✔ 50GB Storage"
        line13="	✔ Unlimited Public Projects"
        line14=" ✔ Community Access"
        line15=" ✔ Unlimited Private Projects"
        line16=" ✔ Dedicated Phone Support"
        line17="✔ Free Subdomain"
        line18="✖ Monthly Status Reports"
      />
      <Content
        table="PRO"
        price="$49"
        line111=" ✔ Unlimited Users"
        line112="✔ 150GB Storage"
        line113="	✔ Unlimited Public Projects"
        line114=" ✔ Community Access"
        line115=" ✔ Unlimited Private Projects"
        line116=" ✔ Dedicated Phone Support"
        line117="✔ Unlimited  Free Subdomain"
        line118="✔ Monthly Status Reports"
      />
      {table.map((detail) => (
        <Content
          table={detail.table}
          price={detail.price}
          line1={detail.line1}
          line11={detail.line11}
          line111={detail.line111}
          line2={detail.line2}
          line12={detail.line12}
          line112={detail.line112}
          line3={detail.line3}
          line13={detail.line13}
          line113={detail.line113}
          line4={detail.line4}
          line14={detail.line14}
          line114={detail.line114}
          line5={detail.line5}
          line15={detail.line15}
          line115={detail.line115}
          line6={detail.line6}
          line16={detail.line16}
          line116={detail.line116}
          line7={detail.line7}
          line17={detail.line17}
          line117={detail.line117}
          line8={detail.line8}
          line18={detail.line18}
          line118={detail.line118}
        />
      ))}
    </div>
  );
}

function Content(props) {
  return (
    <div className="button">
      <h3 className="table"> {props.table}</h3>
      <h1 className="price">
        {" "}
        {props.price}
        <span>/month</span>{" "}
      </h1>
      <hr />

      <p className="line1"> {props.line1} </p>
      <p className="line11">
        {" "}
        <b>{props.line11}</b>{" "}
      </p>
      <p className="line111">
        {" "}
        <b>{props.line111} </b>{" "}
      </p>
      <p className="line2"> {props.line2} </p>
      <p className="line12"> {props.line12} </p>
      <p className="line112"> {props.line112} </p>
      <p className="line3"> {props.line3} </p>
      <p className="line13"> {props.line13} </p>
      <p className="line113"> {props.line113} </p>
      <p className="line4"> {props.line4} </p>
      <p className="line14"> {props.line14} </p>
      <p className="line114"> {props.line114} </p>
      <p className="line5">
        {" "}
        <aa style={{ color: "grey" }}>{props.line5} </aa>
      </p>
      <p className="line15"> {props.line15} </p>
      <p className="line115"> {props.line115} </p>
      <p className="line6">
        {" "}
        <aa style={{ color: "grey" }}>{props.line6}</aa>{" "}
      </p>
      <p className="line16"> {props.line16} </p>
      <p className="line116"> {props.line116} </p>
      <p className="line7">
        {" "}
        <aa style={{ color: "grey" }}>{props.line7}</aa>{" "}
      </p>
      <p className="line17"> {props.line17} </p>
      <p className="line117">
        {" "}
        <b>{props.line117}</b>{" "}
      </p>
      <p className="line8">
        <aa style={{ color: "grey" }}> {props.line8} </aa>{" "}
      </p>
      <p className="line18">
        {" "}
        <aa style={{ color: "grey" }}>{props.line18}</aa>{" "}
      </p>
      <p className="line118"> {props.line118} </p>

      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button size="small" variant="contained" color="primary">
          BUTTON
        </Button>
      </div>
    </div>
  );
}
