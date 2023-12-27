import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FlashOnOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 2v11h3v9l7-12h-4l3-8z\"/>")
      .name("FlashOnOutlined")
  }
}

export default FlashOnOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
