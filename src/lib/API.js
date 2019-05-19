import axios from 'axios';

const BASEURL = '/api/fetchTrendingList';

export async function fetchTrendingList() {
	try {
		const { data } = await axios.get(BASEURL)
		return data;
	} catch (err) {
		return err;
	}
}
