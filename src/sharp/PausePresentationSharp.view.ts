import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PausePresentationSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M1 3v18h22V3H1zm20 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z\"/>")
      .name("PausePresentationSharp")
  }
}

export default PausePresentationSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
