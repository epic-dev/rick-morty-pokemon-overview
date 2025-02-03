export function useBackNavigation() {
  const route = useRoute()
  const router = useRouter()
  const queryPage = ref(route.query.page)

  if (!queryPage.value) {
    /**
     * to avoid difference between /pokemon and /pokemon?page=1 when navigating back
     */
    router.replace({ query: { ...route.query, page: 1 } })
  }

  const currentPage = ref(Number(queryPage.value) || 1)

  watch(() => route.query.page, (page) => {
    currentPage.value = Number(page?.toString()) || currentPage.value
  })

  return {
    willGetBackTo: (page: number) => {
      router.push({ query: { ...route.query, page } })
    },
    queryPage,
    currentPage,
  }
}
