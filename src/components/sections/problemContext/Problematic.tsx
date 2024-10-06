import React from "react";
import Article from "./Article";

const Problematic = () => {
  return (
    <div className="flex flex-col px-8 md:px-40 xl:px-60 py-20 bg-primary-white text-primary-black gap-y-20">
      <Article
        title="Global Context: The Climate Problem and Agriculture"
        image="/images/Sunrise.webp"
        columnContent={
          <p>
            <span className="font-bold">Agriculture</span>, one of the
            fundamental pillars of human survival, is facing an unprecedented{" "}
            <span className="font-bold">crisis.</span> Climate change has caused
            drastic alterations in weather patterns, profoundly affecting
            agricultural <span className="font-bold">production globally</span>.
            Conditions that were once considered stable have changed, exposing
            farmers to prolonged droughts, torrential rains and unpredictable
            weather events, creating critical problems for{" "}
            <span className="font-bold">food security</span> and economic
            stability.
          </p>
        }
        bottomContent={
          <div>
            <p>
              According to an <span className="font-bold">FAO</span> report{" "}
              <a href="https://openknowledge.fao.org/server/api/core/bitstreams/30c0d98d-1c21-48ef-b5d9-8d988e6fa6f2/content">
                (2021)
              </a>
              , between 2008 and 2018, agriculture suffered{" "}
              <span className="font-bold">26%</span> of the total damage caused
              by climate disasters, with droughts responsible for{" "}
              <span className="font-bold">80%</span> of these losses.
            </p>
            <p className="mt-6">
              This highlights the{" "}
              <span className="font-bold">vulnerability</span> of the
              agricultural sector not only at the economic level, but also in
              its capacity to ensure global food security{" "}
              <a href="https://openknowledge.fao.org/server/api/core/bitstreams/30c0d98d-1c21-48ef-b5d9-8d988e6fa6f2/content">
                (FAO, 2021)
              </a>
              .
            </p>
          </div>
        }
      />
      <Article
        title="NASA’s Insights on Water and Climate"
        image="/images/GraceFo.png"
        isFlipped
        columnContent={
          <p>
            <span className="font-bold">NASA’s</span> extensive research shows
            that climate change is intensifying both{" "}
            <span className="font-bold">droughts</span> and extreme{" "}
            <span className="font-bold">precipitation</span> events, posing
            significant risks to{" "}
            <span className="font-bold">agriculture worldwide</span>. Rising
            global temperatures, which have increased by{" "}
            <span className="font-bold">1.18°C</span> since the late 19th
            century, are making droughts more frequent and severe, while also
            causing extreme rainfall events to become more intense{" "}
            <a href="https://science.nasa.gov/climate-change/effects/">
              (NASA, 2021)
            </a>
            .
          </p>
        }
        bottomContent={
          <div>
            <p>
              The <b>GRACE-FO satellite</b> mission has provided critical data
              on global freshwater distribution. Over the past two decades,
              regions like the Tigris-Euphrates Basin and California have
              suffered severe water depletion due to human consumption and
              climate change
              <a href="https://gracefo.jpl.nasa.gov/news/131/nasa-satellites-reveal-major-shifts-in-global-freshwater/">
                {" "}
                (NASA, 2018)
              </a>
              . At the same time, areas such as the Great Lakes have seen
              increases in water storage. This redistribution of{" "}
              <b>water resources</b> highlights the increasing pressure on
              freshwater availability, which is vital for <b>irrigation</b> and{" "}
              <b>sustaining</b> crop yields.
            </p>
            <p className="mt-6">
              NASA’s data also points to how the intensification of both
              droughts and floods complicates <b>water management</b> in
              agriculture
              <a href="https://ciencia.nasa.gov/ciencias-terrestres/el-calentamiento-hace-que-las-sequias-y-las-precipitaciones-extremas-sean-mas-frecuentes-e-intensas/">
                {" "}
                (NASA, 2023)
              </a>
              . With climate change making water resources more{" "}
              <b>unpredictable</b>, farmers must adapt their irrigation
              practices and water usage to ensure their crops thrive under these
              new conditions.
            </p>
          </div>
        }
      />
      <Article
        title="Water: The Most Affected Resource"
        image="/images/Drought.jpg"
        columnContent={
          <p>
            Water <b>scarcity</b> is one of the most urgent challenges facing
            agriculture globally. According to the{" "}
            <a href="https://www.worldbank.org/en/news/infographic/2023/07/26/water-in-agriculture">
              World Bank (2023)
            </a>
            , more than 40% of the world's population is already affected by
            water scarcity, and by 2030, a 40% deficit is projected between
            water demand and available supply.
          </p>
        }
        bottomContent={
          <div>
            <p>
              This <b>deficit</b> is due to both population growth and
              agricultural intensification, in addition to the impacts of{" "}
              <b>climate change</b>, which alter water cycles and make droughts
              and extreme rains more frequent{" "}
              <a href="https://www.bancomundial.org/es/topic/waterresourcesmanagement#:~:text=Las%20estimaciones%20indican%20que%20m%C3%A1s,de%20agua%20extrema%20(i)">
                (Banco Mundial, 2022)
              </a>
              .
            </p>
            <p className="mt-6">
              The problem is critical for agriculture, which consumes <b>70%</b>{" "}
              of the world's water. By 2050, a <b>50%</b> increase in
              agricultural production will be needed to feed the{" "}
              <b>world's growing population</b>, putting even more pressure on
              already scarce water resources{" "}
              <a href="https://www.bancomundial.org/es/topic/waterresourcesmanagement#:~:text=Las%20estimaciones%20indican%20que%20m%C3%A1s,de%20agua%20extrema%20(i)">
                (Banco Mundial, 2022)
              </a>
              .
            </p>
          </div>
        }
      />
      <Article
        title="Climate Uncertainty and Challenges for Smallholder Farmers"
        image="/images/Potato.png"
        isFlipped
        columnContent={
          <div>
            <p>
              According to{" "}
              <a href="https://www.fao.org/newsroom/detail/Small-family-farmers-produce-a-third-of-the-world-s-food/en">
                FAO (2018)
              </a>
              , <b>80%</b> of the world's farms are small, and these
              smallholders are responsible for producing{" "}
              <b>35% of the global food supply</b>. However, they are among the
              most <b>vulnerable</b> due to limited access to accurate climate{" "}
              <b>technologies</b> and <b>data</b>.
            </p>
            <p className="mt-8">
              Climate uncertainty affects not only crop yields but also{" "}
              <b>food prices</b> and farmers' incomes. This volatility has
              exacerbated food insecurity, particularly in regions heavily
              dependent on subsistence agriculture{" "}
              <a href="https://openknowledge.fao.org/server/api/core/bitstreams/30c0d98d-1c21-48ef-b5d9-8d988e6fa6f2/content">
                (FAO, 2021)
              </a>
              .
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Problematic;
