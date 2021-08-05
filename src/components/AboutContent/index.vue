<template>
  <article class="content">
    <div class="description">
      <div class="description__editor">
        <p
          style="
            font-size: 32px;
            font-weight: 700;
            color: #ffce00;
            text-transform: uppercase;
          "
        >
          Hello,
        </p>
        <p>
          Meu nome é <strong>Priscila Batistão</strong>, sou formada
          em fotografia pela Universidade Tuiuti do Paraná e
          atualmente estudante de Design pela Universidade Tecnológica
          Federal do Paraná. Atuo como fotógrafa desde 2013, com
          experiência em fotografias de estúdio e em ambientes
          abertos, edição e tratamento de imagens.
        </p>
      </div>
      <!-- <g-link
        to="/contato"
        title="Contato"
        class="btn btn__cta btn__cta--link"
      >
        Entre em contato
      </g-link> -->
      <a
        href="mailto:priscila.batistao@hotmail.com"
        title="Contato"
        target="_blank"
        class="btn btn__cta btn__cta--link"
      >
        Entre em contato
      </a>
    </div>
    <div class="cover">
      <img
        src="@/assets/images/about.jpg"
        alt="Priscila Batistão | Sobre"
      />
    </div>
  </article>
</template>

<script src="./scripts.js" />

<style src="./style.scss" lang="scss" scoped />
