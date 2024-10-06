import React from "react";
import Article from "./Article";

const CaseStudyRice = () => {
  return (
    <div className="flex flex-col px-8 md:px-40 xl:px-60 py-20 bg-primary-black text-primary-white gap-y-20">
      <Article
        title="Asparagus Farming in Peru"
        subtitle="Case Study 2"
        image="/gif/Sentinel.gif"
        imageDescription="Application powered by Sentinel satellite data"
        columnContent={
          <p>
            Another successful case study in Peru involved the use of satellite
            data to support asparagus farmers. By combining data from the
            <b> Sentinel satellite system</b>, asparagus growers received
            detailed information on water availability, soil conditions, and
            climate trends. This enabled them to make informed decisions about
            when to irrigate and how to optimize resource use during the
            asparagus growing season. The data also helped farmers adapt to
            seasonal variability, allowing them to adjust their practices to
            ensure higher yields and lower production costs.
          </p>
        }
        bottomContent={
          <div>
            <p>
              The results of using satellite data were clear: farmers reported
              significant <b>improvements in water efficiency</b>, which
              directly reduced their operational costs. Additionally, the
              real-time monitoring of crop conditions allowed for better
              decision-making, resulting in higher crop yields and more
              sustainable farming practices. This case demonstrates the powerful
              impact of satellite data on improving the precision of
              agricultural management, leading to both environmental and
              economic benefits.
            </p>
            <p className="mt-8">
              Read more about this case study{" "}
              <a href="https://sentinel.esa.int/web/success-stories/-/sentinel-data-fusion-aids-asparagus-farming-in-peru">
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
