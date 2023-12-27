import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NoteSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z\"/>")
      .name("NoteSharp")
  }
}

export default NoteSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
