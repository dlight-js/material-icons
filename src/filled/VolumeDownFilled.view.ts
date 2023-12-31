import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VolumeDownFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z\"/>")
      .name("VolumeDownFilled")
  }
}

export default VolumeDownFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
