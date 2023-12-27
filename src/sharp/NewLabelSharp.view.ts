import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NewLabelSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m21 12-4.97 7H12v-6H9v-3H3V5h13.03L21 12zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3v-2z\"/>")
      .name("NewLabelSharp")
  }
}

export default NewLabelSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
