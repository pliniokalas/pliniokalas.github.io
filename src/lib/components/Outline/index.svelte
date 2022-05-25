<script lang='ts'>
  import { page } from '$app/stores';

  const sections = [
    ['cover', 'capa'],
    ['about', 'sobre'],
    ['hard-skills', 'habilidades'],
    ['experience', 'experiência'],
    ['other', 'outros'],
    ['education', 'formação'],
    ['projects', 'projetos']
  ].map(s => [s[0], s[1].toUpperCase()]);

  // Smoothly scrolls the element into the center of the viewport.
  function scrollTo(id: string) {
    window.history.pushState({}, "", `#${id}`);
    document.querySelector(`#${id}`)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
</script>

<!-- --------------------------------------------------------------------------------- -->

<menu class='outline'>
  {#each sections as [link, label]}
    <button
      type='button'
      class='outlineItem'
      class:selected={$page.url?.hash?.replace('#', '') === link}
      name={link}
      on:click={() => scrollTo(link)}
    >
      {label}
    </button>
  {/each}
</menu>

<!-- --------------------------------------------------------------------------------- -->

<style lang='scss'>
  .outline {
    width: max-content;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0;
    margin: 0;

    position: fixed;
    right: 1rem;
    top: 40%;
    z-index: 15;
  }

  .outlineItem {
    padding: .25rem;

    font-weight: 700;
    color: var(--primary200);
    border-right: 2px solid transparent;    
    cursor: pointer;
    transition: color 300ms ease-out;

    &.selected {
      color: var(--secondary500);
      border-right: 2px solid var(--secondary500);
    }
  }
</style>
