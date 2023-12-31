import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EventTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 8h14V6H5z\" opacity=\".3\"/><path d=\"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z\"/>")
      .name("EventTwoTone")
  }
}

export default EventTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
