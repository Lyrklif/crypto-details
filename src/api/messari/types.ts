interface People {
  first_name: string;
  last_name: null | string;
  description: null | string;
  github: null | string;
  linkedin: null | string;
  medium: null | string;
  twitter: null | string;
}

interface AssetProfileDataResponse {
  id: string;
  serial_id: number;
  symbol: string;
  name: string;
  slug: string;
  _internal_temp_agora_id: string;
  tagline: string;
  is_verified: boolean;
  overview: string;
  background: string;
  technology: string;
  category: string;
  sector: string;
  tag: string;
  contract_addresses: null | string;
  sfarScore: null | string;
  token_distribution: {
    description: string;
    sale_start: string;
    sale_end: string;
    initial_distribution: number;
    current_supply: number | null;
    max_supply: number | null;
  };
  token_details: {
    usage: string;
    type: string;
    sales_rounds: Array<{
      roundName: string;
      startDate: string;
      endDate: string;
      pricePerUnit: null | number;
      unit: string;
      amountCollected: number;
      restriction: null | number;
    }>;
    block_reward: null;
    targeted_block_time_in_sec: number;
    on_chain_governance_structure: string;
    is_treasury_decentralized: boolean;
    launch_style: string;
    initial_supply: number;
    percentage_allocated_to_investors_from_initial_supply: number;
    percentage_allocated_to_premined_or_airdrops_from_initial_supply: number;
    percentage_allocated_to_organizations_or_founders_supply: number;
    mining_algorithm: string;
    next_halving_date: null | number;
    genesis_block_date: string;
    is_victim_of_51_percent_attack: boolean;
    emission_type_general: string;
    emission_type_precise: string;
    is_capped_supply: boolean;
    max_supply: number | null;
  };
  organizations: Array<{
    name: string;
    founded_date: null | string;
    governance: null | string;
    legal_structure: null | string;
    jurisdiction: null | string;
    org_charter: null | string;
    description: null | string;
    people_count_estimate: null | string;
  }>;
  people: {
    founding_team: null | Array<People>;
    contributors: null | Array<People>;
    investors: null | Array<People>;
    advisors: null | Array<People>;
  };
  relevant_resources: Array<{
    name: string;
    url: string;
  }>;
  consensus_algorithm: string;
}

interface AssetProfileResponse {
  status: {
    timestamp: string;
    elapsed: number;
  };
  data: AssetProfileDataResponse;
}

interface AssetMetricDataResponse {
  risk_metrics: {
    sharpe_ratios: {
      last_30_days: number | null;
      last_90_days: number | null;
      last_1_year: number | null;
      last_3_years: number | null;
    };
    volatility_stats: {
      volatility_last_30_days: number | null;
      volatility_last_90_days: number | null;
      volatility_last_1_year: number | null;
      volatility_last_3_years: number | null;
    };
  };
  roi_by_year: {
    "2021_usd_percent": number | null;
    "2020_usd_percent": number | null;
    "2019_usd_percent": number | null;
    "2018_usd_percent": number | null;
    "2017_usd_percent": number | null;
    "2016_usd_percent": number | null;
    "2015_usd_percent": number | null;
    "2014_usd_percent": number | null;
    "2013_usd_percent": number | null;
    "2012_usd_percent": number | null;
    "2011_usd_percent": number | null;
  };
  supply: {
    y_2050: number | null;
    y_plus10: number | null;
    liquid: number | null;
    circulating: number | null;
    y_2050_issued_percent: number | null;
    annual_inflation_percent: number | null;
    stock_to_flow: number | null;
    y_plus10_issued_percent: number | null;
    supply_revived_90d: number | null;
  };
  supply_activity: {
    supply_active_10y: number | null;
    supply_active_180d: number | null;
    supply_active_1d: number | null;
    supply_active_1y: number | null;
    supply_active_1y_percent: number | null;
    supply_active_2y: number | null;
    supply_active_30d: number | null;
    supply_active_3y: number | null;
    supply_active_4y: number | null;
    supply_active_5y: number | null;
    supply_active_7d: number | null;
    supply_active_90d: number | null;
    supply_active_ever: number | null;
    outstanding: number | null;
    supply_revived_1y: number | null;
    supply_revived_2y: number | null;
    supply_revived_30d: number | null;
    supply_revived_3y: number | null;
    supply_revived_4y: number | null;
    supply_revived_5y: number | null;
    supply_revived_7d: number | null;
    supply_revived_90d: number | null;
  };
  supply_distribution: {
    supply_in_addresses_balance_greater_0_001_native_units: number | null;
    supply_in_addresses_balance_greater_0_01_native_units: number | null;
    supply_in_addresses_balance_greater_0_1_native_units: number | null;
    supply_in_addresses_balance_greater_1_usd: number | null;
    supply_in_addresses_balance_greater_10_usd: number | null;
    supply_in_addresses_balance_greater_100_usd: number | null;
    supply_in_addresses_balance_greater_100k_usd: number | null;
    supply_in_addresses_balance_greater_100k_native_units: number | null;
    supply_in_addresses_balance_greater_100_native_units: number | null;
    supply_in_addresses_balance_greater_10k_usd: number | null;
    supply_in_addresses_balance_greater_10k_native_units: number | null;
    supply_in_addresses_balance_greater_10m_usd: number | null;
    supply_in_addresses_balance_greater_10_native_units: number | null;
    supply_in_addresses_balance_greater_1k_usd: number | null;
    supply_in_addresses_balance_greater_1k_native_units: number | null;
    supply_in_addresses_balance_greater_1m_usd: number | null;
    supply_in_addresses_balance_greater_1m_native_units: number | null;
    supply_in_addresses_balance_greater_1_native_units: number | null;
    supply_in_contracts_usd: number | null;
    supply_in_contracts_native_units: number | null;
    supply_shielded: number | null;
    supply_in_top_100_addresses: number | null;
    supply_in_top_10_percent_addresses: number | null;
    supply_in_top_1_percent_addresses: number | null;
    supply_in_utxo_in_loss: number | null;
    supply_in_utxo_in_profit: number | null;
  };
}

interface AssetMetricResponse {
  status: {
    timestamp: string;
    elapsed: number;
  };
  data: AssetMetricDataResponse;
}

interface AssetNewsItem {
  id: string;
  title: string;
  content: string;
  references: Array<{
    name: string;
    url: string;
  }>;
  previewImage: string;
  pdfUrl: string | null;
  published_at: string;
  author: {
    name: string;
  };
  tags: Array<string>;
  url: string;
}

interface AssetNewsResponse {
  status: {
    elapsed: number;
    timestamp: string;
  };
  data: Array<AssetNewsItem>;
}

export type {
  AssetProfileResponse,
  AssetMetricResponse,
  AssetProfileDataResponse,
  AssetMetricDataResponse,
  AssetNewsResponse,
  AssetNewsItem,
};
