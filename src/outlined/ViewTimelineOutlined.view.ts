import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewTimelineOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 15h6v2H6zm6-8h6v2h-6zm-3 4h6v2H9z\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z\"/>")
      .name("ViewTimelineOutlined")
  }
}

export default ViewTimelineOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
