import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowLeftTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m14 7-5 5 5 5V7z\"/>")
      .name("ArrowLeftTwoTone")
  }
}

export default ArrowLeftTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
