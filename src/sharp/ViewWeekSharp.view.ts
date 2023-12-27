import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewWeekSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7.33 20H2V4h5.33v16zM22 20V4h-5.33v16H22zm-7.33 0V4H9.33v16h5.34z\"/>")
      .name("ViewWeekSharp")
  }
}

export default ViewWeekSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
