import { GetterTree, ActionTree, MutationTree } from "vuex";
import Color from "~/models/Color";

export const state = () => ({
  /* colorPatterns: [] as Array<Color>, */
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  /* colorPatterns: (state) => state.colorPatterns, */
};

export const mutations: MutationTree<RootState> = {
  /* SET_COLOR_PATTERNS: (state, colorPatterns: Array<Color>) =>
    (state.colorPatterns = colorPatterns), */
};

export const actions: ActionTree<RootState, RootState> = {

  async listColorPatterns(context, page:number=1) {
    const response = await this.$axios.$get("/api/admin/calendar_patterns", {
        params: { page }
    });
    if (response?.success) {
      return response.data;
    } else {
      window.$nuxt.$emit("errorAlert", "Request Error");
    }
  },

  async getColorPattern(context, idColorPattern:number) {
    const response = await this.$axios.$get(
      `/api/admin/calendar_patterns/${idColorPattern}`
    );
    if (response?.success) {
        console.log(response.data);
        return response.data;
    } else {
        window.$nuxt.$emit("errorAlert", "Request Error");
    }
  },

  async createColorPattern(context, colorPattern: Color) {
    window.$nuxt.$loading.start()
    const response = await this.$axios.$post("/api/admin/calendar_patterns", {
        calendar_patterns: colorPattern,
    });
    window.$nuxt.$loading.finish()

    if (response?.success) {
        console.log(response.data);
        window.$nuxt.$emit("successAlert", "Color Pattern Created");
        window.$nuxt.$emit('fetchData')
        return response.data;
    } else {
        window.$nuxt.$emit("errorAlert", "Request Error");
    }
  },

  async updateColorPattern(context, colorPattern: Color) {
    window.$nuxt.$loading.start()
    const response = await this.$axios.$put(`/api/admin/calendar_patterns/${colorPattern.id}`, {
        calendar_patterns: colorPattern,
    });
    window.$nuxt.$loading.finish()
    if (response?.success) {
        console.log(response.data);
        window.$nuxt.$emit("successAlert", "Color Pattern Updated");
        window.$nuxt.$emit('fetchData')
        return response.data;
    } else {
        window.$nuxt.$emit("errorAlert", "Request Error");
    }
  },

  async deleteColorPattern(context, idColorPattern: number) {
    window.$nuxt.$loading.start()
    const response = await this.$axios.$delete(
      `/api/admin/calendar_patterns/${idColorPattern}`
    );
    window.$nuxt.$loading.finish()
    if (response?.success) {
        console.log(response.data);
        window.$nuxt.$emit("successAlert", "Color Pattern Deleted");
        window.$nuxt.$emit('fetchData')
        return response.data;
    } else {
        window.$nuxt.$emit("errorAlert", "Request Error");
    }
  }

};
