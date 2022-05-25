<script lang='ts'>
  import Button from '$lib/components/Button/index.svelte';
  import React from '$lib/icons/react-brands.svelte';
  import Node from '$lib/icons/node-js-brands.svelte';
  import TS from '$lib/icons/typescript-brands.svelte';
  import Mongo from '$lib/icons/mongodb-brands.svelte';
  import Sass from '$lib/icons/sass-brands.svelte';
  import Git from '$lib/icons/git-alt-brands.svelte';
  import GCP from '$lib/icons/google-cloud.svelte';
</script>

<!-- --------------------------------------------------------------------------------- -->

<article id='hard-skills'>
  <h2>Habilidades técnicas</h2>  

  <p>Meu conjunto de ferramentas principal.</p>

  <ul class='buttonList'>
      <li style={`--i:1`}>
        <Button info={{ text: 'React' }} className='filledButton'>
          <React />
        </Button>
      </li>

      <li style={`--i:2`}>
        <Button info={{ text: 'Node' }} className='filledButton'>
          <Node />
        </Button>
      </li>

      <li style={`--i:3`}>
        <Button info={{ text: 'TypeScript' }} className='filledButton'>
          <TS />
        </Button>
      </li>

      <li style={`--i:4`}>
        <Button info={{ text: 'MongoDB' }} className='filledButton'>
          <Mongo />
        </Button>
      </li>

      <li style={`--i:4`}>
        <Button info={{ text: 'Git' }} className='filledButton'>
          <Git />
        </Button>
      </li>

      <li style={`--i:5`}>
        <Button info={{ text: 'Sass' }} className='filledButton'>
          <Sass />
        </Button>
      </li>
  </ul>

  <p>Casos de uso específico, mas pode vir a calhar.</p>

  <ul class='buttonList'>
      <li style={`--i:6`}>
        <Button info={{ text: 'Atlas Search' }} className='outlineButton'>
          <Mongo />
        </Button>
      </li>

      <li style={`--i:7`}>
        <Button info={{ text: 'Google Cloud Platform' }} className='outlineButton'>
          <GCP />
        </Button>
      </li>
  </ul>
</article>

<!-- --------------------------------------------------------------------------------- -->

<style lang='scss'>
  :global(article.animated .buttonList > li) {
    animation: rotate 600ms ease-out 1 both;
    animation-delay: calc((var(--i) * var(--i) * 15ms) + 200ms);
  }

  :global(article.animated .buttonList > li :is(svg, p)) {
    animation: fadeIn 200ms ease-out 1 both;
    animation-delay: calc((var(--i) * var(--i) * 25ms) + 300ms);
  }
</style>
