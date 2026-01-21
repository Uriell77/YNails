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
  <div class="column is-full">
  
    <div class="section has-text-centered pt-0 mt-0">
      <div class="container">
        <button class="button is-size-3-desktop is-size-4-mobile is-rounded"><h1>Login/Registro</h1></button>
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
</style>
