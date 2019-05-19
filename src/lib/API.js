import axios from 'axios';

const BASEURL = 'http://anly.leanapp.cn/api/github/trending/java?since=weekly';

export async function fetchTrendingList() {
	try {
		return await axios.get(BASEURL);
	} catch (err) {
		return err;
	}
}
