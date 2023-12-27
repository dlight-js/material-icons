import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowLeftOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m14 7-5 5 5 5V7z\"/>")
      .name("ArrowLeftOutlined")
  }
}

export default ArrowLeftOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
