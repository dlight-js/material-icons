import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CalendarViewMonthSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 4H2v16h20V4zM8 11H4V6h4v5zm6 0h-4V6h4v5zm6 0h-4V6h4v5zM8 18H4v-5h4v5zm6 0h-4v-5h4v5zm6 0h-4v-5h4v5z\"/>")
      .name("CalendarViewMonthSharp")
  }
}

export default CalendarViewMonthSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
