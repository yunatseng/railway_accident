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
      <Main />
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
          class="white--text text-left"
          width="100%"
        >
          <v-card-text class="white--text">
            <ol>
              <li
                v-for="(citation,i) in citeList"
                :key="i"
              >
                <a
                  class="white--text"
                  :href="citation"
                  target="_blank"
                >
                  {{ citation }}
                </a>
              </li>
            </ol>
          </v-card-text>

          <v-divider />

          <v-card-text
            class="white--text text-center"
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
import Main from './components/Main.vue';

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    citeList: ['https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-6-2?selectIndex=1',
      'https://www.chinatimes.com/newspapers/20200428000636-260107?chdtv',
      'https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-6-2?selectIndex=1',
      'https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-6-2?selectIndex=1',
      'https://zh.wikipedia.org/wiki/2020%E5%B9%B4%E8%87%BA%E9%90%B5%E7%91%9E%E8%8A%B3%E7%8C%B4%E7%A1%90%E8%B7%AF%E6%AE%B5%E8%B5%B0%E5%B1%B1%E4%BA%8B%E6%95%85',
      'https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-6-2?selectIndex=1',
      'https://udn.com/news/story/7266/5208604',
      'https://www.cna.com.tw/news/asoc/202101190278.aspx',
      'https://www.motc.gov.tw/ch/home.jsp?id=2&parentpath=0&mcustomize=news_view.jsp&dataserno=202102230005&aplistdn=ou=data,ou=news,ou=chinese,ou=ap_root,o=motc,c=tw&toolsflag=Y&imgfolder=img%2Fstandard',
      'https://zh.wikipedia.org/wiki/2021%E5%B9%B4%E5%A4%AA%E9%AD%AF%E9%96%A3%E8%99%9F%E5%88%97%E8%BB%8A%E5%87%BA%E8%BB%8C%E4%BA%8B%E6%95%85'],
  }),
};
</script>
