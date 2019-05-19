import * as types from '../actions/actionsTypes';

const initialState = {
	isFetching: false,
	failure: false,
	result: [
		{
			"avatar": "https://avatars0.githubusercontent.com/u/15308811?s=40&v=4", 
			"desc": "Demonstrate all the questions on LeetCode in the form of animation.\uff08\u7528\u52a8\u753b\u7684\u5f62\u5f0f\u5448\u73b0\u89e3LeetCode\u9898\u76ee\u7684\u601d\u8def\uff09", 
			"link": "https://github.com/MisterBooo/LeetCodeAnimation", 
			"owner": "MisterBooo", 
			"repo": "LeetCodeAnimation", 
			"stars": "25,126"
		  }, 
		  {
			"avatar": "https://avatars1.githubusercontent.com/u/36260787?s=40&v=4", 
			"desc": "\ud83d\udcda \u6280\u672f\u9762\u8bd5\u5fc5\u5907\u57fa\u7840\u77e5\u8bc6\u3001Leetcode \u9898\u89e3\u3001\u540e\u7aef\u9762\u8bd5\u3001Java \u9762\u8bd5\u3001\u6625\u62db\u3001\u79cb\u62db\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u8ba1\u7b97\u673a\u7f51\u7edc\u3001\u7cfb\u7edf\u8bbe\u8ba1", 
			"link": "https://github.com/CyC2018/CS-Notes", 
			"owner": "CyC2018", 
			"repo": "CS-Notes", 
			"stars": "62,429"
		  }, 
		  {
			"avatar": "https://avatars0.githubusercontent.com/u/29880145?s=40&v=4", 
			"desc": "\u3010Java\u5b66\u4e60+\u9762\u8bd5\u6307\u5357\u3011 \u4e00\u4efd\u6db5\u76d6\u5927\u90e8\u5206Java\u7a0b\u5e8f\u5458\u6240\u9700\u8981\u638c\u63e1\u7684\u6838\u5fc3\u77e5\u8bc6\u3002", 
			"link": "https://github.com/Snailclimb/JavaGuide", 
			"owner": "Snailclimb", 
			"repo": "JavaGuide", 
			"stars": "40,120"
		  }, 
		  {
			"avatar": "https://avatars1.githubusercontent.com/u/15903809?s=40&v=4", 
			"desc": "mall\u9879\u76ee\u662f\u4e00\u5957\u7535\u5546\u7cfb\u7edf\uff0c\u5305\u62ec\u524d\u53f0\u5546\u57ce\u7cfb\u7edf\u53ca\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\uff0c\u57fa\u4e8eSpringBoot+MyBatis\u5b9e\u73b0\u3002 \u524d\u53f0\u5546\u57ce\u7cfb\u7edf\u5305\u542b\u9996\u9875\u95e8\u6237\u3001\u5546\u54c1\u63a8\u8350\u3001\u5546\u54c1\u641c\u7d22\u3001\u5546\u54c1\u5c55\u793a\u3001\u8d2d\u7269\u8f66\u3001\u8ba2\u5355\u6d41\u7a0b\u3001\u4f1a\u5458\u4e2d\u5fc3\u3001\u5ba2\u6237\u670d\u52a1\u3001\u5e2e\u52a9\u4e2d\u5fc3\u7b49\u6a21\u5757\u3002 \u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u5305\u542b\u5546\u54c1\u7ba1\u7406\u3001\u8ba2\u5355\u7ba1\u7406\u3001\u4f1a\u5458\u7ba1\u7406\u3001\u4fc3\u9500\u7ba1\u7406\u3001\u8fd0\u8425\u7ba1\u7406\u3001\u5185\u5bb9\u7ba1\u7406\u3001\u7edf\u8ba1\u62a5\u8868\u3001\u8d22\u52a1\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u3001\u8bbe\u7f6e\u7b49\u6a21\u5757\u3002", 
			"link": "https://github.com/macrozheng/mall", 
			"owner": "macrozheng", 
			"repo": "mall", 
			"stars": "12,806"
		  }, 
	],
	errorMessage: {}
};

export default function message(state = initialState, action) {
	switch (action.type) {
		case types.GITHUB_TRENDING.REQUEST:
			return {
				...state,
				isFetching: true,
				failure: false,
				errorMessage: {}
			};
		case types.GITHUB_TRENDING.SUCCESS:
			return {
				...state,
				isFetching: false
			};
		case types.GITHUB_TRENDING.FAILURE:
			return {
				...state,
				isFetching: false,
				failure: true,
				errorMessage: action.err
			};
		default:
			return state;
	}
}
