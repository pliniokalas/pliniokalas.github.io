<script lang='ts'>
  export let info: { text: string, action?: () => void };
  export let className: string;
</script>

<!-- -------------------------------------------------------------------------------- -->

{#if info.action}

  <button
    type='button'
    class={className}
    on:click={info.action}
  >
    <slot />
    <p>{info.text}</p>
  </button>

{:else}

  <div class={className}>
    <slot />
    <p>{info.text}</p>
  </div>

{/if}

<!-- -------------------------------------------------------------------------------- -->

<style lang='scss' global>
  .btn {
    display: flex;
    align-items: center;

    img {
      height: 100%;
      aspect-ratio: 1/1;
      margin-right: .5rem;
    }

    svg {
      height: 1.5em;
      width: 1.5em;
      margin-right: .5rem;

      path {
        fill: currentColor;
      }
    }

    > p {
      margin: 0;
    }
  }

  .outlineButton {
    @extend .btn;

    padding: .25rem .5rem;

    color: var(--secondary300);
    font-size: .8rem;
    border: 1px solid currentColor; 
    border-radius: 2px;
  }

  .filledButton {
    @extend .btn;

    padding: .5rem 1rem;

    color: var(--secondary700);
    font-weight: 700;
    border-radius: 2px;
    background-color: var(--secondary300);
  }
</style>
