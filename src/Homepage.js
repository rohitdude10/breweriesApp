import React, { useEffect, useState } from "react";
import Brewercard from "./component/Brewercard";
import { callapi } from "../src/helper/Apicall";

function Homepage() {
  const [brewerdetail, setbrewerdetail] = useState([]);
  const [fordisplay, setfordisplay] = useState([]);
  const [selectcity, setselectcity] = useState("");
  const [selectype, setselecttype] = useState("");

  const forcity = async () => {
    try {
      const newbreweries = await callapi(`?by_city=${selectcity}`);
      setfordisplay(newbreweries);
    } catch (err) {
      console.log(err.message);
    }
  };
  const fortype = async () => {
    try {
      const newbreweries = await callapi(`?by_type=${selectype}`);
      setfordisplay(newbreweries);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    callapi().then((res) => {
      setbrewerdetail(res);
      setfordisplay(res);
    });
  }, []);

  useEffect(() => {
    forcity();
  }, [selectcity]);

  useEffect(() => {
    fortype();
  }, [selectype]);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            value={selectcity}
            onChange={(e) => setselectcity(e.target.value)}
          >
            <option>Filter by City </option>
            {brewerdetail.map((brewer) => (
              <option value={brewer.city} key={brewer.id}>
                {brewer.city}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            value={selectype}
            onChange={(e) => setselecttype(e.target.value)}
          >
            <option>Filter by Type </option>
            <option value="micro">micro </option>
            <option value="nano">nano </option>
            <option value="regional">regional </option>
            <option value="brewpub">brewpub </option>
            <option value="large">large </option>
            <option value="bar">bar </option>
            <option value="contract">contract </option>
            <option value="proprietor">proprietor </option>
            <option value="closed">closed </option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        {fordisplay.map((brewer) => (
          <Brewercard key={brewer.id} brewer={brewer} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
