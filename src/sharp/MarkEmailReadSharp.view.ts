import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MarkEmailReadSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 19a6.995 6.995 0 0 1 10-6.32V4H2v16h10.08c-.05-.33-.08-.66-.08-1zM4 6l8 5 8-5v2l-8 5-8-5V6zm13.34 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z\"/>")
      .name("MarkEmailReadSharp")
  }
}

export default MarkEmailReadSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
