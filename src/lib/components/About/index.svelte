<script lang='ts'>
  import Button from '$lib/components/Button/index.svelte';
  import Globe from '$lib/icons/earth-americas-solid.svelte';
  import Pin from '$lib/icons/location-pin-solid.svelte';
  import Lang from '$lib/icons/language-solid.svelte';
</script>

<!-- --------------------------------------------------------------------------------- -->

<article id='about'>
  <div class='photoContainer'>
    <div class='photoFilter' />
    <img src='https://i.postimg.cc/MKkfLXCy/digital-cv-hs.jpg' alt='my face' />
  </div>

  <h2>Sobre</h2>
  <p>Desenvolvedor Full Stack de background diverso com experiência construindo e mantendo Front Ends e APIs para a web, preocupado com qualidade de código e melhores práticas na indústria, proativo, bom comunicador, team player; interessado em fazer parte de uma equipe talentosa em uma empresa moderna.</p>

  <ul class='buttonList'>
      <li style={`--i:1`}>
        <Button info={{ text: 'Belo Horizonte/MG' }} className='outlineButton'>
          <Pin />
        </Button>
      </li>

      <li style={`--i:2`}>
        <Button info={{ text: 'Remote' }} className='outlineButton'>
          <Globe />
        </Button>
      </li>

      <li style={`--i:3`}>
        <Button info={{ text: 'Português' }} className='outlineButton'>
          <Lang />
        </Button>
      </li>

      <li style={`--i:4`}>
        <Button info={{ text: 'Inglês' }} className='outlineButton'>
          <Lang />
        </Button>
      </li>
  </ul>
</article>

<!-- --------------------------------------------------------------------------------- -->

<style lang='scss'>
  .photoContainer {
    overflow: hidden;
    height: 14rem;
    max-width: 100%;
    aspect-ratio: 2.5/1;
    border-radius: .3rem;
    position: relative;

    > .photoFilter {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 10;
      background: linear-gradient(286.2deg, #6C7694 0%, #0B132B 100%);
      mix-blend-mode: overlay;
    }

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
