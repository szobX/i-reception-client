<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      striped
      responsive="sm"
    >
      <template #cell(hotel_name)="data">
        <router-link :to="{ path: `/admin/dashboard/hotel/${data.item.hotelId}`}">
          {{ data.value }}
        </router-link>
      </template>
      <template #cell(show_details)="row">
        <b-button
          size="sm"
          class="mr-2"
          @click="row.toggleDetails"
        >
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col
              sm="3"
              class="text-sm-right"
            >
              <b>Age:</b>
            </b-col>
            <b-col>{{ row.item.age }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col
              sm="3"
              class="text-sm-right"
            >
              <b>Is Active:</b>
            </b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row>

          <b-button
            size="sm"
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
    fields: ['hotel_name', 'location', 'show_details'],
    items: [
    { isActive: true, age: 40, hotel_name: 'Dickerson', location: 'Macdonald',hotelId:1 },
    { isActive: false, age: 21, hotel_name: 'Larsen', location: 'Shaw',hotelId:2 },
    {
    isActive: false,
    age: 89,
    hotel_name: 'Geneva',
    location: 'Wilson',
    hotelId:4,
    _showDetails: true
    },
    { isActive: true, age: 38, hotel_name: 'Jami', location: 'Carney',hotelId:3 }
    ]
    }
    }
    }
  </script>