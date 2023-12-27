import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalAlignTopOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z\"/>")
      .name("VerticalAlignTopOutlined")
  }
}

export default VerticalAlignTopOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
