import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewDaySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z\"/>")
      .name("ViewDaySharp")
  }
}

export default ViewDaySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
