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
  async listColorPatterns({ commit }) {
    const response = await this.$axios.$get("/api/admin/calendar_patterns");
    if (response?.success) {
      return response.data
    } else {
      window.$nuxt.$emit("errorAlert", "Request Error");
    }
  },

  async getColorPattern({ commit }, idColorPattern: number) {
    const response = await this.$axios.$get(
      `/api/admin/calendar_patterns/${idColorPattern}`
    );
    if (response?.data) {
      if (response.data.success==200) {
        console.log(response);
      }
    } else {
      window.$nuxt.$emit("errorAlert", "Request Error");
    }
  },

  async createColorPattern({ commit }, colorPattern: Color) {
    const response = await this.$axios.$post("/api/admin/calendar_patterns", {
        calendar_patterns: colorPattern,
    });
    if (response?.data) {
        if (response.data.success==200) {
          console.log(response);
          window.$nuxt.$emit("successAlert", "Color Pattern Created");
        }
    } else {
      window.$nuxt.$emit("errorAlert", "Request Error");
    }
  },

  async updateColorPattern({ commit }, colorPattern: Color) {
    const response = await this.$axios.$put(`/api/admin/calendar_patterns/${colorPattern.id}`, {
        calendar_patterns: colorPattern,
    });
    if (response) {
      window.$nuxt.$emit("successAlert", "Color Pattern Updated");
    } else {
      window.$nuxt.$emit("errorAlert", "Request Error");
    }
  },

  async deleteColorPattern({ commit }, idColorPattern: number) {
    const response = await this.$axios.$delete(
      `/api/admin/calendar_patterns/${idColorPattern}`
    );
    if (response) {
      window.$nuxt.$emit("successAlert", "Color Pattern Deleted");
    } else {
      window.$nuxt.$emit("errorAlert", "Request Error");
    }
  },
};
