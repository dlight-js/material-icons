import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HouseSidingSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 12h3L12 3 2 12h3v8h2v-2h10v2h2v-8zM7.21 10h9.58l.21.19V12H7v-1.81l.21-.19zm7.36-2H9.43L12 5.69 14.57 8zM7 16v-2h10v2H7z\"/>")
      .name("HouseSidingSharp")
  }
}

export default HouseSidingSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
