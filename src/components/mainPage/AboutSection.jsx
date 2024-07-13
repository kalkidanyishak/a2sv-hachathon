/**
 * This code was generated by Builder.io.
 */
import React from "react";

const PlanCard = ({ title, price, features }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col mt-2.5 text-neutral-900 max-md:mt-10">
      <div className="text-base font-bold">{title}</div>
      <div className="flex gap-1 mt-1 whitespace-nowrap">
        <div className="text-4xl font-black tracking-tighter">{price}</div>
        <div className="self-start mt-5 text-base font-bold">/month</div>
      </div>
      {features.map((feature, index) => (
        <div key={index} className="flex gap-3 mt-2 text-sm leading-5">
          <img
            loading="lazy"
            src={feature.icon}
            alt=""
            className="flex-1 shrink-0 w-full aspect-square"
          />
          <div>{feature.text}</div>
        </div>
      ))}
    </div>
  </div>
);

const AboutSection = () => {
  const freePlan = {
    title: "Free Plan",
    price: "$0",
    features: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/572159f877e2a79eecfd833c580357b61b3a17df5845224eeabe4055f698ae05?apiKey=27e3725db8b34053b390a33ddc94eaed&",
        text: "Access to Analyzed data",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/308e8c2bc9f8f3be21e1c32d0a7b72501461512f4054462fc1c8b0f97e87be99?apiKey=27e3725db8b34053b390a33ddc94eaed&",
        text: "Basic AI Analysis Bot",
      },
    ],
  };

  const basicPlan = {
    title: "Basic Plan",
    price: "$29.99",
    features: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/018b7d8ebaa54ae5b8bdac8cf435117265ee4a1c54e55a11801cc8fc89d2205a?apiKey=27e3725db8b34053b390a33ddc94eaed&",
        text: "Access to data collection forms",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e9455a5db9dc43df84754cdb995d738455323a268dfd5124bbc3cd329b56648?apiKey=27e3725db8b34053b390a33ddc94eaed&",
        text: "AI data Analysis",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41e4e3aa6cef40b8363ff3a0d26ac70d270a651dd74b03aa6115be989363a4af?apiKey=27e3725db8b34053b390a33ddc94eaed&",
        text: "Standard visualizations",
      },
    ],
  };

  return (
    <section className="flex flex-col justify-center px-14 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="mt-8 mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54b8ba0c9c635e975f77104d6933fccc5a719bd0c51731b57dba7f3bcc37238f?apiKey=27e3725db8b34053b390a33ddc94eaed&"
              alt=""
              className="grow w-full rounded-none aspect-[0.98] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-2xl leading-9 text-emerald-700 max-md:max-w-full">
                About Us
              </h2>
              <h3 className="mt-2 text-5xl font-semibold text-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                We Transform Child Health Data into Actionable Insights
              </h3>
              <p className="mt-8 text-base leading-6 text-zinc-700 max-md:max-w-full">
                At [Platform Name], we are dedicated to transforming the way
                health data for children under the age of 5 is collected,
                analyzed, and utilized. Our mission is to empower NGOs and
                companies with the tools they need to make informed decisions
                that can positively impact child health globally.
              </p>
              <div className="px-11 pt-6 mt-8 rounded-sm border-4 border-emerald-700 border-solid max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <PlanCard {...freePlan} />
                  <PlanCard {...basicPlan} />
                </div>
              </div>
              <button className="justify-center self-start px-6 py-4 mt-11 text-lg leading-6 text-white bg-emerald-700 rounded-none max-md:px-5 max-md:mt-10">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;