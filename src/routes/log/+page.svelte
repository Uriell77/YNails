<script>
	import RegForm from './../../lib/components/RegForm.svelte';
	import LogForm from "$lib/components/LogForm.svelte";
	import Logo from "$lib/components/Logo.svelte";


  let flag = $state(false);

  function changeflag(){
    flag = !flag;
  }
</script>



  
<div class="columns is-centered is-vcentered is-multiline">
  <div class="column is-full">

    <Logo />

  </div>
  <div class="column is-full">

{#if !flag}
    <LogForm />
{:else}

<RegForm  />

{/if}


  </div>
  <div class="column is-full">

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="h3 has-text-centered mt-0 pt-0 textchange has-text-black" onclick={changeflag} >
      {#if !flag}

      Registrarse
      {:else}
      Iniciar Sesión
      {/if}
    </div>

  </div>
</div>





<style>
  .textchange {
    background: var(--nm-shadow-out);
    color: var(--nm-text);
    cursor: pointer;
  }   
  </style>
