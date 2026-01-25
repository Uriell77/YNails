<script>
	import RegForm from './../../lib/components/RegForm.svelte';
	import LogForm from "$lib/components/LogForm.svelte";
	import Logo from "$lib/components/Logo.svelte";
  import Navbar from "$lib/components/Navbar.svelte";


  let flag = $state(false);

  function changeflag(){
    flag = !flag;
  }
</script>



 <Navbar /> 

<div class="columns is-centered is-vcentered is-multiline">
  <div class="column is-full-mobile is-half-tablet is-one-third-desktop">

    <Logo />

  </div>

  <div class="column is-full-mobile is-half-tablet is-one-third-desktop">

{#if !flag}

    <LogForm />

{:else}

<RegForm  />

{/if}


  </div>
  <div class="column is-full-mobile is-half-tablet is-one-third-desktop">

    <div class="block is-hidden-touch has-text-centered mt-0 pt-0 description-text has-text-weight-bold texto">
     Realzando la belleza y elegancia de tus manos con los mejores productos y técnicas de vanguardia. 
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="h3 has-text-centered mt-0 pt-0 textchange has-text-black mb-6" onclick={changeflag} >
      {#if !flag}

      <div class="tag is-rounded has-text-weight-bold is-clickable">Registrarse</div>
      {:else}
      <div class="tag is-rounded has-text-weight-bold is-clickable">Iniciar Sesión</div>
      {/if}
    </div>


  </div>
</div>





<style>
  .tag {
    cursor: pointer;
  }   

  .texto{
    color: var(--brand-color);
  }
  </style>
