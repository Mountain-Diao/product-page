<template>
    <div>
        <h1>Product Insertion</h1>
    </div>
  <form @submit.prevent="callApi">
    <div>
        <label>Id* : </label>
        <input type="number" v-model="id" required maxLength positiveInteger/>
    </div>
    <div>
        <label>Code* : </label>
        <input type="text" v-model="code" required maxLength/>
    </div>
    <div>
        <label>Name* : </label>
        <input type="text" v-model="name" required maxLength/>
    </div>
    <div>
        <label>Category : </label>
        <input type="text" v-model="category" maxLength/>
    </div>
    <div>
        <label>Price* : </label>
        <input type="number" v-model="price" required positiveInteger/> 
    </div>
    <div>
        <label>Brand : </label>
        <input type="text" v-model="brand" maxLength/>
    </div>
    <div>
        <label>Origin : </label>
        <input type="text" v-model="origin" maxLength/>
    </div>
    <div>
        <label>Description : </label>
        <textarea v-model="description" cols="30" rows="10" maxLength></textarea>
    </div>
    <div>
        <label></label>
        <input type="submit" value="Submit">
    </div>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { maxLength, required } from '@vuelidate/validators'
import createHttpClient from "@/infrastructure/createHttpClient.js"

const javaApi = createHttpClient("http://localhost:8081")
const positiveInteger = (a) => {
    return a > 0
}


export default {
    name: "ProductInsert",
    setup: () => ({ v$: useVuelidate() }),
    components: {},
    props: {},
    data: function (){
        return{
            page: 3,
            size: 3,
            totalPages: 0,
            products: [],
            id: null,
            code: null,
            name: null,
            category: null,
            price: null,
            brand: null,
            origin: null,
            description: null,
            errors: [],

        }
    },
    validations: {
        id: {
            required,
            positiveInteger,
        },
        code: {
            required,
            maxLength: maxLength(20),
        },
        name: {
            required,
            maxLength: maxLength(50),
        },
        category: {
            maxLength: maxLength(100),
        },
        price: {
            required,
            positiveInteger,
        },
        brand: {
            maxLength: maxLength(50),
        },
        origin: {
            maxLength: maxLength(50),
        },
        description: {
            maxLength: maxLength(200),
        }
    },
    created(){
    },

    methods:{
        async callApi() {
            this.v$.$touch();
        
            if(this.v$.$invalid){
                console.log("wrong")
                return
            }


            let body = {
                product_brand: this.brand,
                product_category: this.category,
                product_code: this.code,
                product_description: this.description,
                product_name: this.name,
                product_origin: this.origin,
                product_price: this.price,
            }
            console.log(body)

            try{
                let findResult = await javaApi.get(`/product?id=` + this.id)

                if(findResult.data.productCode){
                    await javaApi.put('/products/update/body?product_id=' + this.id, body)
                }
                this.resetTextField()
                this.$router.push({name: "ProductListing"})
            } catch(ex){

            }

        },
        resetTextField(){
            this.id = null,
            this.code = null;
            this.name = null;
            this.category=  null;
            this.price = null;
            this.brand = null;
            this.origin = null;
            this.description = null;
        }
    },
    watch:{
        
    }

}
</script>

<style>
div {
        margin-bottom: 10px;
}

label {
    display: inline-block;
    width: 150px;
    text-align: right;
}

input[type = text] {
    display: inline-block;
    width: 200px;
    text-align: right;
}

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>