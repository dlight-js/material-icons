import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalDistributeOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z\"/>")
      .name("VerticalDistributeOutlined")
  }
}

export default VerticalDistributeOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
