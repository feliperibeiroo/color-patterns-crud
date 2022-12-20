import { Context } from '@nuxt/types'
import { AxiosError } from 'axios'

export default function ({ $axios, $auth, redirect }:Context) {
    $axios.onError(async (error:AxiosError) => {
        
      if (error.response?.status == 409) {
        await $auth.logout().then(() => {
            location.reload()
        })
      }
    })
  }
  