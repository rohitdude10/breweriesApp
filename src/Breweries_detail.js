import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { callapi } from "../src/helper/Apicall";

function Breweries_detail() {
  const { search } = useLocation();

  const [detail, setdetail] = useState({});
  const match = search.match(/type=(.*)/);
  const searchid = match?.[1];

  useEffect(() => {
    callapi(`/${searchid}`).then((res) => {
      setdetail(res);
    });
  }, []);

  return (
    <div className="container mt-3">
      <div className="card text-center">
        <h5 className="card-header">{detail.name}</h5>
        <div className="card-body">
          <p className="card-text">
            <span style={{ fontWeight: "500" }}>Address: </span> {detail.city} ,
            {detail.state} ,{detail.country}
            <br />
            <span style={{ fontWeight: "500" }}>Brewery type:-></span>{" "}
            {detail.brewery_type} <br />
            <span style={{ fontWeight: "500" }}> Our Website: </span>
            {detail.website_url}
          </p>
        </div>
        <div className="card-footer text-muted">
          Last updated: {detail.updated_at}
        </div>
      </div>
    </div>
  );
}

export default Breweries_detail;
