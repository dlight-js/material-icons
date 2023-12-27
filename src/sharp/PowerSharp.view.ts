import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PowerSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 7V3h-2v4h-4V3H8v4H6v7.5L9.5 18v3h5v-3l3.5-3.51V7h-2z\"/>")
      .name("PowerSharp")
  }
}

export default PowerSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
