import React from "react";
import Article from "./Article";

const CaseStudyRice = () => {
  return (
    <div className="flex flex-col px-8 md:px-40 xl:px-60 py-20 bg-primary-white text-primary-black gap-y-20">
      <Article
        title="Rice Production Forecasting in Peru"
        subtitle="Case Study 1"
        image="/images/Dashboard.png"
        imageDescription="Rice mapper dashboard"
        columnContent={
          <p>
            The <b>UK Space Agency</b>, in collaboration with <b>Peru’s </b>
            Ministry of Agricultural Development and Irrigation (MIDAGRI),
            implemented a project to improve rice production forecasting through
            the use of satellite data. By employing remote sensing technology,
            they were able to gather precise, real-time information about soil
            moisture, crop growth, and weather conditions. <br></br>
            <br></br>This data was displayed on a dashboard, which allowed the
            government to more accurately predict rice yields and make informed
            decisions on resource allocation, such as water and fertilizers. The
            primary benefit was the stabilization of rice prices by ensuring a
            steady supply, avoiding both overproduction and shortages.
          </p>
        }
        bottomContent={
          <div>
            <p>
              The project had significant impacts on the agricultural sector in
              Peru. Farmers were able to manage their crops{" "}
              <b>more efficiently</b>, reducing water waste and optimizing the
              use of inputs. The data provided better insights into the timing
              of the rice growth cycle, improving both productivity and
              profitability. Additionally, the government used this information
              to <b>strengthen food security</b> and market stability, thus
              benefiting both producers and consumers.
            </p>
            <p className="mt-8">
              For more information, you can read the full case study{" "}
              <a href="https://www.spacefordevelopment.org/wp-content/uploads/2022/04/PeruRice-WP5-D14_CaseStudy-1.0.pdf">
                here
              </a>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default CaseStudyRice;
