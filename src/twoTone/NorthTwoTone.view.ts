import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NorthTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z\"/>")
      .name("NorthTwoTone")
  }
}

export default NorthTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
