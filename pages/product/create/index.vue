<template>
<div  style="margin:25px">
  <div class="card">
    <h5 class="card-header">Product Details</h5>
    <div class="card-body">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="title" placeholder="example Product">
        </div>
        <div class="form-group col-md-6">
          <label for="sku">Sku</label>
          <input type="text" class="form-control" id="sku" v-model="sku" placeholder="example sku">
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" placeholder="example description" v-model="description">
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="example 0000" v-model="price">
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="discountedPrice">Discounted Price</label>
          <input type="text" class="form-control" id="discountedPrice" placeholder="example 0000" v-model="discountedPrice">
        </div>
        <div class="form-group col-md-4">
          <label for="quantityUnit">Quantity Unit</label>
          <input type="text" class="form-control" id="quantityUnit" placeholder="example 000" v-model="quantityUnit">

        </div>


        <div class="form-group col-md-4">
          <label for="cretedDate">Created Date</label>
          <input type="text" class="form-control" id="cretedDate" v-model="cretedDate" placeholder="example 2020-10-12">
        </div>
      </div>

      <button @click="createProduct" class="btn btn-primary float-right">
        <span v-show="gif" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Create</button>
    </div>

  </div>

</div>
</template>
<script type="text/javascript">
export default {
  head: {
    title: "Product Create"
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
    createProduct: function() {
      this.gif = true;
      this.$store.dispatch('createProductById', {
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


}
</script>
<style media="screen">

</style>
