import { axiosInstance } from '@/src/settings/const';

type EarthquakeData = {
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
      alert: null | unknown;
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
