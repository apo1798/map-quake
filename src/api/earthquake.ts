import { axiosInstance } from '@/src/settings/const';

export type EarthquakeData = {
  type: string;
  metadata: {
    count: string;
  };
  features: Array<{
    type: string;
    properties: {
      mag: number;
      place: string;
      time: number;
      updated: number;

      detail: string;

      title: string;
    };
    geometry: {
      type: 'Point';
      coordinates: [number, number, number];
    };
    id: string;
  }>;
  bbox: [number, number, number, number, number, number];
};

type SingleEarthquakeData = {
  type: string;
  properties: {
    mag: number;
    place: string;
    time: number;
    updated: number;
    url: string;
    felt: null;
    title: string;
    tsunami: number;
    alert: null | 'alert';
  };
  geometry: {
    type: string;
    coordinates: [number, number, number];
  };
  id: string;
};

type GetEarthquakeParam = {
  starttime: string;
  endtime: string;
  minmagnitude?: string;
  mindepth?: string;
  maxdepth?: string;
};

export const getEarthquake = async (params: GetEarthquakeParam) => {
  const url = '';
  const completeParams = {
    ...params,
    format: 'geojson',
  };

  const res = await axiosInstance({
    url,
    params: completeParams,
  });

  return res.data as EarthquakeData;
};

// https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000kdce&format=geojson
export const getEarthquakeById = async (params: { eventid: string }) => {
  const url = '';
  const completeParams = {
    ...params,
    format: 'geojson',
  };
  const res = await axiosInstance({
    url,
    params: completeParams,
  });

  return res.data as SingleEarthquakeData;
};
