import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CompressFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4zm0 3h16v2H4z\"/>")
      .name("CompressFilled")
  }
}

export default CompressFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
