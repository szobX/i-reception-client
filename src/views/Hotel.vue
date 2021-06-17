<template>
  <div class="">
    <div class="container-fluid p-0 m-0">
      <img
        :src="hotel.image"
        alt=""
        class="w-100 hotel-img"
      >
    </div>
    <div class="container mt-4">
      <h1 class="text-bold text-gray-700">
        {{ hotel.name }}
      </h1>
      <p class="font-xxl">
        {{ hotel.city }}, {{ hotel.zipCode }}<br>
        {{ hotel.streetName }}{{ hotel.houseNumber }} <br>
        <b-icon icon="map" /> lat{{ hotel.latidute }}, lng:{{ hotel.longitude }}
      </p>
    </div>
    <div class="container mt-5">
      <h2>ROOMS</h2>
    </div>
    <div class="container mt-5 mb-5">
      <div class="d-flex justify-content-center row">
        <div class="col-md-12">
          <div
            v-for="room in rooms"
            :key="room.id"
            class="row p-2 bg-white border rounded mt-2"
          >
            <div class="col-md-3 mt-1">
              <img
                class="img-fluid img-responsive rounded product-image"
                :src="room.image"
              >
            </div>
            <div class="col-md-6 mt-1">
              <h5>Room {{ room.number }} </h5>
              <div class="d-flex flex-row">
                {{ room.description }}
              </div>
            </div>
            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
              <div class="d-flex flex-row align-items-center">
                <h4 class="mr-1">
                  ${{ room.pricePerDay }} per day
                </h4>
              </div>
            
              <div class="d-flex flex-column mt-4">
                <button
                  v-if="user !== null"
                  class="btn btn-primary btn-sm"
                  type="button"
                  :disabled="room.isRent || room.isDamaged || !room.isClean"
                >
                  <template v-if="room.isRent || room.isDamaged || !room.isClean">
                    Room is not avalible
                  </template>
             
                  <template v-else>
                    go to reservation
                  </template>
                </button>
                <template v-if="user===null">
                  <router-link
                    class="btn btn-warning"
                    :to="{name:'Login'}"
                  >
                    let's login to reservation room
                  </router-link>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
  name:'Hotel',
  data(){
    return{
      hotel:{
           "id": "pKeazZtpckGEVZNKuAasx0S",
          "name": "Hotel merkury",
        "streetName": "ul.bałtyk",
        "houseNumber": "1",
       "city": "Poznań",
       "zipCode": "61-450",
         "latitude": 54.54,
       "longitude": 53.55,
       "image":"https://www.ahstatic.com/photos/3393_ho_00_p_1024x768.jpg",
       "description":"tak fajny opis pokoju by sie tu przydał pozdrawiam z rodzinką :) i czy będą zwracały się tutaj też extrasy :)"
        },
       rooms:[
        {
  "id": "pKeazZt123pckGE23VZNKuAsx07",
  "number": "453",
  "floor": 1,
  "pricePerDay": 63,
  "buildingId": "pKeazZtpckGEVZNKuAasx0S",
  "isAvailable": true,
  "isDamaged": false,
  "isClean": true,
  "isRent": true,
  "image": "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
  "description":"tak fajny opis pokoju by sie tu przydał pozdrawiam z rodzinką :) i czy będą zwracały się tutaj też extrasy :)"
},
{
  "id": "pKeazZtpckGEVZNK234uAsx07",
  "number": "452",
  "floor": 1,
  "pricePerDay": 61,
  "buildingId": "pKeazZtpckGEVZNKuAasx0S",
  "isAvailable": true,
  "isDamaged": false,
  "isClean": true,
  "isRent": false,
  "image": "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
  "description":"tak fajny opis pokoju by sie tu przydał pozdrawiam z rodzinką :) i czy będą zwracały się tutaj też extrasy :)"
},
{
  "id": "pKeazZtpckGEVZ123NK234uAsx07",
  "number": "451",
  "floor": 1,
  "pricePerDay": 63,
  "buildingId": "pKeazZtpckGEVZNKuAasx0S",
  "isAvailable": true,
  "isDamaged": false,
  "isClean": true,
  "isRent": false,
  "image": "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
  "description":"tak fajny opis pokoju by sie tu przydał pozdrawiam z rodzinką :) i czy będą zwracały się tutaj też extrasy :)"
},
{
  "id": "pKeazZtp4324ckGEVZ43NKuAsx07",
  "number": "450",
  "floor": 1,
  "pricePerDay": 63,
  "buildingId": "pKeazZtpckGEVZNKuAasx0S",
  "isAvailable": true,
  "isDamaged": false,
  "isClean": true,
  "isRent": false,
  "image": "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
  "description":"tak fajny opis pokoju by sie tu przydał pozdrawiam z rodzinką :) i czy będą zwracały się tutaj też extrasy :)"
}
       ]                 
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  }
  }
  </script>
  
  <style>
  .hotel-img{
  height:25vh;
  object-fit: cover;
  }
  </style>