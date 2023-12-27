import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowForwardOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z\"/>")
      .name("ArrowForwardOutlined")
  }
}

export default ArrowForwardOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
