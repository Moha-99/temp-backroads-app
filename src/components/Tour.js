import React from "react";
import Title from "./Title";
import { tours } from "../data";

const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="Tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          const {
            id,
            Image,
            date,
            title,
            info,
            location,
            duration,
            cost,
          } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={Image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tour;
