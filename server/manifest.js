const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/.DS_Store","assets/fonts/.DS_Store","assets/fonts/Barlow/Barlow-Black.ttf","assets/fonts/Barlow/Barlow-BlackItalic.ttf","assets/fonts/Barlow/Barlow-Bold.ttf","assets/fonts/Barlow/Barlow-BoldItalic.ttf","assets/fonts/Barlow/Barlow-ExtraBold.ttf","assets/fonts/Barlow/Barlow-ExtraBoldItalic.ttf","assets/fonts/Barlow/Barlow-ExtraLight.ttf","assets/fonts/Barlow/Barlow-ExtraLightItalic.ttf","assets/fonts/Barlow/Barlow-Italic.ttf","assets/fonts/Barlow/Barlow-Light.ttf","assets/fonts/Barlow/Barlow-LightItalic.ttf","assets/fonts/Barlow/Barlow-Medium.ttf","assets/fonts/Barlow/Barlow-MediumItalic.ttf","assets/fonts/Barlow/Barlow-Regular.ttf","assets/fonts/Barlow/Barlow-SemiBold.ttf","assets/fonts/Barlow/Barlow-SemiBoldItalic.ttf","assets/fonts/Barlow/Barlow-Thin.ttf","assets/fonts/Barlow/Barlow-ThinItalic.ttf","assets/fonts/Barlow/OFL.txt","assets/fonts/Determination/DTM-Mono.otf","assets/fonts/Fira_Mono/FiraMono-Bold.ttf","assets/fonts/Fira_Mono/FiraMono-Medium.ttf","assets/fonts/Fira_Mono/FiraMono-Regular.ttf","assets/fonts/Fira_Mono/OFL.txt","assets/fonts/Fira_Sans/FiraSans-Black.ttf","assets/fonts/Fira_Sans/FiraSans-BlackItalic.ttf","assets/fonts/Fira_Sans/FiraSans-Bold.ttf","assets/fonts/Fira_Sans/FiraSans-BoldItalic.ttf","assets/fonts/Fira_Sans/FiraSans-ExtraBold.ttf","assets/fonts/Fira_Sans/FiraSans-ExtraBoldItalic.ttf","assets/fonts/Fira_Sans/FiraSans-ExtraLight.ttf","assets/fonts/Fira_Sans/FiraSans-ExtraLightItalic.ttf","assets/fonts/Fira_Sans/FiraSans-Italic.ttf","assets/fonts/Fira_Sans/FiraSans-Light.ttf","assets/fonts/Fira_Sans/FiraSans-LightItalic.ttf","assets/fonts/Fira_Sans/FiraSans-Medium.ttf","assets/fonts/Fira_Sans/FiraSans-MediumItalic.ttf","assets/fonts/Fira_Sans/FiraSans-Regular.ttf","assets/fonts/Fira_Sans/FiraSans-SemiBold.ttf","assets/fonts/Fira_Sans/FiraSans-SemiBoldItalic.ttf","assets/fonts/Fira_Sans/FiraSans-Thin.ttf","assets/fonts/Fira_Sans/FiraSans-ThinItalic.ttf","assets/fonts/Fira_Sans/OFL.txt","assets/fonts/Inter/Inter-Italic-VariableFont.ttf","assets/fonts/Inter/Inter-VariableFont.ttf","assets/fonts/Inter/OFL.txt","assets/fonts/Inter/README.txt","assets/fonts/Inter/static/Inter_18pt-Black.ttf","assets/fonts/Inter/static/Inter_18pt-BlackItalic.ttf","assets/fonts/Inter/static/Inter_18pt-Bold.ttf","assets/fonts/Inter/static/Inter_18pt-BoldItalic.ttf","assets/fonts/Inter/static/Inter_18pt-ExtraBold.ttf","assets/fonts/Inter/static/Inter_18pt-ExtraBoldItalic.ttf","assets/fonts/Inter/static/Inter_18pt-ExtraLight.ttf","assets/fonts/Inter/static/Inter_18pt-ExtraLightItalic.ttf","assets/fonts/Inter/static/Inter_18pt-Italic.ttf","assets/fonts/Inter/static/Inter_18pt-Light.ttf","assets/fonts/Inter/static/Inter_18pt-LightItalic.ttf","assets/fonts/Inter/static/Inter_18pt-Medium.ttf","assets/fonts/Inter/static/Inter_18pt-MediumItalic.ttf","assets/fonts/Inter/static/Inter_18pt-Regular.ttf","assets/fonts/Inter/static/Inter_18pt-SemiBold.ttf","assets/fonts/Inter/static/Inter_18pt-SemiBoldItalic.ttf","assets/fonts/Inter/static/Inter_18pt-Thin.ttf","assets/fonts/Inter/static/Inter_18pt-ThinItalic.ttf","assets/fonts/Inter/static/Inter_24pt-Black.ttf","assets/fonts/Inter/static/Inter_24pt-BlackItalic.ttf","assets/fonts/Inter/static/Inter_24pt-Bold.ttf","assets/fonts/Inter/static/Inter_24pt-BoldItalic.ttf","assets/fonts/Inter/static/Inter_24pt-ExtraBold.ttf","assets/fonts/Inter/static/Inter_24pt-ExtraBoldItalic.ttf","assets/fonts/Inter/static/Inter_24pt-ExtraLight.ttf","assets/fonts/Inter/static/Inter_24pt-ExtraLightItalic.ttf","assets/fonts/Inter/static/Inter_24pt-Italic.ttf","assets/fonts/Inter/static/Inter_24pt-Light.ttf","assets/fonts/Inter/static/Inter_24pt-LightItalic.ttf","assets/fonts/Inter/static/Inter_24pt-Medium.ttf","assets/fonts/Inter/static/Inter_24pt-MediumItalic.ttf","assets/fonts/Inter/static/Inter_24pt-Regular.ttf","assets/fonts/Inter/static/Inter_24pt-SemiBold.ttf","assets/fonts/Inter/static/Inter_24pt-SemiBoldItalic.ttf","assets/fonts/Inter/static/Inter_24pt-Thin.ttf","assets/fonts/Inter/static/Inter_24pt-ThinItalic.ttf","assets/fonts/Inter/static/Inter_28pt-Black.ttf","assets/fonts/Inter/static/Inter_28pt-BlackItalic.ttf","assets/fonts/Inter/static/Inter_28pt-Bold.ttf","assets/fonts/Inter/static/Inter_28pt-BoldItalic.ttf","assets/fonts/Inter/static/Inter_28pt-ExtraBold.ttf","assets/fonts/Inter/static/Inter_28pt-ExtraBoldItalic.ttf","assets/fonts/Inter/static/Inter_28pt-ExtraLight.ttf","assets/fonts/Inter/static/Inter_28pt-ExtraLightItalic.ttf","assets/fonts/Inter/static/Inter_28pt-Italic.ttf","assets/fonts/Inter/static/Inter_28pt-Light.ttf","assets/fonts/Inter/static/Inter_28pt-LightItalic.ttf","assets/fonts/Inter/static/Inter_28pt-Medium.ttf","assets/fonts/Inter/static/Inter_28pt-MediumItalic.ttf","assets/fonts/Inter/static/Inter_28pt-Regular.ttf","assets/fonts/Inter/static/Inter_28pt-SemiBold.ttf","assets/fonts/Inter/static/Inter_28pt-SemiBoldItalic.ttf","assets/fonts/Inter/static/Inter_28pt-Thin.ttf","assets/fonts/Inter/static/Inter_28pt-ThinItalic.ttf","assets/fonts/Jacquarda_Bastarda/JacquardaBastarda9-Regular.ttf","assets/fonts/Jacquarda_Bastarda/OFL.txt","assets/fonts/Pixel_Operator/LICENSE.txt","assets/fonts/Pixel_Operator/PixelOperator-Bold.ttf","assets/fonts/Pixel_Operator/PixelOperator.ttf","assets/fonts/Pixel_Operator/PixelOperator8-Bold.ttf","assets/fonts/Pixel_Operator/PixelOperator8.ttf","assets/fonts/Pixel_Operator/PixelOperatorHB.ttf","assets/fonts/Pixel_Operator/PixelOperatorHB8.ttf","assets/fonts/Pixel_Operator/PixelOperatorHBSC.ttf","assets/fonts/Pixel_Operator/PixelOperatorMono-Bold.ttf","assets/fonts/Pixel_Operator/PixelOperatorMono.ttf","assets/fonts/Pixel_Operator/PixelOperatorMono8-Bold.ttf","assets/fonts/Pixel_Operator/PixelOperatorMono8.ttf","assets/fonts/Pixel_Operator/PixelOperatorMonoHB.ttf","assets/fonts/Pixel_Operator/PixelOperatorMonoHB8.ttf","assets/fonts/Pixel_Operator/PixelOperatorSC-Bold.ttf","assets/fonts/Pixel_Operator/PixelOperatorSC.ttf","assets/fonts/Roboto/LICENSE.txt","assets/fonts/Roboto/Roboto-Black.ttf","assets/fonts/Roboto/Roboto-BlackItalic.ttf","assets/fonts/Roboto/Roboto-Bold.ttf","assets/fonts/Roboto/Roboto-BoldItalic.ttf","assets/fonts/Roboto/Roboto-Italic.ttf","assets/fonts/Roboto/Roboto-Light.ttf","assets/fonts/Roboto/Roboto-LightItalic.ttf","assets/fonts/Roboto/Roboto-Medium.ttf","assets/fonts/Roboto/Roboto-MediumItalic.ttf","assets/fonts/Roboto/Roboto-Regular.ttf","assets/fonts/Roboto/Roboto-Thin.ttf","assets/fonts/Roboto/Roboto-ThinItalic.ttf","assets/fonts/Titillium_Web/OFL.txt","assets/fonts/Titillium_Web/TitilliumWeb-Black.ttf","assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf","assets/fonts/Titillium_Web/TitilliumWeb-BoldItalic.ttf","assets/fonts/Titillium_Web/TitilliumWeb-ExtraLight.ttf","assets/fonts/Titillium_Web/TitilliumWeb-ExtraLightItalic.ttf","assets/fonts/Titillium_Web/TitilliumWeb-Italic.ttf","assets/fonts/Titillium_Web/TitilliumWeb-Light.ttf","assets/fonts/Titillium_Web/TitilliumWeb-LightItalic.ttf","assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf","assets/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf","assets/fonts/Titillium_Web/TitilliumWeb-SemiBoldItalic.ttf","assets/images/moon.jpeg","assets/images/paper1.png","assets/images/paper2.png","assets/images/paper3.jpg","assets/images/pixel_square.png","favicon.png","style/app.css","style/article.css","style/fonts.css","style/palettes/palette1.css","style/palettes/palette2.css"]),
	mimeTypes: {".ttf":"font/ttf",".txt":"text/plain",".otf":"font/otf",".jpeg":"image/jpeg",".png":"image/png",".jpg":"image/jpeg",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.opyDIiNy.js","app":"_app/immutable/entry/app.fr7AXlNN.js","imports":["_app/immutable/entry/start.opyDIiNy.js","_app/immutable/chunks/entry.B2_hIZoj.js","_app/immutable/chunks/runtime.CAjMPBEc.js","_app/immutable/chunks/index.SS9BjN1m.js","_app/immutable/entry/app.fr7AXlNN.js","_app/immutable/chunks/runtime.CAjMPBEc.js","_app/immutable/chunks/render.D1GOEGmZ.js","_app/immutable/chunks/store.BGs2MOXK.js","_app/immutable/chunks/disclose-version.usyZipR7.js","_app/immutable/chunks/props.BKOAXUBM.js","_app/immutable/chunks/index-client.RACJqDMW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BYkxb7Cf.js')),
			__memo(() => import('./chunks/1-8gra5XI9.js')),
			__memo(() => import('./chunks/2-CN5zB_RF.js')),
			__memo(() => import('./chunks/3-DbkJZjc8.js')),
			__memo(() => import('./chunks/4-vCNPoTqG.js')),
			__memo(() => import('./chunks/5-CoCYLMy0.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/articles/first-post",
				pattern: /^\/articles\/first-post\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/articles/predator",
				pattern: /^\/articles\/predator\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
