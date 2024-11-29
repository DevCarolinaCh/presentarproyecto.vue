<template>
  <div v-if="user">
    <p>Bienvenido, {{ user.name }}</p>
  </div>
  <div v-else>
    <p>Debes iniciar sesión</p>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const authStore = useAuthStore()
    const user = computed(() => authStore.user)

    return { user }
  }
}
</script>