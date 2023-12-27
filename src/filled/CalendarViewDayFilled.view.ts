import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CalendarViewDayFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z\"/>")
      .name("CalendarViewDayFilled")
  }
}

export default CalendarViewDayFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
