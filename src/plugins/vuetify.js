import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.brown.darken1,
        secondary: colors.red.lighten4,
        accent: colors.pink.accent4,
        dot: colors.red.lighten2,
      },
    },
  },
});
