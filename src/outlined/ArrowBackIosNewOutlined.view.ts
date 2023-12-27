import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowBackIosNewOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z\"/>")
      .name("ArrowBackIosNewOutlined")
  }
}

export default ArrowBackIosNewOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
