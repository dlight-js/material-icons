import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AdUnitsTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 3h10v1H7zm0 17h10v1H7z\" opacity=\".3\"/><path d=\"M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zm0 14V6h10v12H7zm0 3v-1h10v1H7z\"/><path d=\"M16 7H8v2h8V7z\"/>")
      .name("AdUnitsTwoTone")
  }
}

export default AdUnitsTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
