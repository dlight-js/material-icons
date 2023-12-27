import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HorizontalDistributeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z\"/>")
      .name("HorizontalDistributeSharp")
  }
}

export default HorizontalDistributeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
