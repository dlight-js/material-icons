import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PhoneDisabledRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14.54 17.37a16.868 16.868 0 0 1-9.45 3.61c-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98l2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c.81-.41 1.59-.9 2.31-1.45L2.1 4.93a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0L20.49 20.5a.996.996 0 1 1-1.41 1.41l-4.54-4.54zm2.85-6.57-1.85-1.85a1.99 1.99 0 0 1-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07a16.94 16.94 0 0 1-3.62 9.47l-1.43-1.43c.55-.73 1.04-1.51 1.46-2.33z\"/>")
      .name("PhoneDisabledRound")
  }
}

export default PhoneDisabledRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
