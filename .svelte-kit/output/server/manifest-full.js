export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"_app/immutable/start-f71f4cbe.js","imports":["_app/immutable/start-f71f4cbe.js","_app/immutable/chunks/index-85424911.js","_app/immutable/chunks/singletons-a9836f81.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
