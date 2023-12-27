import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StopTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 8h8v8H8z\" opacity=\".3\"/><path d=\"M6 18h12V6H6v12zM8 8h8v8H8V8z\"/>")
      .name("StopTwoTone")
  }
}

export default StopTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
