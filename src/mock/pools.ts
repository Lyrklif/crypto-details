export default [
  {
    id: "c1dfd96eea8cc2b62785275bca38ac261256e278",
    name: "2Miners",
    url: "2miners",
    website: "https://2miners.com",
    type: "pool",
    founded: 2017,
    description:
      "2Miners is a mining pool for popular coins: ETH, RVN, ETC, XMR, ERGO, FIRO, CKB, and others. Servers are located in EU, US and ASIA. Solo mode is available for all the coins. Pool fee - 1%, Solo fee - 1.5%. No fee ETH pool payouts are available in BTC and NANO.",
    coins: {
      BNB: {
        algorithm: "Ethash",
        payoutThreshold: "0.005 ETH",
        rewardMethod: "SOLO",
        fee: "1.5%",
        anonymous: true,
        registration: false,
      },
    },
  },
];
