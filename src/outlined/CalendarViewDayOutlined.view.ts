import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CalendarViewDayOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z\"/>")
      .name("CalendarViewDayOutlined")
  }
}

export default CalendarViewDayOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
