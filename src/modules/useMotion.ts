import { MotionPlugin } from '@vueuse/motion'
import { UserModule } from '~/types'
export const install: UserModule = ({ app, isClient }) => {
  if (isClient)
    app.use(MotionPlugin)
}
