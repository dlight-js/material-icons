import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DateRangeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm4-7h-3V2h-2v2H8V2H6v2H3v18h18V4zm-2 16H5V9h14v11z\"/>")
      .name("DateRangeSharp")
  }
}

export default DateRangeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
