const routes = [
	{
		name: "index",
		path: "/",
		component: () => import("layouts/MainLayout.vue"),
		children: [{ path: "/", component: () => import("pages/IndexPage.vue") }],
	},
	{
		name: "agreementPage",
		path: "/agreement",
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{ path: "", component: () => import("pages/AgreementPage.vue") },
		],
	},
	{
		name: "done",
		path: "/done",
		component: () => import("layouts/MainLayout.vue"),
		children: [{ path: "", component: () => import("pages/DonePage.vue") }],
	},
	{
		name: "error404",
		path: "/:catchAll(.*)*",
		component: () => import("pages/ErrorNotFound.vue"),
	},
];

export default routes;
