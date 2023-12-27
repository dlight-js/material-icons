import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowRightAltOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z\"/>")
      .name("ArrowRightAltOutlined")
  }
}

export default ArrowRightAltOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
