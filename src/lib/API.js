import axios from 'axios';

const BASEURL = '/api/fetchTrendingList';

export async function fetchTrendingList() {
	try {
		return await axios.get(BASEURL);
	} catch (err) {
		return err;
	}
}
