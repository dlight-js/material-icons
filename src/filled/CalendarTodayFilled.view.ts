import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CalendarTodayFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z\"/>")
      .name("CalendarTodayFilled")
  }
}

export default CalendarTodayFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
