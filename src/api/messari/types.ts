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

interface AssetMetricResponse {
  status: {
    timestamp: string;
    elapsed: number;
  };
  data: {
    id: string;
    symbol: string;
    name: string;
    slug: string;
    market_data: {
      price_usd: number;
      price_btc: number;
      volume_last_24_hours: number;
      real_volume_last_24_hours: number;
      volume_last_24_hours_overstatement_multiple: number;
      percent_change_usd_last_24_hours: number;
      percent_change_btc_last_24_hours: number;
      ohlcv_last_1_hour: {
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
      };
      ohlcv_last_24_hour: {
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
      };
    };
    supply: {
      y_2050: number;
      y_2050_percent_issued: number;
      supply_yplus_10: number;
      y_plus10_issued_percent: number;
      liquid: number;
      circulating: number;
      stock_to_flow: number;
    };
    blockchain_stats_24_hours: {
      transaction_volume: number;
      nvt: number;
      sum_of_fees: number;
      median_tx_value: number;
      median_tx_fee: number;
      count_of_active_addresses: number;
      count_of_tx: number;
      count_of_payments: number;
      new_issuance: number;
      average_difficulty: number;
      kilobytes_added: number;
      count_of_blocks_added: number;
      supply_moved_off_chain: null | number;
    };
    all_time_high: {
      price: number;
      at: string;
      days_since: number;
      percent_down: number;
    };
    developer_activity: {
      stars: number;
      watchers: number;
      commits_last_3_months: number;
      commits_last_1_year: number;
      lines_added_last_3_months: number;
      lines_added_last_1_year: number;
      lines_deleted_last_3_months: number;
      lines_deleted_last_1_year: number;
    };
    roi_data: {
      percent_change_last_1_week: number;
      percent_change_last_1_month: number;
      percent_change_last_3_months: number;
      percent_change_last_1_year: number;
    };
    misc_data: {
      asset_age_days: number;
      vladimir_club_cost: number;
      categories: Array<Array<string>>;
      sector: Array<Array<string>>;
    };
  };
}

export type {
  AssetProfileResponse,
  AssetMetricResponse,
  AssetProfileDataResponse,
};
