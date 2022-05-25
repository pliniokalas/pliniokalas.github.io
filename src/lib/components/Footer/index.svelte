<script>
  import Github from '$lib/icons/github-brands.svelte';
  import Linkedin from '$lib/icons/linkedin-brands.svelte';
  import Mail from '$lib/icons/envelope-solid.svelte';

</script>

<!-- --------------------------------------------------------------------------------- -->

<footer id='contact'>
  <div>
    <div class='contactLink'>
      <Github />
      <a href='https://github.com/pliniokalas'>Github</a>
    </div>

    <div class='contactLink'>
      <Linkedin />
      <a href='https://linkedin.com/in/pliniokalas'>LinkedIn</a>
    </div>

    <div class='contactLink'>
      <Mail />
      <a href='mailto:pliniokalas@gmail.com'>Email</a>
    </div>
  </div>

  <div class='credit'>
    <span>Icons courtesy of <a href='https://fontawesome.com/'>Font Awesome</a> and <a href='https://github.com/templarian/MaterialDesign'>Material Design Icons</a>.</span>
    <span class='madeWith'>Made with <img src='/svelte.svg' alt='svelte' /></span>
  </div>
</footer>

<!-- --------------------------------------------------------------------------------- -->

<style lang='scss'>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem 1rem;
    background-color: var(--primary100);
    color: var(--primary300);

    > *:not(:last-child) {
      margin-bottom: 1rem;
    }

    > div {
      display: flex;

      .contactLink {
        display: flex;
        align-items: center;
        padding: .5rem;
        border-radius: 2px;
      }
    }
  } 

  :global(.contactLink > svg) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem; 
  }

  :global(.contactLink > svg > path) {
    fill: currentColor;
  }

  .credit {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .8rem;
  }

  .madeWith {
    width: max-content;
    display: flex;
    align-items: center;
    padding: .25rem;
    margin: .5rem;

    background-color: var(--primary400);
    border-radius: 2px;
    color: var(--primary100);

    img {
      height: 1.5em;
    }
  }
</style>
