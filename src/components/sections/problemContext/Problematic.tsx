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
            Agriculture, one of the fundamental pillars of human survival, is
            facing an unprecedented crisis.{" "}
            <span className="font-bold">Climate change</span> has caused drastic
            alterations in weather patterns, profoundly affecting agricultural
            production globally. Conditions that were once considered stable
            have changed, exposing farmers to prolonged{" "}
            <span className="font-bold">droughts, torrential rains</span> and{" "}
            <span className="font-bold">unpredictable weather events</span>,
            creating critical problems for food security and economic stability
          </p>
        }
        bottomContent={
          <div>
            <p>
              According to an <span className="font-bold">FAO</span> report{" "}
              <a href="https://openknowledge.fao.org/server/api/core/bitstreams/30c0d98d-1c21-48ef-b5d9-8d988e6fa6f2/content">
                (2021)
              </a>
              , between 2008 and 2018, agriculture suffered 26% of the total
              damage caused by climate disasters, with droughts responsible for
              80% of these losses.
            </p>
            <p className="mt-6">
              This highlights the vulnerability of the agricultural sector not
              only at the economic level, but also in its capacity to ensure
              global food security{" "}
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
        image="/images/.jpg"
        isFlipped
        columnContent={
          <p>
            NASA’s extensive research shows that climate change is intensifying
            both droughts and extreme precipitation events, posing significant
            risks to agriculture worldwide. Rising global temperatures, which
            have increased by 1.18°C since the late 19th century, are making
            droughts more frequent and severe, while also causing extreme
            rainfall events to become more intense (NASA, 2021).
          </p>
        }
        bottomContent={
          <div>
            <p>
              The GRACE-FO satellite mission has provided critical data on
              global freshwater distribution. Over the past two decades, regions
              like the Tigris-Euphrates Basin and California have suffered
              severe water depletion due to human consumption and climate change
              (NASA, 2018). At the same time, areas such as the Great Lakes have
              seen increases in water storage. This redistribution of water
              resources highlights the increasing pressure on freshwater
              availability, which is vital for irrigation and sustaining crop
              yields.
            </p>
            <p className="mt-6">
              NASA’s data also points to how the intensification of both
              droughts and floods complicates water management in agriculture
              (NASA, 2023). With climate change making water resources more
              unpredictable, farmers must adapt their irrigation practices and
              water usage to ensure their crops thrive under these new
              conditions.
            </p>
          </div>
        }
      />
      <Article
        title="Water: The Most Affected Resource"
        image="/images/Drought.jpg"
        columnContent={
          <p>
            Water scarcity is one of the most urgent challenges facing
            agriculture globally. According to the World Bank (2023), more than
            40% of the world's population is already affected by water scarcity,
            and by 2030, a 40% deficit is projected between water demand and
            available supply.
          </p>
        }
        bottomContent={
          <div>
            <p>
              This deficit is due to both population growth and agricultural
              intensification, in addition to the impacts of climate change,
              which alter water cycles and make droughts and extreme rains more
              frequent (Banco Mundial, 2022).
            </p>
            <p className="mt-6">
              The problem is critical for agriculture, which consumes 70% of the
              world's water. By 2050, a 50% increase in agricultural production
              will be needed to feed the world's growing population, putting
              even more pressure on already scarce water resources (Banco
              Mundial, 2022).
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
              According to FAO (2018), 80% of the world's farms are small, and
              these smallholders are responsible for producing 35% of the global
              food supply. However, they are among the most vulnerable due to
              limited access to accurate climate technologies and data.
            </p>
            <p className="mt-8">
              Climate uncertainty affects not only crop yields but also food
              prices and farmers' incomes. This volatility has exacerbated food
              insecurity, particularly in regions heavily dependent on
              subsistence agriculture (FAO, 2021).
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Problematic;
