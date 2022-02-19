import { Data } from "@angular/router";

export interface GeoLocationInterface {
  calling_code: string,
  city: string,
  connection_type: string,
  continent_code: string,
  continent_name: string,
  country_capital: string,
  country_code2: string,
  country_code3: string,
  country_flag: string,
  country_name: string,
  country_tld: string,
  currency: CurrencyInterface,
  district: string
  geoname_id: string
  ip: string
  is_eu: boolean,
  isp: string,
  languages: string,
  latitude: string,
  longitude: string,
  organization: string,
  state_prov: string | undefined,
  time_zone: TimeZoneInterface,
}

export interface CurrencyInterface {
  code: string,
  name: string,
  symbol: string
}

export interface TimeZoneInterface {
  current_time: Data,
  current_time_unix: number,
  dst_savings: number,
  is_dst: boolean,
  name: string,
  offset: number
}