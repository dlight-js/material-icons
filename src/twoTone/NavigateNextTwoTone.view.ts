import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NavigateNextTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m10.02 18 6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z\"/>")
      .name("NavigateNextTwoTone")
  }
}

export default NavigateNextTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
