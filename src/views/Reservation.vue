<template>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card card-primary card-outline">
            <div class="card-body box-profile">
              <div class="text-center">
                <img
                  :src="room.image"
                  alt=""
                  class="img-fluid radius-xl"
                >
              </div>

             

              <p class="text-muted text-center">
                {{ room.description }}
              </p>

              <ul class="list-group list-group-unbordered mb-3">
                <li class="list-group-item">
                  <b>price</b> <a class="float-right">  {{ room.PricePerDay }}$</a>
                </li>
                <li class="list-group-item">
                  <b>floor</b> <a class="float-right">{{ room.floor }}</a>
                </li>
                <li class="list-group-item">
                  <b>number</b> <a class="float-right">{{ room.number }}</a>
                </li>
              </ul>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
        <div class="col-8">
          <div class="card card-primary card-outline">
            <div class="card-body box-profile">
              <h3 class="profile-username text-center">
                Reservation room
              </h3>
              <div class="mb-3">
                <label for="example-datepicker">Choose a start date</label>
                <b-form-datepicker
                  id="example-datepicker"
                  v-model="reservation.startDate"
                  class="mb-2"
                />
              </div>
              <div class="mb-3">
                <label for="dpickerend">Choose a end date</label>
                <b-form-datepicker
                  id="dpickerend"
                  v-model="reservation.endDate"
                  :disabled="reservation.startDate === null"
                  class="mb-2"
                />
              </div>
              <div class="">
                <button
                  :disabled="reservation.endDate ===null || reservation.startDate ===null"
                  class=" w-100 btn btn-primary"
                  @click="onReservation"
                >
                  Reservation & Pay
                </button>
              </div>
            </div>
            <!-- /.card-body -->
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
        reservation:{
          startDate:null,
          endDate:null,
       
        },
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
         room: {
    "id": "pKeazZt123pckGE23VZNKuAsx07",
    "number": "453",
    "floor": 1,
    "PricePerDay": 63,
    "buildingId": "pKeazZtpckGEVZNKuAasx0S",
    "isAvailable": true,
    "isDamaged": false,
    "isClean": true,
    "isRent": true,
    "image": "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
    "description":"tak fajny opis pokoju by sie tu przydał pozdrawiam z rodzinką :) i czy będą zwracały się tutaj też extrasy :)"
  },             
      }
    },
    computed:{
      user(){
        return this.$store.state.user
      },
      days(){
        return  this.days_between(new Date(this.reservation.startDate), new Date(this.reservation.endDate))
      }
    },
    methods:{
     days_between(date1, date2) {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1 - date2);

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);

},

      onReservation(){
      
        const reservation = {
          isPaid:true,
          cost:this.days*parseFloat(this.room.PricePerDay),
          active:true,
          clientId:this.$store.state.user.Id,
          roomId:this.room.id,
          ...this.reservation
        }
        console.log(reservation)
        this.axios.post('reservation',reservation).then(res=>{
          console.log(res)
        })
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