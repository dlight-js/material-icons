import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalAlignCenterTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zm4 8h3v4h2v-4h3l-4-4z\"/>")
      .name("VerticalAlignCenterTwoTone")
  }
}

export default VerticalAlignCenterTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
