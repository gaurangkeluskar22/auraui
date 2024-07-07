import React from "react";

type Props = {};

interface StatisticItemProps {
  value: string;
  description: string;
  showDivider?: boolean;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  value,
  description,
  showDivider,
}) => (
  <div className="relative lg:px-14">
    {showDivider && (
      <div className="absolute bottom-0 left-0 hidden w-px h-16 bg-gray-600 lg:block"></div>
    )}
    <p className="text-5xl font-bold text-white font-pj">{value}</p>
    <p className="mt-5 text-lg font-normal text-gray-300">{description}</p>
  </div>
);

const MetricsHub: React.FC<Props> = () => {
  const statistics = [
    {
      value: "1.5M",
      description: "Developers using AuraUI worldwide.",
    },
    {
      value: "81%",
      description: "Increase in development speed with AuraUI.",
    },
    {
      value: "878+",
      description: "Projects leveraging the power of AuraUI.",
    },
  ];

  return (
    <section className="py-12 bg-gray-900 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
            Empowering Developers with AuraUI
          </h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <svg
            className="w-auto h-4 mx-auto text-gray-600"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={i}
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${
                  11 + 35 * i
                } 1)`}
              />
            ))}
          </svg>
        </div>

        <div className="grid grid-cols-1 mt-16 text-center sm:text-left gap-y-12 gap-x-8 sm:grid-cols-3 lg:gap-0">
          {statistics.map((stat, index) => (
            <StatisticItem
              key={index}
              value={stat.value}
              description={stat.description}
              showDivider={index !== 0} // Hide divider for the first item
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsHub;
