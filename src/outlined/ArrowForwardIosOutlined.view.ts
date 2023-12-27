import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowForwardIosOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z\"/>")
      .name("ArrowForwardIosOutlined")
  }
}

export default ArrowForwardIosOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
