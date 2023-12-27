import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalAlignTopTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z\"/>")
      .name("VerticalAlignTopTwoTone")
  }
}

export default VerticalAlignTopTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
