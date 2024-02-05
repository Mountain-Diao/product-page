<template>
    <div>
        <h1>Product Listing</h1>
    </div>
    <table class="center">
        <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Origin</th>
            <th class="descriptionColumn">Description</th>
        </tr>
        <tr v-for="product in products" :key="product.productId">
            <td>{{ product.productId }}</td>
            <td>{{ product.productCode }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.productPrice }}</td>
            <td>{{ product.productCategory }}</td>
            <td>{{ product.productBrand }}</td>
            <td>{{ product.productOrigin }}</td>
            <td>{{ product.productDescription }}</td>
        </tr>
    </table>
    <div class="buttonContainer">
        <button @click="firstPage">First</button>
        <button @click="previousPage">Previous</button>
        <button @click="nextPage">Next</button>
        <button @click="lastPage">Last</button>
    </div>
</template>

<script>
import createHttpClient from "@/infrastructure/createHttpClient.js";
const javaApi = createHttpClient("http://localhost:8081")


export default {
    name: "ProductListing",
    components: {},
    props: {},
    data: function (){
        return{
            page: 1,
            size: 10,
            totalPages: 0,
            products: [],

        }
    },
    created(){
        this.callApi()
    },

    methods:{
        async callApi() {
            try{
                let result = await javaApi.get(`/products/page?page=${this.page}&size=${this.size}`)
                let a = JSON.stringify(result)
                let b = JSON.stringify(result.data.content[0])

                this.products = result.data.content
                this.totalPages = result.data.totalPages
            } catch(ex) {

            }
        },

        firstPage(){
            this.page = 1
        },

        previousPage(){
            if(this.page != 1){
                this.page -= 1
            }
        },

        nextPage(){
            if(this.page != this.totalPages){
                this.page += 1
            }
        },

        lastPage(){
            this.page = this.totalPages
        }
    },
    watch:{
        page(){
            this.callApi()
        }
    }

}
</script>

<style scoped lang="scss">
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
table{
    table-layout: fixed;
    width: 70%;
}
.descriptionColumn{
    width: 500px;
}
th, td {
    padding: 15px;
}
.center {
    margin-left: auto; 
    margin-right: auto;
}
button{
    padding: 0px 10px;
    transition-duration: 0.4s;
    background-color: white;
    color: var(--button-on-hover);
    border: 1px solid black;
}

button:hover{
    background-color: var(--button-on-hover);
    color: white;
}

.buttonContainer{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>