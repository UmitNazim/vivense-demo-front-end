<template>
<div>
  <div class="row">
    <nuxt-link class="col-sm-4 " tag="div" to="/product">
      <div class="card module">
        <div class="card-body">
          <h5 class="card-title">Product Module</h5>
          <p class="card-text">For product module please click to here! .</p>
        </div>
      </div>
    </nuxt-link>

    <nuxt-link class="col-sm-4" tag="div" to="/second-module">
      <div class="card module">
        <div class="card-body">
          <h5 class="card-title">Module 2</h5>
          <p class="card-text">It will be okay as soon as possible.</p>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link class="col-sm-4" tag="div" to="/third-module">

      <div class="card module">
        <div class="card-body">
          <h5 class="card-title">Module 3</h5>
          <p class="card-text">It will be okay as soon as possible.</p>

        </div>
      </div>
    </nuxt-link>

  </div>

</div>
</template>
<style media="screen">
.row {
  margin: 25px;
  margin-top: 15%;
}

.module {
  transition: box-shadow .3s;

  border-radius: 10px;
  border: 1px solid #ccc;


}

.module:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, .2);
  cursor: pointer;
  background: #f7f7f7;
}
</style>
