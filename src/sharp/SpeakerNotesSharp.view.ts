import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SpeakerNotesSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2.01L2 22l4-4h16V2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z\"/>")
      .name("SpeakerNotesSharp")
  }
}

export default SpeakerNotesSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
