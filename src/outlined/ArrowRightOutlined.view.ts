import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowRightOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m10 17 5-5-5-5v10z\"/>")
      .name("ArrowRightOutlined")
  }
}

export default ArrowRightOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
