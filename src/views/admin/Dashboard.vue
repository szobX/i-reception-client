<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
      
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">
              Dashboard v3
            </h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">
                Dashboard v3
              </li>
            </ol>
          </div><!-- /.col -->
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>150</h3>

                <p>Hotels</p>
              </div>
              <!-- <div class="icon">
                  <b-icon
                    icon="exclamation-circle-fill"
                    variant="error"
                  />
                </div> -->
              <a
                href="#"
                class="small-box-footer"
              >More info <i class="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>

                <p>Bounce Rate</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars" />
              </div>
              <a
                href="#"
                class="small-box-footer"
              >More info <i class="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>44</h3>

                <p>User Registrations</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add" />
              </div>
              <a
                href="#"
                class="small-box-footer"
              >More info <i class="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph" />
              </div>
              <a
                href="#"
                class="small-box-footer"
              >More info <i class="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
</template>

<script>


export default {
  name: "AdminDashboard",

};
</script>
