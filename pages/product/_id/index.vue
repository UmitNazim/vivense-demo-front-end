<template>
<div  style="margin:25px">
  <div class="card">
    <h5 class="card-header">Product Details</h5>
    <div class="card-body" v-if="productControl">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="title">
        </div>
        <div class="form-group col-md-6">
          <label for="sku">Sku</label>
          <input type="text" class="form-control" id="sku" v-model="sku">
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" placeholder="" v-model="description">
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="" v-model="price">
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="discountedPrice">Discounted Price</label>
          <input type="text" class="form-control" id="discountedPrice" v-model="discountedPrice">
        </div>
        <div class="form-group col-md-4">
          <label for="quantityUnit">Quantity Unit</label>
          <input type="text" class="form-control" id="quantityUnit" v-model="quantityUnit">

        </div>


        <div class="form-group col-md-4">
          <label for="cretedDate">Created Date</label>
          <input type="text" class="form-control" id="cretedDate" v-model="cretedDate">
        </div>
      </div>

      <button type="submit" @click="updateProduct" class="btn btn-primary float-right">
        <span v-show="gif" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Update</button>
    </div>
    <div class="card-body text-center" v-else>
      <div class="spinner-grow text-info"></div>
    </div>
  </div>

</div>
</template>
<script type="text/javascript">
export default {
  head: {
    title: "Product Show"
  },
  data() {
    return {
      productControl: false,
      title: "",
      sku: "",
      description: "",
      price: "",
      discountedPrice: "",
      quantityUnit: "",
      cretedDate: "",
      id: "",
      gif: false
    }
  },
  methods: {
    updateProduct: function() {
      this.gif = true;
      this.$store.dispatch('updateProductById', {
          title: this.title || "",
          sku: this.sku || "",
          description: this.description || "",
          price: this.price || "",
          discountedPrice: this.discountedPrice || "",
          quantityUnit: this.quantityUnit || "",
          cretedDate: this.$moment(this.cretedDate).unix() || "",
          id: this.id,
        }).then(res => {
          this.gif = false;
          this.$router.push('/product')
        })
        .catch(err => {
          this.gif = false;
          console.log("this is res", err)

        })
    }
  },
  created() {
    this.$store.dispatch('getProductById', this.$route.params.id)
      .then(res => {
        this.title = res.title || "";
        this.sku = res.sku || "";
        this.description = res.description || "";
        this.price = res.price || "";
        this.discountedPrice = res.discountedPrice || "";
        this.quantityUnit = res.quantityUnit || "";
        this.tags = res.tags || "";
        this.cretedDate = this.$moment(res.cretedDate * 1000).format('YYYY-MM-DD') || "";
        this.id = res.id || "";
        this.productControl = true;
      })
      .catch(err => {})
  },

}
</script>
<style media="screen">

</style>
