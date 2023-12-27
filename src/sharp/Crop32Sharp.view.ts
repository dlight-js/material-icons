import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Crop32Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 6H3v12h18V6zm-2 10H5V8h14v8z\"/>")
      .name("Crop32Sharp")
  }
}

export default Crop32Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
