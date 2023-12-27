import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalHospitalSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3.01L3 21h18V3zm-3 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z\"/>")
      .name("LocalHospitalSharp")
  }
}

export default LocalHospitalSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
