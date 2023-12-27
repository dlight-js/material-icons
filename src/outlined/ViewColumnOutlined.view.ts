import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewColumnOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33V7h3.33v10zM19 17h-3.33V7H19v10z\"/>")
      .name("ViewColumnOutlined")
  }
}

export default ViewColumnOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
