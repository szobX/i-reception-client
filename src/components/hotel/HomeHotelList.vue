<template>
  <div
    v-if="hotels.length > 0"
    class="row"
  >
    <div
      v-for="hotel in hotels"
      :key="hotel.id"
      class="col-6 col-md-4"
    >
      <b-card
        
        :img-src="hotel.Image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <template #header>
          <h6 class="text-bold text-gray-700">
            {{ hotel.Name }}
          </h6>
        </template>
        <b-card-text>
          {{ hotel.City }}, {{ hotel.ZipCode }}<br>
          {{ hotel.StreetName }}{{ hotel.HouseNumber }} <br>
          <b-icon icon="map" /> {{ hotel.Latitude }}, {{ hotel.Longitude }}
        </b-card-text>

        <router-link
          class="btn btn-primary"
          :to="{name:'Hotel',params:{id:hotel.Id}}"
        >
          Look rooms
        </router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
props:{
    hotels:{
        type:Array,
        default:()=>[]
    }
}
}
</script>

<style>

</style>