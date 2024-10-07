type FetcherArgs = [input: RequestInfo, init?: RequestInit];

export const fetcher = (...args: FetcherArgs): Promise<any> =>
	fetch(...args).then((res) => res.json());
