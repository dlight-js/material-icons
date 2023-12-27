import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SkipPreviousOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 6h2v12H6zm3.5 6 8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z\"/>")
      .name("SkipPreviousOutlined")
  }
}

export default SkipPreviousOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
