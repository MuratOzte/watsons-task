export const useProducts = () => {
  const { public: { baseAPI } } = useRuntimeConfig()

  const fetchFeatured = (limit = 4, opts = {}) => {
    const { data, pending, error, refresh } = useFetch(`${baseAPI}`, {
      key: `products-featured-${limit}`,
      params: { limit },
      ...opts,
      transform: (res) => res?.products ?? []
    })

    return { data, pending, error, refresh }
  }

  return { fetchFeatured }
}
