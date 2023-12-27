import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwitchRightTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.5 15.38V8.62L18.88 12l-3.38 3.38\" opacity=\".3\"/><path d=\"M15.5 15.38V8.62L18.88 12l-3.38 3.38M14 19l7-7-7-7v14zm-4 0V5l-7 7 7 7z\"/>")
      .name("SwitchRightTwoTone")
  }
}

export default SwitchRightTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
