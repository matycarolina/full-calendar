import React from "react";
import { FilterButtons } from "./FilterButtons";
import { Row, Col } from "reactstrap";
import Calendar from "./Calendar";
import { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(["Citado", "En Cirugia"]);
  useEffect(() => {
    axios
      .get("/api/patients/list/all-data", { filtered })//agregamos un QueryParams
      .then(function (response) {
        setData(response.data);
      });
  }, [filtered]);
  return (
    <Row xs="12">
      <Col xs="12" md="3" lg="2">
        <FilterButtons filtered={filtered} setFiltered={setFiltered}/>
      </Col>
      <Col xs="12" md="9" lg="10">
        <Calendar data={data}/>
      </Col>
    </Row>
  );
};
