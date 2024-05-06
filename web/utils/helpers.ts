import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

export const timestampToDate = (timestamp: number) => {
  var d = new Date()
  d.setTime(timestamp * 1000)
  return (
    ('0' + d.getDate()).slice(-2) +
    '/' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '/' +
    d.getFullYear()
  )
}

export type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xsm'

export const useMedia = (breakpoints?: {
  xsm?: number
  sm?: number
  md?: number
  lg?: number
}) => {
  const xsmD = breakpoints?.xsm ?? 420
  const smD = breakpoints?.sm ?? 640
  const mdD = breakpoints?.md ?? 768
  const lgD = breakpoints?.lg ?? 1024

  const { width } = useWindowSize()

  return {
    xsm: computed(() => width.value < xsmD),
    sm: computed(() => xsmD <= width.value && width.value < smD),
    md: computed(() => smD < width.value && width.value < mdD),
    lg: computed(() => mdD < width.value && width.value < lgD),
    xl: computed(() => lgD < width.value),
    currentSize: computed(() => {
      if (width.value < smD) return 'sm'
      if (smD < width.value && width.value < mdD) return 'md'
      if (mdD < width.value && width.value < lgD) return 'lg'
      if (lgD < width.value) return 'lg'
      return 'xl'
    }),
  }
}

export const scrollTop = () => {
  const router = useRouter()

  router.replace('/')
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
}
