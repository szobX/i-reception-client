<template>
  <div class="mt-5 p-5">
    <div class="container">
      <home-hotel-list :hotels="hotels" />
    </div>
  </div>
</template>

<script>
import HomeHotelList from '../components/hotel/HomeHotelList.vue';
export default {
  name: "Home",
  components: { HomeHotelList },
 
  data() {
    return {
      value: "",
      hotels:[
        {
           "id": "pKeazZtpckGEVZN3KuAsx0S",
          "name": "Hotel merkury",
        "streetName": "ul.bałtyk",
        "houseNumber": "1",
       "city": "Poznań",
       "zipCode": "61-450",
         "latitude": 54.54,
       "longitude": 53.55,
       "image":"https://www.ahstatic.com/photos/3393_ho_00_p_1024x768.jpg"
        },
        {
           "id": "pKeazZtpckGEVdZNKuAsx0S",
          "name": "Hotel merkury",
        "streetName": "ul.bałtyk",
        "houseNumber": "1",
       "city": "Poznań",
       "zipCode": "61-450",
         "latitude": 54.54,
       "longitude": 53.55,
       "image":"https://www.ahstatic.com/photos/3393_ho_00_p_1024x768.jpg"
        },        
        {
           "id": "pKeazZtpckGEVZNKsuAsx0S",
          "name": "Hotel merkury",
        "streetName": "ul.bałtyk",
        "houseNumber": "1",
       "city": "Poznań",
       "zipCode": "61-450",
         "latitude": 54.54,
       "longitude": 53.55,
       "image":"https://www.ahstatic.com/photos/3393_ho_00_p_1024x768.jpg"
        },        
        {
           "id": "pKeazZtpckGEVZNKuAasx0S",
          "name": "Hotel merkury",
        "streetName": "ul.bałtyk",
        "houseNumber": "1",
       "city": "Poznań",
       "zipCode": "61-450",
         "latitude": 54.54,
       "longitude": 53.55,
       "image":"https://www.ahstatic.com/photos/3393_ho_00_p_1024x768.jpg"
        },                
      ]
    }
  }
}

</script>
