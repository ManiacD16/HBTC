import { useState } from "react";
import { Plus } from "lucide-react";

const features = [
  {
    title: "Ownership Renounced",
    content: "Details about ownership renouncement...",
  },
  {
    title: "Liquidity Locked for Trust",
    content: "Information on liquidity locking...",
  },
  {
    title: "No Developer Wallets",
    content: "Explanation of no developer wallets...",
  },
  { title: "Earn, Don't Buy", content: "Description of earning mechanism..." },
  {
    title: "Freedom to Sell Anytime",
    content: "Details about selling freedom...",
  },
];

export default function HarvestBTCFeatures() {
  const [expandedFeature, setExpandedFeature] = useState(null);

  return (
    <div
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen p-8"
      style={{
        background:
          "radial-gradient(circle at center, rgba(20, 84, 84, 0.8) -20%, rgba(13, 52, 52, 0.9) 5%, rgba(3, 11, 11, 1) 80%)",
      }}
    >
      <div className="max-w-6xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pr-4">
            <h1 className="text-5xl font-bold mb-2">Harvest BTC</h1>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">
              Features
            </h2>
            <p className="text-lg mb-4">
              At Harvest BTC (HBTC), we have taken extraordinary measures to
              ensure that this project stands as one of the most decentralized,
              trusted, and secure platforms in the blockchain space. Built on
              the principles of transparency, fairness, and decentralization,
              Harvest BTC empowers the community while safeguarding every
              participant's assets.
            </p>
          </div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() =>
                    setExpandedFeature(expandedFeature === index ? null : index)
                  }
                >
                  <span className="text-lg font-semibold">{feature.title}</span>
                  <div className="w-8 h-8 flex items-center justify-center border-2 border-yellow-400 rounded-full">
                    <Plus className="text-yellow-400" />
                  </div>
                </button>
                {expandedFeature === index && (
                  <p className="mt-2 text-gray-300">{feature.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
