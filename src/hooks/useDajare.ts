import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { APIParams, APIResponses, fetchDajareAPI } from '../lib/api/dajare';

export const useDajare = <Path extends keyof APIParams | keyof APIResponses>(
  path: Path,
  params: APIParams[Path],
  options?: UseQueryOptions<APIResponses[Path], Error>
): UseQueryResult<APIResponses[Path], Error> =>
  useQuery<APIResponses[Path], Error>(
    ['dajare', path, params],
    () => fetchDajareAPI(path, params),
    options
  );
