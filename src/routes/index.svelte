<script lang='ts'>
  import Outline from '$lib/components/Outline/index.svelte';
  import About from '$lib/components/About/index.svelte';
  import Hardskills from '$lib/components/Hardskills/index.svelte';
  import Projects from '$lib/components/Projects/index.svelte';
  import Footer from '$lib/components/Footer/index.svelte';
  import { createObserver } from '$lib/util/createObserver';
  import { articlesObserver, outlineObserver } from '$lib/util/observers';
</script>

<!-- --------------------------------------------------------------------------------- -->

<svelte:window on:load={() => [articlesObserver, outlineObserver].forEach(o => createObserver(o))} />

<main>
  <Outline />

  <section id='cover'>
    <p>Digital CV</p>

    <div class='maskContainer'>
      <div class='maskOverlay' />
      <img src='https://i.postimg.cc/brmRkBH9/IMG-20190515-120621-01-2.jpg' alt='' />
    </div>

    <p>  </p>
  </section>


  <section class='content'>
    <About />

    <Hardskills />

    <!--
    <article id='soft-skills'>
      <h2>Soft skills</h2>  

      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fames, dui a erat est vitae potenti turpis lacinia, sollicitudin eleifend tincidunt varius habitasse mauris eu pharetra.</p>
    </article>
    -->

    <article id='experience' class='xpContainer'>
      <h2>Experiência profissional</h2>  

      <ul>
        <li class='xp'>
          <h3>E.Life - 2021</h3>
          <p>Estagiário Full Stack remoto na equipe de chatbots da E.Life desde 07/2021, onde</p>

          <ul>
            <li>Propus e realizei a migração da documentação de onboarding do Google Docs para o Github Wiki.</li>
            <li>Participei do design e construção do frontend do MVP de uma plataforma de job hunting.</li>
            <li>Propus, planejei e realizei a refatoração de um produto, incluindo a implementação de um motor de buscas através do Atlas Search (MongoDB).</li>
            <li>Em tarefas rotineiras de manutenção, realizei contribuições em mais de 16 repositórios da organização.</li>
          </ul>
        </li>

        <li class='xp'>
          <h3>No passado</h3>
          <p>Minha experiência anterior em outras áreas me serve hoje na indústria de TI através das soft skills que cultivei.</p>
          <p>Trabalhando em times pequenos e grandes, em organizações process-heavy e pequenas empreitadas (guiadas unicamente pela expertise de pessoas com uma missão), aprendi prontidão, adaptabilidade, a receber feedback, e principalmente, a fazer parte de uma equipe profundamente integrada.</p>
        </li>
      </ul>
    </article>

    <article id='other' class='otherExperiences'>
      <h2>Outras experiências</h2>  

      <ul>
        <li>Cozinheiro voluntário em diversos projetos na moradia universitária da UFMG entre 2016 e 2018.</li>
        <li>Monitor e coautor no projeto de convivência Culinária na Moradia, na moradia universitária da UFMG em 2017.</li>
        <li>Trabalhos diversos em design e branding.</li>
        <li>Deploy de aplicações web no <b>Vercel</b>, <b>Heroku</b> e <b>Firebase</b>.</li>
      </ul>
    </article>

    <article id='education'>
      <h2>Formação</h2>  

      <span>Sistemas de Informação</span>
      <br/>
      <span>Bacharelado pela FUMEC, 2020-2024</span>
    </article>

    <Projects />
  </section>

  <Footer />
</main>

<!-- --------------------------------------------------------------------------------- -->

<style lang='scss'>
  @import 'home';
</style>
