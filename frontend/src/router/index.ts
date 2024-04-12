import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Search from "../views/Search.vue"
import ConflictDetails from "../views/ConflictDetails.vue"
import NotFound from "../views/NotFound.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "HelloWorld",
			component: Home,
		},
		{
			path: "/search",
			name: "Search",
			component: Search,
		},
		{
			path: "/conflictdetails/:conflictid",
			name: "ConflictDetails",
			component: ConflictDetails,
		},
		{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
	],
})

export default router
