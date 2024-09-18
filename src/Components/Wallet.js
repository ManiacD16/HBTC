// import { createAppKit } from "@reown/appkit/react";
// import { EVMEthers5Client } from "@reown/appkit-adapter-ethers5";
// import { mainnet, arbitrum } from "@reown/appkit/networks";

// // 1. Get projectId
// const projectId = "YOUR_PROJECT_ID";

// // 2. Set Ethers adapters
// const ethers5Adapter = new EVMEthers5Client();

// // 3. Create a metadata object - optional
// const metadata = {
//   name: "My Website",
//   description: "My Website description",
//   url: "https://mywebsite.com", // origin must match your domain & subdomain
//   icons: ["https://avatars.mywebsite.com/"],
// };

// // 4. Create the AppKit instance
// createAppKit({
//   adapters: [ethers5Adapter],
//   metadata: metadata,
//   networks: [mainnet, arbitrum],
//   projectId,
//   features: {
//     analytics: true, // Optional - defaults to your Cloud configuration
//   },
// });

// export default function App() {
//   return <YourApp />; //make sure you have configured the <w3m-button> inside
// }
