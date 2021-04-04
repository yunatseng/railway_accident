<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h3 class="ml-2 title font-weight-light">
        事故時間軸
      </h3>

      <v-spacer />
      <v-btn
        href="https://www.railway.gov.tw/tra-tip-web/adr/customized_info?I=BOdk836FNKcj1mQnyA%2BwVMZL6kWlC9PkOcotriieukLBk23yf0veeKQz7PZ9m79u7Eb9aKQO9ivbALFb0kfjSas23CHNLrxyxUbUQg%3D%3D"
        target="_blank"
        text
      >
        <span class="mr-2 ">最新消息</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
    <template>
      <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          color="primary"
          class="white--text text-center"
        >
          <v-card-text class="white--text">
            Phasellus feugiat arcu sapien, et iaculis
            ipsum elementuamet. Mauris cursus commodo
            interdum. Praesent ut risus eget metus
            luctus accumsan id ultrices nunc. Sed
            at orci sed massa consectetur dignissim
            a sit amet dui. Duis commodo vitae velit
            et faucibus. Morbi vehicula lacinia malesuada.
            Nulla placerat augue vel ipsum ultrices,
            cursus iaculis dui sollicitudin. Ves
          </v-card-text>

          <v-divider />

          <v-card-text
            class="white--text"
          >
            {{ new Date().getFullYear() }} —
            <a
              href="mailto:fav0124@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            ><v-icon>mdi-email</v-icon></a>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
