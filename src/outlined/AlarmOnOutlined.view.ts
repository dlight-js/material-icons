import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AlarmOnOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10.54 14.53 8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06zm6.797-12.72 4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0 1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z\"/>")
      .name("AlarmOnOutlined")
  }
}

export default AlarmOnOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
