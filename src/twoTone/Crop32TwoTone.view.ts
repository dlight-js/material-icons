import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Crop32TwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z\"/>")
      .name("Crop32TwoTone")
  }
}

export default Crop32TwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
