<script>
	import Logo from '$lib/components/Logo.svelte';
 	import Navbar from '$lib/components/Navbar.svelte';  
	import ShowImage from '$lib/components/ShowImage.svelte';
</script>


<div class="columns is-centered is-vcentered is-multiline">
  <div class="column is-full">


    <!-- <Navbar /> -->


  </div>

  <div class="column is-full">


    <Logo />


  </div>

  <div class="column is-full-mobile is-half-tablet is-one-third-desktop">


    <ShowImage />

  </div>
  <div class="column is-full-mobile is-half-tablet is-half-desktop">
  
    <div class="section has-text-centered pt-0 mt-0">
      <div class="container">

          <div class="block is-hidden-touch">
            <h1 class="title is-size-2-desktop is-size-3-mobile has-text-weight-bold  mb-6">
              Bienvenido a Yindri's Nails Studio
            </h1>
          </div>
        <button class="button is-size-4-desktop is-size-4-mobile is-rounded">
          <h1>
            <a href="/log" class="has-text-white">
              Iniciar
            </a>
          </h1>
        </button>
      </div>
    </div>

  </div>



  <!-- <div class="column is-full">
<div class="box"><h1>ter5</h1></div>
  </div> -->
</div>



<style>
  .button {
    background-color: var(--brand-color);
    color: white;
  }

  .title {
    color: var(--brand-color);
  }

  .block{
    background: var(--nm-shadow-out);
  }
</style>
