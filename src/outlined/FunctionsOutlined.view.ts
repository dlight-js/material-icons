import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FunctionsOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z\"/>")
      .name("FunctionsOutlined")
  }
}

export default FunctionsOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
