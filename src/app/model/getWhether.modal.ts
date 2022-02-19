export type ResponseWhether = {
  current: ResponseWhetherCurrentInterface,
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number
}

export interface ResponseWhetherCurrentInterface {
  clouds: number,
  dew_point: number,
  dt: number,
  feels_like: number,
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number,
  temp: number,
  uvi: number,
  visibility: number,
  weather: WhetherInterface,
  wind_deg: number,
  wind_gust: number,
  wind_speed: number,
}

export type WhetherInterface = {
  description: string,
  icon: string,
  id: number
  main: string,
}

// current:
// clouds: 75
// dew_point: -2.58
// dt: 1645179035
// feels_like: 2
// humidity: 52
// pressure: 1008
// sunrise: 1645161892
// sunset: 1645199143
// temp: 6.2
// uvi: 1.55
// visibility: 10000
// weather: Array(1)
// 0: {id: 803, main: 'Clouds', description: 'рвані хмари', icon: '04d'}
// length: 1
// [[Prototype]]: Array(0)
// wind_deg: 280
// wind_gust: 15.2
// wind_speed: 7.15
// [[Prototype]]: Object
// lat: 48.9436
// lon: 24.7002
// minutely: (61) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// timezone: "Europe/Kiev"
// timezone_offset: 7200