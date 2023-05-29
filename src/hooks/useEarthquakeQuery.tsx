import { getEarthquake } from '@/src/api/earthquake';
import { settingAtom } from '@/src/atom';
import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

const useEarthquakeQuery = () => {
  const settings = useAtomValue(settingAtom);
  const {
    startAt: starttime,
    endAt: endtime,
    magnitude: minmagnitude,
    minDepth: mindepth,
    maxDepth: maxdepth,
  } = settings;
  const params = { starttime, endtime, minmagnitude, mindepth, maxdepth };

  const earthquakeQuery = useQuery({
    queryKey: ['earthquake', params],
    queryFn: async () => getEarthquake(params),
    staleTime: Infinity,
  });
  return earthquakeQuery;
};
export default useEarthquakeQuery;
