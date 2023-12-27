import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StayPrimaryPortraitSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5.01 1v22H19V1H5.01zM17 19H7V5h10v14z\"/>")
      .name("StayPrimaryPortraitSharp")
  }
}

export default StayPrimaryPortraitSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
