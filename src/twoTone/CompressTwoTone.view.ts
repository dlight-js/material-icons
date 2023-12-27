import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CompressTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 9h16v2H4zm12-5h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zm-4-7h16v2H4z\"/>")
      .name("CompressTwoTone")
  }
}

export default CompressTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
