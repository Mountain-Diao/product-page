import { createRouter, createWebHistory } from 'vue-router'

import ProductListing from '../features/Product/ProductListing.vue'
import ProductInsert from '../features/Product/ProductInsert.vue'
import ProductUpdate from '../features/Product/ProductUpdate.vue'

const routes = [
    {
        path : "/insert",
        name: "ProductInsert",
        component : ProductInsert
    },
    {
        path : "/listing",
        name: "ProductListing",
        component : ProductListing
    },
    {
        path : "/update",
        name: "ProductUpdate",
        component : ProductUpdate
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router;