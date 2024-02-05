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
        path : "",
        name: "ProductListing",
        component : ProductListing
    },
    {
        path : "/update/:product_id",
        name: "ProductUpdate",
        component : ProductUpdate,
        props: true
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router;