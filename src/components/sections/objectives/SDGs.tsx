import React from "react";
import Article from "./Article";

const SDGs = () => {
  return (
    <div className="flex flex-col px-8 md:px-40 xl:px-60 py-20 gap-y-20">
      <Article
        title="SDG 2: Food Security (Zero Hunger)"
        image="/images/sdg2.png"
        columnContent={
          <p>
            To meet the growing global demand for food, it is projected that by
            2050 a 50% increase in agricultural production will be required{" "}
            <a href="https://research.wri.org/sites/default/files/2019-07/WRR_Food_Full_Report_0.pdf#page=3.00">
              (World Economic Forum, 2020)
            </a>
            . <span className="evergrow-text">Evergrow</span> directly supports
            this goal by providing farmers with real-time satellite data,
            allowing them to optimize the use of resources and increase crop
            yields sustainably. By empowering farmers to make data-driven
            decisions, <span className="evergrow-text">Evergrow</span> enhances
            food security, particularly in regions where climate variability
            threatens agricultural production.
          </p>
        }
      />
      <Article
        title="SDG 6: Water Efficiency (Clean Water and Sanitation)"
        image="/images/sdg6.jpg"
        isFlipped
        columnContent={
          <p>
            Water management remains a significant challenge in agriculture,
            which currently consumes 70% of the world’s freshwater supply. By
            2030, it is expected that there will be a 40% shortfall between
            global water demand and available supply{" "}
            <a href="https://www.worldbank.org/en/news/infographic/2023/07/26/water-in-agriculture">
              (World Bank, 2023)
            </a>
            . <span className="evergrow-text">Evergrow</span> addresses this
            issue by providing farmers with precise, real-time data on soil
            conditions and precipitation patterns. This information helps
            farmers make informed decisions on irrigation, reducing water waste
            and ensuring that water resources are used efficiently, contributing
            to long-term sustainability.
          </p>
        }
      />
      <Article
        title="SDG 9: Agricultural Innovation (Industry, Innovation, and Infrastructure)"
        image="/images/sdg9.png"
        columnContent={
          <p>
            Innovation is key to transforming agriculture into a more efficient
            and sustainable sector.{" "}
            <span className="evergrow-text">Evergrow</span> fosters this
            transformation by providing an accessible, technology-driven
            platform that translates complex satellite data into actionable
            insights. This allows farmers to adopt advanced technological
            practices, improving productivity and promoting sustainable
            agricultural practices. Additionally,{" "}
            <span className="evergrow-text">Evergrow</span> supports the
            development of agricultural infrastructure by enhancing rural
            connectivity and providing access to innovative tools that
            strengthen the agricultural supply chain.
          </p>
        }
      />
      <Article
        title="SDG 13: Climate Resilience (Climate Action)"
        image="/images/sdg13.png"
        isFlipped
        columnContent={
          <p>
            The increasing frequency of extreme weather events—such as droughts,
            floods, and heatwaves—due to climate change poses significant risks
            to agriculture, particularly for smallholder farmers who rely on
            stable weather patterns for their livelihoods (FAO, 2021).{" "}
            <span className="evergrow-text">Evergrow</span> equips farmers with
            tools to better adapt to changing climatic conditions. By using
            satellite data to forecast weather patterns and inform farmers of
            potential risks, <span className="evergrow-text">Evergrow</span>{" "}
            helps reduce the impact of climate variability, improving the
            resilience of crops and promoting sustainable agricultural
            practices.
          </p>
        }
      />
    </div>
  );
};

export default SDGs;
