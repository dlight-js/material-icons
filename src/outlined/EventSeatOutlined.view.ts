import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EventSeatOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 5v7H9V5h6m0-2H9c-1.1 0-2 .9-2 2v9h10V5c0-1.1-.9-2-2-2zm7 7h-3v3h3v-3zM5 10H2v3h3v-3zm15 5H4v6h2v-4h12v4h2v-6z\"/>")
      .name("EventSeatOutlined")
  }
}

export default EventSeatOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
