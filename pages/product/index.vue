<template>
<div class="scrollit">
  <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Discounted Price</th>
        <th scope="col">Quantity Unit</th>
        <th scope="col">Options</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="items.length">
        <app-table-row v-for="(item,index) in items" :item="item" :count="index" :key="index" />
      </template>
      <template v-else-if="!items.length && !exisControl">
        <tr class="text-center">
          <td class="text-center" colspan="9">
            <div class="text-center" style="background-color:transparent">
              <div style="font-size:20px;">
                <div class="spinner-grow text-info"></div>
              </div>
            </div>
          </td>
        </tr>
      </template>
      <template v-else-if="!items.length && exisControl">
        <tr class="text-center">
          <td class="text-center" colspan="9">
            <div class="text-center" style="background-color:transparent">
              <div style="font-size:20px;">
                <div class="alert  alert-dark" style="margin:25px;" role="alert">
                  There is no product for now !
                </div>

              </div>
            </div>
          </td>
        </tr>
      </template>


    </tbody>
  </table>

</div>
</template>
<script type="text/javascript">
import tableRow from "@/components/product/productTable"
export default {
  head: {
    title: "Product List"
  },
  components: {
    "app-table-row": tableRow
  },
  data() {
    return {
      exisControl: false
    }
  },
  computed: {
    items: function() {
      return this.$store.getters.RETURN_GET_PRODUCT
    }
  },
  created() {
    this.$store.dispatch('getProduct')
      .then((res) => {
        this.exisControl = res ? true : false
      })
      .catch((err) => {

      })
  }
}
</script>
<style scoped>
th {
  text-align: center
}

.scrollit {

  margin: 25px;
}

tbody {
  display: block;
  height: 700px;
  overflow: auto;
}

thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

thead {}
</style>
