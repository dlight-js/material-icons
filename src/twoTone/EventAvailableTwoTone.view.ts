import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EventAvailableTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 5h14v2H5z\" opacity=\".3\"/><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-2.51 4.53-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06 3.17 3.17z\"/>")
      .name("EventAvailableTwoTone")
  }
}

export default EventAvailableTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
