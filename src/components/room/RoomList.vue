<template>
  <div v-if="rooms.length > 0">
    <b-table
      :items="rooms"
      :fields="fields"
      striped
      responsive="sm"
    >
      <template #cell(hotel_name)="data">
        <router-link :to="{ path: `/admin/dashboard/room/${data.item.Id}`}">
          {{ data.value }}
        </router-link>
      </template>
      <template #cell(action)="row">
        <b-button
          size="sm"
          class="mr-2"
          @click="row.toggleDetails"
        >
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
        <b-button
          size="sm"
          variant="danger"
          class="mr-2"
          @click="remove(row.item.Id)"
        >
          <!-- {{ row.item.Id }} -->
          Delete
        </b-button>
        <router-link
          class="btn btn-primary btn-sm"
          :to="{name:'AdminDashboardHotelItemEdit'}"
        >
          Edit
        </router-link>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col
              sm="3"
              class="text-sm-right"
            >
              <b>Id:</b>
            </b-col>
            <b-col>{{ row.item.Id }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col
              sm="3"
              class="text-sm-right"
            >
              <b>description:</b>
            </b-col>
            <b-col>{{ row.item.Description }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col
              sm="3"
              class="text-sm-right"
            >
              <b>House Number:</b>
            </b-col>
            <b-col>{{ row.item.HouseNumber }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col
              sm="3"
              class="text-sm-right"
            >
              <b>Location:</b>
            </b-col>
            <b-col>{ lat: {{ row.item.Latitude }}, lng: {{ row.item.Longitude }}} </b-col>
          </b-row>
          <!-- <b-row class="mb-2">
            <b-col
              sm="3"
              class="text-sm-right"
            >
              <b>Is Active:</b>
            </b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row> -->

          <b-button
            @click="row.toggleDetails"
          >
            Hide Details
          </b-button>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

  <script>
    export default {
        Name:'HotelList',
    data() {
    return {
      rooms:[],
    fields: ['Name', 'City', ,'StreetName','action'],

    }
    },
        mounted(){
          this.fetchData()
        },
    methods:{
      fetchData(){
        this.axios.get('room').then(res=>{
  console.log(res)
    this.rooms = res.data
})
      },
remove(id){
  console.log(id)
  this.axios.delete(`building/${id}`).then(e=>{
    this.fetchData()
  })
}
    }
    }
  </script>