import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MinimizeTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 19h12v2H6v-2z\"/>")
      .name("MinimizeTwoTone")
  }
}

export default MinimizeTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
