import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AccessTimeFilledFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z\"/>")
      .name("AccessTimeFilledFilled")
  }
}

export default AccessTimeFilledFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
