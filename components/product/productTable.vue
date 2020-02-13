<template>
<tr>
  <td>{{count+1 || ""}}</td>
  <td>{{item.title || ""}}</td>
  <td>{{item.price || ""}}</td>
  <td>{{item.discountedPrice || ""}}</td>
  <td>{{item.quantityUnit || ""}}</td>
  <td><button class="btn btn-danger" @click="openDeleteModal">Delete</button> <button @click="showIt" class="btn btn-success">Show</button></td>

  <b-modal v-model="deleteModalShow" id="modal-lg" size="lg" :hide-footer="true" :title="item.title">
    <p>{{item.title}}' product will be deleted.Are you sure for it ?</p>
    <div class="text-right mt-4">
      <b-button class="mr-2 btn btn-dark" @click="closeProductmodal">Close</b-button>
      <b-button class="btn btn-info" @click="deleteProduct">
        <span v-show="gif" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Delete</b-button>
    </div>
  </b-modal>
</tr>
</template>
<script type="text/javascript">
export default {
  props: ['item', 'count'],
  data() {
    return {
      deleteModalShow: false,
      gif: false
    }
  },
  methods: {
    deleteProduct: function() {
      this.gif = true
      this.$store.dispatch('deleteProduct', this.item.id)
        .then((res) => {

          this.$store.dispatch('getProduct')
            .then(res => {
              this.gif = false
              this.deleteModalShow = false;
            })
            .catch(err => {

            })

        })
        .catch((err) => {
          console.log("this is error", err)

        })
    },
    closeProductmodal: function() {
      this.deleteModalShow = false;

    },
    openDeleteModal: function() {
      this.deleteModalShow = true
    },
    showIt: function() {
      this.$router.push('/product/' + this.item.id)
    }

  }


}
</script>
<style media="screen">
td {
  text-align: center
}

</style>
