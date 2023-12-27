import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CalendarTodaySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 3h-3V1h-2v2H7V1H5v2H2v20h20V3zm-2 18H4V8h16v13z\"/>")
      .name("CalendarTodaySharp")
  }
}

export default CalendarTodaySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
