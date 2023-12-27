import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AlignVerticalCenterOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z\"/>")
      .name("AlignVerticalCenterOutlined")
  }
}

export default AlignVerticalCenterOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
