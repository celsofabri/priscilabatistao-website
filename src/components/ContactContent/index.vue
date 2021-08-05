<template>
  <article class="content">
    <div class="description">
      <form class="form">
        <div class="form__group">
          <div class="form__item">
            <label for="name" class="form__label">Nome</label>
            <input type="text" id="name" class="form__input" />
          </div>
        </div>
        <div class="form__group">
          <div class="form__item">
            <label for="email" class="form__label">E-mail</label>
            <input type="email" id="email" class="form__input" />
          </div>
        </div>
        <div class="form__group form__group--col2">
          <div class="form__item">
            <label for="phone" class="form__label">Telefone</label>
            <input type="tel" id="phone" class="form__input" />
          </div>
          <div class="form__item">
            <label for="subject" class="form__label">Assunto</label>
            <input type="text" id="subject" class="form__input" />
          </div>
        </div>
        <div class="form__group">
          <div class="form__item">
            <label for="message" class="form__label">Mensagem</label>
            <textarea
              name="message"
              id="message"
              class="form__textarea"
            ></textarea>
          </div>
        </div>
        <div class="form__group">
          <div class="form__item">
            <button type="submit" class="btn btn__cta">Enviar</button>
          </div>
        </div>
      </form>
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
