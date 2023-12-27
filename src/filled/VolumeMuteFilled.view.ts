import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VolumeMuteFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 9v6h4l5 5V4l-5 5H7z\"/>")
      .name("VolumeMuteFilled")
  }
}

export default VolumeMuteFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
