import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BedroomChildSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 8.5h6v2H9zM7.51 12h9v2h-9z\"/><path d=\"M22 2H2v20h20V2zm-4 15h-1.5v-1.5h-9V17H6v-6.32l1.5-.01V7h9v3.67H18V17z\"/>")
      .name("BedroomChildSharp")
  }
}

export default BedroomChildSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
