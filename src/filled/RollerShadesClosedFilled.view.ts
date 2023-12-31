import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RollerShadesClosedFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2h-2zM6 19v-2h5v2H6zm7 0v-2h5v2h-5z\"/>")
      .name("RollerShadesClosedFilled")
  }
}

export default RollerShadesClosedFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
