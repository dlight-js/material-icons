import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RollerShadesOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 19V3H4v16H2v2h20v-2h-2zM18 5v6H6V5h12zM6 19v-6h5v1.82A1.746 1.746 0 0 0 12 18a1.746 1.746 0 0 0 1-3.18V13h5v6H6z\"/>")
      .name("RollerShadesOutlined")
  }
}

export default RollerShadesOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
