import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VolumeDownTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 13h2.83L12 15.17V8.83L9.83 11H7z\" opacity=\".3\"/><path d=\"M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 16 7.97zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z\"/>")
      .name("VolumeDownTwoTone")
  }
}

export default VolumeDownTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
