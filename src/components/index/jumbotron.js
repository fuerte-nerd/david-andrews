import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Spring } from "react-spring/renderprops";

export default function Jumbotron() {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 2500 }}>
      {props => (
        <div className="jumbotron" style={props}>
          <h1 className="display-4 mt-4">Hello!</h1>
          <p className="lead">I am a professional web/app developer</p>
          <hr className="my-2" />
          <p>
            I build digital solutions to help your business grow. From simple
            portfolio/brochure-style websites to larger-scale dynamic web apps.
            From a basic tailor-made invoicing system to an all-encompassing
            software application to automate and/or organise your admin.
          </p>
          <p>
            <span className="font-weight-bold">
              Let me help you to maximize your business potential.
            </span>
          </p>
          <AniLink
            className="btn btn-primary btn-lg"
            fade
            to="/services"
            duration={process.env.PAGE_TRANSITION_DURATION}
            role="button"
          >
            Learn more
          </AniLink>
        </div>
      )}
    </Spring>
  );
}
