import React from "react";

function Brewercard({ brewer }) {
  return (
    <div className="col-md-4 ">
      <div
        className="card text-white bg-dark mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <h5 className="card-header">{brewer.name}</h5>
        <div className="card-body">
          <h6 className="card-title"> <span style={{color:"red"}}>City</span>  : {brewer.city}</h6>
          <p className="card-text"> <span style={{color:"red"}}>Brewery Type</span> : {brewer.brewery_type}</p>
          <p className="card-text"> <span style={{color:"red"}}>Our Website</span> : {brewer.website_url}</p>
          <a href={`/detail?type=${brewer.id}`} className="card-link" style={{color:"white"}}>
            Show Detail
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brewercard;
