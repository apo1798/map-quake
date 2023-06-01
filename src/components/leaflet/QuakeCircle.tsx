import useEarthquakeQuery from '@/src/hooks/useEarthquakeQuery';
import { useRouter } from 'next/navigation';
import { CircleMarker, Pane, Tooltip } from 'react-leaflet';

const QuakeCircle = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useEarthquakeQuery();

  if (isLoading || isError) return null;

  const { features } = data;

  return (
    <>
      {features.map((item) => {
        const {
          geometry: {
            coordinates: [lng, lat, depth],
          },
          id,
        } = item;
        const { mag, place, time } = item.properties;

        const markerStyle = getEarthquakeCircleStyle(mag);

        return (
          <CircleMarker
            center={{ lat, lng }}
            key={id}
            pathOptions={{ fillColor: markerStyle.color }}
            radius={markerStyle.radius}
            color={markerStyle.color}
            fillOpacity={markerStyle.opacity}
            weight={markerStyle.weight}
            eventHandlers={{
              click: () => {
                router.push(`/quake/${id}`);
              },
            }}
          >
            <Tooltip sticky={true} interactive={true}>
              <ul className='flex flex-col'>
                <li>
                  深度：{depth}公里／震度：{mag}級
                </li>
                <li>地點：{place || '未知'}</li>
                <li>座標：{`${lat}, ${lng}`}</li>
                <li>時間：{new Date(time).toLocaleString()}</li>
              </ul>
              <p className='text-end text-amber-600'>點擊圓圈查看詳細資料</p>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </>
  );
};
export default QuakeCircle;

const getEarthquakeCircleStyle = (
  mag: number
): { color: string; radius: number; opacity: number; weight: number } => {
  const defaultMarker = {
    color: '#559455',
    radius: 4,
    opacity: 0.35,
    weight: 1.4,
  };
  let marker = { ...defaultMarker };

  switch (true) {
    case mag < 4:
      marker = { ...defaultMarker };
      break;
    case mag < 5:
      marker = {
        color: '#158e15',
        radius: 6,
        opacity: 0.35,
        weight: 1.4,
      };
      break;
    case mag < 6:
      marker = {
        color: '#ffcc00',
        radius: 7,
        opacity: 0.45,
        weight: 1.8,
      };
      break;
    case mag < 7:
      marker = {
        color: '#ff9900',
        radius: 15,
        opacity: 0.6,
        weight: 3,
      };
      break;
    case mag < Infinity:
      marker = {
        color: '#ff0000',
        radius: 20,
        opacity: 0.7,
        weight: 4,
      };
      break;
  }
  return marker;
};
