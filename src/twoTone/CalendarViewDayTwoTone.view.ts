import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CalendarViewDayTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z\"/><path d=\"M5 12h14v1H5z\" opacity=\".3\"/>")
      .name("CalendarViewDayTwoTone")
  }
}

export default CalendarViewDayTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
