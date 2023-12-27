import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CalendarViewDaySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z\"/>")
      .name("CalendarViewDaySharp")
  }
}

export default CalendarViewDaySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
