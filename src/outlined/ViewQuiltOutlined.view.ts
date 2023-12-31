import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewQuiltOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33v-4h3.33v4zM19 17h-3.33v-4H19v4zm0-6h-8.67V7H19v4z\"/>")
      .name("ViewQuiltOutlined")
  }
}

export default ViewQuiltOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
